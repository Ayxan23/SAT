import { jwtVerify } from "jose";

//1
export const getJwtSecretKey = () => {
  const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

  if (!secretKey) {
    throw new Error("JWT secret key is not available");
  }

  return new TextEncoder().encode(secretKey);
};

export async function verifyJwtToken(token) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}

//2
const AUTH_PAGES = ["/auth/login", "/auth/signup", "/auth/reset"];

export const isAuthPages = (url) =>
  AUTH_PAGES.some((page) => url.startsWith(page));

//3
export const isAdminPage = (url) => url.startsWith("/admin");
