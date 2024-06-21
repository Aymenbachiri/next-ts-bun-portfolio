import { EmailTemplate } from "@/components/email/EmailTemplate";
import { ContactFormSchema } from "@/lib/schemas/ContactFormSchema";
import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsedBody = ContactFormSchema.safeParse(body);

    if (!parsedBody.success) {
      return new NextResponse(
        JSON.stringify({
          errors: parsedBody.error.issues.map((issue) => ({
            field: issue.path[0],
            message: issue.message,
          })),
        }),
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsedBody.data;

    const { data, error } = await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>",
      to: "aymen.bachiri99@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      reply_to: email,
      react: EmailTemplate({
        name,
        email,
        subject,
        message,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Input validation error:", error.issues);
      return new NextResponse(
        JSON.stringify({ error: error.issues[0].message }),
        { status: 400 }
      );
    } else {
      console.error("Error during product creation:", error);
      return new NextResponse(
        JSON.stringify({ error: "Failed to create product" }),
        { status: 500 }
      );
    }
  }
}
