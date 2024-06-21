import { EmailTemplateProps } from "@/lib/types/types";

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>Message from {name}</h1>
    <p>Email: {email}</p>
    <p>Subject: {subject}</p>
    <p>Message: {message}</p>
  </div>
);
