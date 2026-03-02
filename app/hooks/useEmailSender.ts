import React, { ChangeEvent, FormEvent } from "react";

import { send } from "emailjs-com";
import { Bounce, toast } from "react-toastify";

export const useEmailSender = () => {
  const initState = {
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  };

  const [toSend, setToSend] = React.useState(initState);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChangeMessage = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    send("service_rt37aib", "template_hra733c", toSend, "_VlS_SEVdbuNXN_gk")
      .then(() => {
        toast.success("Email sent successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setToSend(initState);
        setIsSubmitting(false);
      })
      .catch((err) => {
        toast.error("Error sending email!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setIsSubmitting(false);

        console.log(err);
      });
  };

  return {
    isSubmitting,
    onSubmit,
    handleChangeMessage,
    toSend,
  };
};
