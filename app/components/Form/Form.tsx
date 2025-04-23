"use client";

import styles from "./form.module.css";
import Title from "../Title/TItle";
import React from "react";

import { useEmailSender } from "@/app/hooks/useEmailSender";

import classNames from "classnames";
import Loader from "../loader/Loader";

interface FormProps {
  introText?: string;
}

export default function Form({ introText }: FormProps) {
  const { handleChangeMessage, isSubmitting, onSubmit, toSend } =
    useEmailSender();

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
          {isSubmitting ? <Loader /> : "Submit"}
        </button>
      </form>
      ;
    </section>
  );
}

// Form fields sizes on mobile screen
//spaces between portfolio images
//button is too small in comparison to the other elements
// Portfolio images not looking good
