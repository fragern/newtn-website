"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import Image from "next/image";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import sendEmail from "@/app/_server/send-email";
import type { EmailFormType } from "@/types/emailFormType";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    setError,
    clearErrors,
  } = useForm<EmailFormType>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      captcha: "",
    },
  });

  const onSubmit = async (data: EmailFormType) => {
    if (!data.captcha) {
      setError("captcha", { type: "required", message: "Captcha is required" });
      return;
    }
    setIsSubmitting(true);
    const response = await sendEmail(data);
    if (response.success) {
      alert("Your message has been sent!");
    } else {
      alert("Failed to send message. Please try again.");
    }
    reset();
    captchaRef.current?.resetCaptcha();
    setIsSubmitting(false);
  };

  const onHCaptchaChange = (token: string) => {
    setValue("captcha", token, {
      shouldValidate: true,
      shouldDirty: true,
    });
    clearErrors("captcha");
  };

  const captchaRef = useRef<HCaptcha>(null);

  return (
    <section className="relative flex w-full items-start justify-center bg-secondary px-4">
      <div className="flex w-full max-w-5xl flex-col gap-8 py-16 md:gap-16 md:py-32 lg:flex-row lg:items-center">
        <div className="absolute bottom-0 right-0 h-[200px] w-[200px] md:h-[400px] md:w-[400px] lg:h-[549px] lg:w-[551px]">
          <div className="relative h-full w-full">
            <Image
              src="/assets/images/squares-triangles-white-outline.svg"
              alt="A triangle made out of outlines of squares and triangles"
              fill
              className="h-full w-full object-contain opacity-25"
            />
          </div>
        </div>

        <div className="z-10 flex max-w-screen-sm flex-col gap-2 md:gap-4">
          <h1 className="text-4xl font-bold text-primary md:text-6xl">
            LET&apos;S BRING YOUR IDEAS TO LIFE.
          </h1>
          <p className="max-w-[400px] text-lg text-black md:text-2xl">
            Tell us a bit about your project, and we&apos;ll get back to you
            soon!
          </p>
        </div>

        <div className="z-10 flex flex-1 items-center justify-center">
          <form
            className="flex w-full flex-col gap-8 text-primary lg:max-w-screen-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex w-full flex-col gap-2">
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name..."
                  className="rounded-2xl bg-background p-4 text-sm font-medium md:text-base"
                />
                <ErrorMessage error={errors.name?.message} />
              </div>
              <div className="flex w-full flex-col gap-2">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Your Email..."
                  className="rounded-2xl bg-background p-4 text-sm font-medium md:text-base"
                />
                <ErrorMessage error={errors.email?.message} />
              </div>
            </div>
            <div className="flex w-full flex-col gap-2">
              <textarea
                {...register("message", { required: "Message is required" })}
                rows={5}
                placeholder="Your Message..."
                className="w-full resize-none rounded-2xl bg-background p-4 text-sm font-medium md:text-base"
                required
              />
              <ErrorMessage error={errors.message?.message} />
            </div>
            <div>
              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? ""}
                ref={captchaRef}
                onVerify={onHCaptchaChange}
                loadAsync
              />
              <ErrorMessage error={errors.captcha?.message} />
            </div>
            <div>
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-primary md:px-8 md:py-4 md:text-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Your Idea"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

const ErrorMessage = ({ error }: { error?: string | null }) => {
  if (!error) return null;
  return <span className="text-sm text-red-500">{error}</span>;
};
