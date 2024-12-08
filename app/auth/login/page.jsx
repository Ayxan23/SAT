"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import styles from "./styles.module.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useSearchParams, useRouter } from "next/navigation";

// Yup ile doğrulama şeması
const schema = yup.object({
  email: yup
    .string()
    .required("Bu bölmə doldurulmalıdır")
    .email("Düzgün bir e-mail adresi yazın"),
  password: yup
    .string()
    .required("Bu bölmə doldurulmalıdır")
    .min(6, "Şifrə ən az 6 simvol olmalıdır"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const onSubmit = async (data) => {
    const { email, password } = data;
    //hash code
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { success } = await res.json();
    if (success) {
      const nextUrl = searchParams.get("next");
      router.push(nextUrl ?? "/");
    } else {
      setError("password", {
        type: "manual",
        message: "Email veya şifre hatalı",
      });
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
          </div>

          {/* Password Input */}
          <div>
            <label>Şifrə:</label>
            <div className={styles.passBox}>
              <input
                className={errors.password && styles.redBorder}
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

          {/* Forgot Password Link */}
          <div className={styles.loginLink}>
            <Link href="/auth/reset">Şifrənizi unutmusunuz?</Link>
          </div>

          {/* Login Button */}
          <button type="submit">Daxil olun</button>
        </form>

        {/* Sign Up Link */}
        <div className={styles.loginLink}>
          Hesabınız yoxdur? <Link href="/auth/signup">Qeydiyyatdan keçin</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
