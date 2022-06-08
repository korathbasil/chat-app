import { createEffect } from "solid-js";
import { useLocation } from "solid-app-router";

import { axios } from "../../config/axios";

export const GoogleLoginRedirect = () => {
  const location = useLocation();
  createEffect(() => {
    if (location.query.code) {
      googleLoginHandler(location.query.code);
    }
  }, [location]);

  const googleLoginHandler = async (code: string) => {
    const result = await axios.post("/auth/google/callback", {
      code,
    });

    console.log(result.data);
  };
  return <main></main>;
};
