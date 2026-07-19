"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "./actions";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      setStatus("error");
      if (result.validationErrors) {
        const mappedErrors: Record<string, string> = {};
        for (const [key, value] of Object.entries(result.validationErrors)) {
          if (value && value.length > 0) {
            mappedErrors[key] = value[0];
          }
        }
        setErrors(mappedErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="max-w-2xl mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6">Contact</h1>
        <p className="text-xl text-muted-foreground">
          Have a question or want to work together? Leave a message.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            I am currently open to new opportunities. Whether you have a question about my work or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <a href="mailto:sanaullahharaj0435@gmail.com" className="text-accent hover:underline">sanaullahharaj0435@gmail.com</a>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Location</h3>
              <p className="text-muted-foreground">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center h-full py-12">
              <CheckCircle2 className="h-16 w-16 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground mb-8">Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
              <Button onClick={() => setStatus("idle")} variant="outline" className="rounded-full">
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "error" && (
                <div className="p-4 bg-destructive/10 text-destructive rounded-xl flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  <p className="text-sm">Something went wrong. Please try again later.</p>
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors ${errors.name ? 'border-destructive' : 'border-border'}`}
                  placeholder="John Doe"
                  disabled={status === "loading"}
                />
                {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors ${errors.email ? 'border-destructive' : 'border-border'}`}
                  placeholder="john@example.com"
                  disabled={status === "loading"}
                />
                {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors ${errors.phone ? 'border-destructive' : 'border-border'}`}
                  placeholder="+1 (555) 000-0000"
                  disabled={status === "loading"}
                />
                {errors.phone && <p className="mt-2 text-sm text-destructive">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject (Optional)</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                  placeholder="How can we help?"
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors resize-none ${errors.message ? 'border-destructive' : 'border-border'}`}
                  placeholder="Your message here..."
                  disabled={status === "loading"}
                />
                {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
              </div>

              <Button 
                type="submit" 
                className="w-full rounded-xl h-12" 
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <span className="flex items-center">Sending... <span className="ml-2 animate-pulse">...</span></span>
                ) : (
                  <span className="flex items-center">Send Message <Send className="ml-2 h-4 w-4" /></span>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
