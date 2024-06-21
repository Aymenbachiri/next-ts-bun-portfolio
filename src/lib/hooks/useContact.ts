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
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message sent successfully , I will reply soon!");
        reset();
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        toast.error(error.message);
      } else {
        console.error("An unknown error occurred. Please try again later.");
        toast.error("An unknown error occurred. Please try again later.");
      }
    }
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
  };
};
