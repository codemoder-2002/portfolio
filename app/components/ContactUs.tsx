"use client";

import React from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { sendContactMessage } from "@/lib/actions/email";

export default function ContactUs() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {} as Record<string, string[]>,
    submitting: false,
    submitted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, submitting: true, submitted: false }));

    const result = await sendContactMessage({
      name: state.name,
      email: state.email,
      subject: state.subject,
      message: state.message,
    });

    if (result.success) {
      setState({
        name: "",
        email: "",
        message: "",
        subject: "",
        errors: {},
        submitting: false,
        submitted: true,
      });
    } else {
      setState((prev) => ({
        ...prev,
        submitting: false,
        submitted: false,
        errors:
          result.errors && typeof result.errors === "object"
            ? Object.fromEntries(
                Object.entries(result.errors).map(([key, value]) => [
                  key,
                  Array.isArray(value) ? value : [String(value)],
                ])
              )
            : {},
      }));
    }
  };

  return (
    <section className="w-full mx-auto max-w-screen-lg px-2 z-30 relative">
      <h2 className="mb-5 mt-4 bg-gradient-to-br from-indigo-500 via-sky-600 to-violet-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
        Let&apos;s Get in Touch
      </h2>
      <p className="mb-6 text-center text-muted-foreground">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </p>

      <div
        className="mx-auto mb-6 grid w-full items-start gap-12 rounded-lg border bg-slate-800/50 px-4 pb-6 pt-10 shadow shadow-slate-800 md:grid-cols-2 lg:px-12"
        style={{
          backgroundImage:
            "radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)",
        }}
      >
        <form className="space-y-8 text-slate-300" onSubmit={handleSubmit}>
          <div className="space-y-4 text-lg">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              required
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-slate-500"
              placeholder="Your name"
            />
            {state.errors.name && (
              <p className="text-sm text-red-500">{state.errors.name[0]}</p>
            )}
          </div>

          <div className="space-y-4 text-lg">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-slate-500"
              placeholder="you@example.com"
            />
            {state.errors.email && (
              <p className="text-sm text-red-500">{state.errors.email[0]}</p>
            )}
          </div>
          <div className="space-y-4 text-lg">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              required
              value={state.subject}
              onChange={(e) => setState({ ...state, subject: e.target.value })}
              className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-slate-500"
              placeholder="Subject of your message"
            />
            {state.errors.subject && (
              <p className="text-sm text-red-500">{state.errors.subject[0]}</p>
            )}
          </div>

          <div className="space-y-4 text-lg">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              required
              value={state.message}
              onChange={(e) => setState({ ...state, message: e.target.value })}
              className="w-full min-h-[100px] rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-slate-500"
              placeholder="Your message"
            />
            {state.errors.message && (
              <p className="text-sm text-red-500">{state.errors.message[0]}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-br from-slate-800 to-slate-700 py-2 font-medium text-white hover:from-slate-700 hover:to-slate-800 transition"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send"}{" "}
            <Send className="ml-2 inline h-4" />
          </button>

          {state.submitted && (
            <p className="text-sm text-green-400">Message sent successfully!</p>
          )}
        </form>

        <div>
          <h3 className="mb-10 text-2xl font-semibold text-slate-300">
            Connect with Us
          </h3>
          <div className="mb-8 flex gap-4 items-start">
            <Mail className="h-6 w-6 text-white mt-1" />
            <div className="text-md text-slate-300">
              <p>Email:</p>
              <p>yashsavani540@gmail.com</p>
            </div>
          </div>
          <div className="mb-8 flex gap-4 items-start">
            <Phone className="h-6 w-6 text-white mt-1" />
            <div className="text-md text-slate-300">
              <p>Call:</p>
              <p>+91 90540 84174</p>
            </div>
          </div>
          <div className="mb-8 flex gap-4 items-start">
            <MapPin className="h-6 w-6 text-white mt-1" />
            <div className="text-md text-slate-300">
              <p>Location:</p>
              <p>Surat, Gujarat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
