"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(100),
  phone: z.string().max(20).optional().or(z.literal("")),
  subject: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(1, "Message is required").max(5000),
});

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  try {
    // 1. Server-side validation
    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      return {
        success: false,
        error: "Invalid form data provided.",
        validationErrors: parsed.error.flatten().fieldErrors,
      };
    }

    const { name, email, phone, subject, message } = parsed.data;

    // 2. Database Insertion
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
        status: "PENDING",
      },
    });

    // 3. Email Notification
    if (process.env.RESEND_API_KEY && process.env.CONTACT_NOTIFICATION_EMAIL) {
      try {
        await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>", // Or verified domain if configured
          to: process.env.CONTACT_NOTIFICATION_EMAIL,
          subject: `New Contact Query: ${subject || "No Subject"}`,
          text: `
New Contact Query

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Subject: ${subject || "N/A"}
Message:
${message}

Submitted At: ${contact.createdAt.toISOString()}
          `,
        });
      } catch (emailError) {
        // Log the error safely but don't fail the user submission
        console.error("Failed to send Resend email notification:", emailError);
      }
    } else {
      console.warn("RESEND_API_KEY or CONTACT_NOTIFICATION_EMAIL not set. Email skipped.");
    }

    // 4. Return Safe Response
    return {
      success: true,
      message: "Your message has been received successfully.",
    };
  } catch (error) {
    console.error("Contact Form Error:", error);
    // Don't leak raw database/provider errors to the client
    return {
      success: false,
      error: "Something went wrong while sending your message. Please try again or contact me directly by email.",
    };
  }
}
