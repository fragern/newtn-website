"use server";

import type { EmailFormType } from "@/types/EmailFormType";

const sendEmail = async ({ captcha, ...rest }: EmailFormType) => {
  try {
    const { success: captchaSuccess } = (await (
      await fetch(
        `https://api.hcaptcha.com/siteverify?secret=${process.env.HCAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          cache: "no-cache",
        },
      )
    ).json()) as { success: boolean };
    if (!captchaSuccess) {
      console.error("Failed to verify captcha.");
      return { success: false, error: "Failed to verify captcha." };
    }
  } catch (error) {
    console.error("Error occured when trying to send email");
    return { success: false, error };
  }

  try {
    const res = await (
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(
          {
            ...rest,
            access_key: process.env.WEB3FORM_KEY,
            subject: "Form Submission from Newtn Website",
          },
          null,
          2,
        ),
      })
    ).json();

    if (res.success) {
      return { success: true, error: null };
    } else {
      console.error("Failed to send email:", res);
      return { success: false, error: "Failed to send email." };
    }
  } catch (error) {
    console.error("Error occured when trying to send email");
    return { success: false, error };
  }
};

export default sendEmail;
