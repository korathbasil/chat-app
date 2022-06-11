import { axios } from "../../config/axios";
import GoogleLogin from "react-google-login";

import styles from "./login.module.scss";
import { Google } from "../../assets/icons";
import { createEffect, createSignal } from "solid-js";

export const LoginPage = () => {
  // const [newWindow, setNewWindow] = createSignal<Window | null>(null);

  // createEffect(() => {
  //   if (newWindow() && newWindow()?.location) {
  //     const redirectUrl = newWindow()?.location.origin;

  //     if (redirectUrl === "http://localhost:3000") {
  //       const code = getAuthCodeFromSearchQuery(newWindow()?.location.search);

  //       if (code) {
  //         newWindow()?.close();
  //         setNewWindow(null);
  //         console.log(code);
  //       }
  //     }
  //   }
  // }, [newWindow()?.location]);

  const googleLoginHandler = async (code: string) => {
    const result = await axios.post("/auth/google/login", {
      code,
    });

    console.log(result.data);
  };

  const OpenNewAuthWindow = async () => {
    const URL =
      "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=661128700192-uvsqa7kc0al16ptdk8s9fn3mshiu4g76.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=chat-app-auth-state&flowName=GeneralOAuthFlow";
    const newWindow = window.open(URL, "Google OAuth2", "width=600,height=800");
    let previousUrl = "";
    const observer = new MutationObserver(() => {
      if (window.location.href !== previousUrl) {
        console.log(
          `URL changed from ${previousUrl} to ${window.location.href}`
        );
        previousUrl = window.location.href;
        console.log("Changes");
        if (newWindow && newWindow?.location) {
          const redirectUrl = newWindow?.location.origin;

          if (redirectUrl === "http://localhost:3000") {
            const code = getAuthCodeFromSearchQuery(newWindow?.location.search);

            if (code) {
              newWindow?.close();
              console.log(code);
            }
          }
        }
      }
    });
    const config = { subtree: true, childList: true };

    // start observing change
    if (newWindow) {
      observer.observe(newWindow.document, config);
    }
  };

  const getAuthCodeFromSearchQuery = (
    query: string | undefined
  ): string | void => {
    if (!query) return;
    const leftRemovedQuery = query.split("code=")[1];
    const code = leftRemovedQuery.split("&")[0];

    return code;
  };

  return (
    <main class={styles.main}>
      <div class={styles.child}>
        <h1>Ngage</h1>

        <h2>
          <span>Engage</span>
          <span>with your</span>
          <span>loved ones</span>
        </h2>

        <div class={styles.actions}>
          <a href="http://localhost:8000/api/v1/auth/google/login">
            <Google />
            <h2>Login with Google</h2>
          </a>
        </div>

        {/* <div onClick={OpenNewAuthWindow}>g</div> */}
      </div>
    </main>
  );
};
