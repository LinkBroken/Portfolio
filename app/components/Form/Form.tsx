"use client";

import styles from "./form.module.css";
import Title from "../Title/TItle";
import React, { FormEvent } from "react";
import { send } from "emailjs-com";
import { Bounce, toast } from "react-toastify";
import classNames from "classnames";

export type field = {
  type: "text" | "email" | "number";
  name: string;
  required?: boolean;
  border: "cropped" | "full";
};
interface FormProps {
  introText?: string;
  fields?: field[];
}

const initState = {
  from_name: "",
  to_name: "",
  message: "",
  reply_to: "",
};

export default function Form({ fields, introText }: FormProps) {
  const [toSend, setToSend] = React.useState(initState);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  if (fields?.length == 0) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeMessage = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    send("service_rt37aib", "template_hra733c", toSend, "_VlS_SEVdbuNXN_gk")
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((response) => {
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
        console.log(err);
      });
    setIsSubmitting(false);
  };

  return (
    <section className={styles.section}>
      {introText && (
        <Title
          titlePadding
          size="large"
          border
          align="center"
          label={introText}
          containerPadding
        />
      )}
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.contact__formField}>
          <label htmlFor="name">Name</label>
          <input
            required
            className={classNames(styles.input, styles["input--cropped"])}
            id="name"
            type="text"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChangeMessage}
          />
        </div>
        <div className={styles.contact__formField}>
          <label htmlFor="name">email</label>
          <input
            required
            className={classNames(styles.input, styles["input--cropped"])}
            id="email"
            type="email"
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChangeMessage}
          />
        </div>
        <div className={styles.contact__formField}>
          <label htmlFor="msg">Your Message</label>
          <textarea
            required
            rows={5}
            className={classNames(styles.input, styles["input--cropped"])}
            id="msg"
            name="message"
            value={toSend.message}
            onChange={handleChangeMessage}
          />
        </div>
        <button className={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      ;
    </section>
  );
}
