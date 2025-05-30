"use server";

import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validators/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const result = contactFormSchema.safeParse({ name, email, subject, message });

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <your@domain.com>",
      to: "yashsavani540@gmail.com",
      subject: subject || `New message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong><br>${message}</p>`,
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      errors: { message: ["Something went wrong while sending email."] },
    };
  }
}