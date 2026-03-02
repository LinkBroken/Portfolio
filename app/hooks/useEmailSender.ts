'use client';

import React from "react";
import { send } from "emailjs-com";
import { Bounce, toast } from "react-toastify";

export interface EmailData {
  from_name: string;
  reply_to: string;
  message: string;
  to_name?: string;
}

export const useEmailSender = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const sendEmail = async (data: EmailData) => {
    setIsSubmitting(true);
    try {
      await send(
        "service_rt37aib",
        "template_hra733c",
        { ...data, to_name: data.to_name || "Omer" },
        "_VlS_SEVdbuNXN_gk"
      );

      toast.success("Email sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        theme: "light",
        transition: Bounce,
      });
      return true;
    } catch (err) {
      toast.error("Error sending email!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        theme: "light",
        transition: Bounce,
      });
      console.error("EmailJS Error:", err);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Legacy support for older components if needed, but we're migrating everything
  const [toSend, setToSend] = React.useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const handleChangeMessage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setToSend((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await sendEmail(toSend);
    setToSend({ from_name: "", to_name: "", message: "", reply_to: "" });
  };

  return {
    isSubmitting,
    sendEmail,
    onSubmit, // Legacy
    handleChangeMessage, // Legacy
    toSend, // Legacy
  };
};
