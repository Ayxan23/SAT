"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./styles.module.css";
import Categs from "@/mocks/categ.json";

const schema = yup.object().shape({
  category: yup.string().required("Kategori seçilmesi zorunludur."),
  isNew: yup.boolean(),
  name: yup
    .string()
    .required("İlan ismi zorunludur.")
    .min(3, "En az 3 karakter olmalı."),
  city: yup.string().required("Şehir seçilmesi zorunludur."),
  price: yup
    .number()
    .typeError("Fiyat bir sayı olmalı")
    .positive("Fiyat pozitif olmalı")
    .required("Fiyat zorunludur."),
  description: yup
    .string()
    .required("Açıklama zorunludur.")
    .max(500, "Açıklama en fazla 500 karakter olmalı."),
  photo: yup
    .mixed()
    .required("Bir fotoğraf yüklemelisiniz.")
    .test(
      "fileType",
      "Yalnızca .jpeg, .png, .webp, .heif, .heic formatları desteklenir.",
      (value) => {
        if (!value || !value[0]) return false; // Dosya seçilmediyse
        const supportedFormats = [
          "image/jpeg",
          "image/png",
          "image/webp",
          "image/heif",
          "image/heic",
        ];
        return supportedFormats.includes(value[0].type); // MIME türü kontrolü
      }
    )
    .test("fileSize", "Dosya boyutu 2MB'dan büyük olmamalıdır.", (value) => {
      if (!value || !value[0]) return false; // Dosya seçilmediyse
      return value[0].size <= 2 * 1024 * 1024; // Boyut kontrolü
    }),
  username: yup.string().required("Kullanıcı ismi zorunludur."),
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta adresi zorunludur."),
  phone: yup
    .string()
    .required("Telefon numarası zorunludur.")
    .matches(/^\d{10}$/, "Telefon numarası 10 haneli olmalıdır."),
});

const AccountAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    alert("İlan başarıyla gönderildi!");
  };

  const maxLength = 500;
  const [text, setText] = useState("");

  return (
    <section className={styles.addWrapper}>
      <div className={styles.accName}>
        <h3>Yeni Elan</h3>
        <div></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.accForm}>
        <label>Elanın Adı:</label>
        <input type="text" {...register("name")} />
        <p>{errors.name?.message}</p>

        <label>Kategori:</label>
        <select className={styles.formOption} {...register("category")}>
          <option value="">Kateqoriya Seçin</option>
          {Categs.map((categ) => (
            <option key={categ.id} value={categ.value}>
              {categ.name}
            </option>
          ))}
          <option value="emlak">Emlak</option>
          <option value="otomobil">Otomobil</option>
          <option value="elektronik">Elektronik</option>
        </select>
        <p>{errors.category?.message}</p>

        <label>Qiymət:</label>
        <input type="number" {...register("price")} />
        <p>{errors.price?.message}</p>

        <label>Məzmun:</label>
        <textarea
          className={styles.textArea}
          value={text}
          {...register("description")}
          onChange={(e) => {
            if (e.target.value.length <= maxLength) {
              setText(e.target.value);
            }
          }}
        />
        <p className={styles.textAreaP}>
          Qalan Simvol: {maxLength - text.length}
        </p>
        <p>{errors.description?.message}</p>

        <label>Şəhər:</label>
        <input type="text" {...register("city")} />
        <p>{errors.city?.message}</p>

        <div className={styles.accFormCheck}>
          <label>Yeni?</label>
          <input type="checkbox" {...register("isNew")} />
        </div>

        <label>Şəkil:</label>
        <input
          type="file"
          {...register("photo")}
          accept="image/jpeg, image/png, image/webp, image/heif, image/heic"
        />
        <p>{errors.photo?.message}</p>

        <label>İstifadəçinin Adı:</label>
        <input type="text" {...register("username")} />
        <p>{errors.username?.message}</p>

        <label>E-mail:</label>
        <input type="email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <label>Telefon:</label>
        <input type="text" {...register("phone")} />
        <p>{errors.phone?.message}</p>

        <button type="submit">Elan Elavə Et</button>
      </form>
    </section>
  );
};

export default AccountAdd;
