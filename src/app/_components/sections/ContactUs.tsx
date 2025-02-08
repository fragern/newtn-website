"use client";

import { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Form reference is not available.");
      return;
    }

    emailjs
      .sendForm(
        "service_f2eq0c6",
        "template_reaik89",
        formRef.current,
        "dejxzEmrq1bTiLyjO",
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Your message has been sent!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <section className="relative flex w-full flex-col gap-16 bg-secondary px-10 py-32 lg:flex-row lg:items-center">
      <div className="absolute bottom-0 right-0 h-[549px] w-[551px]">
        <div className="relative h-full w-full">
          <Image
            src="/assets/images/squares-triangles-white-outline.svg"
            alt="A triangle made out of outlines of squares and triangles"
            fill
            className="object-fit h-full w-full"
          />
        </div>
      </div>

      <div className="z-10 flex max-w-screen-sm flex-col gap-4">
        <h1 className="text-6xl font-bold text-primary">
          LET&apos;S BRING YOUR IDEAS TO LIFE.
        </h1>
        <p className="max-w-[400px] text-2xl text-black">
          Tell us a bit about your project, and we&apos;ll get back to you soon!
        </p>
      </div>

      <div className="z-10 flex flex-1 items-center justify-center">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex w-full flex-col gap-8 text-primary lg:max-w-screen-md"
        >
          <div className="flex flex-col gap-8 lg:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name..."
              className="flex-1 rounded-2xl bg-background p-4 font-medium"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email..."
              className="flex-1 rounded-2xl bg-background p-4 font-medium"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message..."
              className="w-full resize-none rounded-2xl bg-background p-4 font-medium"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-4 font-medium text-white hover:bg-white hover:text-primary"
            >
              Send Your Idea
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
