import React from "react";
import { verifyJwtToken } from "@/libs/auth";
import Cookies from "universal-cookie";

const fromServer = async () => {
  /* eslint-disable @typescript-eslint/no-require-imports */
  const cookies = require("next/headers").cookies;
  /* eslint-enable @typescript-eslint/no-require-imports */

  const cookieList = cookies();
  const { value: token } = cookieList.get("token") ?? { value: null };
  const verifiedToken = await verifyJwtToken(token);

  return verifiedToken;
};

export function useAuth() {
  // Have also loading state to not show flickering to user
  const [auth, setAuth] = React.useState(null);

  const getVerifiedtoken = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token") ?? null;
    const verifiedToken = await verifyJwtToken(token);
    setAuth(verifiedToken);
  };

  React.useEffect(() => {
    getVerifiedtoken();
  }, []);

  return auth;
}

useAuth.fromServer = fromServer;
