import { createEffect } from "solid-js";
import { useNavigate, useLocation } from "solid-app-router";

import { axios } from "../../config/axios";
import { setUser } from "../../data-store/user";

export const GoogleLoginRedirect = () => {
  const location = useLocation();
  const navidate = useNavigate();
  createEffect(() => {
    if (location.query.code) {
      googleLoginHandler(location.query.code);
    }
  }, [location]);

  const googleLoginHandler = async (code: string) => {
    const result = await axios.post("/auth/google/callback", {
      code,
    });

    if (result.data.verified_email) {
      setUser(() => ({
        id: "12121212",
        fullName: result.data.name,
        userName: "__ras.hi",
        email: "rashid@email.com",
        phone: "9875677287",
        profilePicture: result.data.picture,
      }));
      navidate("/");
    }
  };
  return <main></main>;
};
