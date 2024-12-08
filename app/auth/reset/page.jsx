"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import styles from "./styles.module.css";

// Yup ile doğrulama şeması
const schema = yup.object({
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi girin")
    .required("E-posta gerekli"),
});

const ResetForm = () => {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email } = data;
    //hash code
    const res = await fetch("/api/reset", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    });

    const { success } = await res.json();
    if (success) {
      setMessage("Email ünvanına şifrənin yenilənməsi üçün link göndərildi!");
    } else {
      setError("email", {
        type: "manual",
        message: "Email sistemdə mövcud deyil",
      });
      setMessage("");
    }
  };

  return (
    <section className={styles.loginWrapper}>
      <div className={styles.loginBox}>
        <h2>
          <Link href={"/"}>sat.az</Link>
        </h2>
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div>
            <label>Email:</label>
            <input
              className={errors.email && styles.redBorder}
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
            {message != "" && <p>{message}</p>}
          </div>

          {/* Reset Button */}
          <button type="submit">Şifrəni dəyişin</button>
        </form>

        {/* Login Link */}
        <div className={styles.loginLink}>
          Hesabınız var? <Link href="/auth/login">Daxil olun</Link>
        </div>
      </div>
    </section>
  );
};

export default ResetForm;
