"use client";
import React from "react";
import styles from "./styles.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("Ad zorunludur."),
  lastName: yup.string().required("Soyad zorunludur."),
  email: yup
    .string()
    .email("Geçerli bir e-mail giriniz.")
    .required("E-mail zorunludur."),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Sadece sayılar girebilirsiniz.")
    .min(10, "Telefon numarası en az 10 karakter olmalı.")
    .max(15, "Telefon numarası en fazla 15 karakter olabilir."),
  password: yup.string().min(6, "Şifre en az 6 karakter olmalı."),
});

const AccountProfil = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Güncelleme işlemleri burada yapılabilir (API çağrısı gibi)
  };
  return (
    <section className={styles.profilWrapper}>
      <div className={styles.accName}>
        <h3>Profil</h3>
        <div></div>
      </div>

      <form autoComplete="off" className={styles.accForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Ad:</label>
          <input autoComplete="off" type="text" {...register("firstName")} />
          {errors.firstName && (
            <p>{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label>Soyad:</label>
          <input type="text" {...register("lastName")} />
          {errors.lastName && (
            <p>{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label>E-mail:</label>
          <input type="email" {...register("email")} />
          {errors.email && (
            <p>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Telefon:</label>
          <input type="text" {...register("phone")} />
          {errors.phone && (
            <p>{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label>Şifrə:</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <p>{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Yadda Saxla</button>
      </form>
    </section>
  );
};

export default AccountProfil;
