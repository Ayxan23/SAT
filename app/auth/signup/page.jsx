"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import styles from "./styles.module.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

// Yup ile doğrulama şeması
const schema = yup.object({
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi girin")
    .required("E-posta gerekli"),
  password: yup
    .string()
    .required("Şifrə tələb olunur")
    .min(6, "Şifrə en azı 6 simvol olmalıdır"),
  passwordTwo: yup
    .string()
    .oneOf([yup.ref("password"), null], "Şifrələr eyni olmalıdır")
    .required("Şifrəni təkrarlamaq tələb olunur"),
});

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
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
      setError("email", {
        type: "manual",
        message: "Bu email sistemdə mövcuddur",
      });
      setMessage("");
    } else {
      setMessage("Email ünvanına hesabın yaradılması üçün link göndərildi!");
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
            {message != "" && <p className={styles.formMessage}>{message}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label>Şifrə:</label>
            <div className={styles.passBox}>
              <input
                className={errors.email && styles.redBorder}
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                placeholder="Şifrə"
                {...register("password")}
              />
              <p onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </p>
            </div>
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          {/* Password 2 Input */}
          <div>
            <label>Şifrəni təkrarlayın:</label>
            <div className={styles.passBox}>
              <input
                className={errors.email && styles.redBorder}
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                placeholder="Şifrə"
                {...register("passwordTwo")}
              />
              <p onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </p>
            </div>
            {errors.passwordTwo && <span>{errors.passwordTwo.message}</span>}
          </div>

          {/* Signun Button */}
          <button type="submit">Qeydiyyatdan keç</button>
        </form>

        {/* Login Link */}
        <div className={styles.loginLink}>
          Hesabınız var? <Link href="/auth/login">Daxil olun</Link>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
