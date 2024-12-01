import { useForm } from "react-hook-form";
import {
  ContactFormSchema,
  type ContactFormData,
} from "../schemas/ContactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

export const useContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await toast.promise(
      (async () => {
        const res = await fetch("/api/send", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        reset();
      })(),
      {
        loading: "Sending your message...",
        success: "Message sent successfully, I will reply soon!",
        error: "An error occurred. Please try again later.",
      }
    );
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
  };
};
