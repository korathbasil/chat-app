import { createSignal } from "solid-js";
import { NavLink, useNavigate } from "solid-app-router";

import { postsService } from "../../config/axios";

import styles from "./new-post.module.scss";
import { AddPhoto, AddVideo, BackNav } from "../../assets/icons";
import { CustomHeader } from "../../components";

export const NewPostPage = () => {
  const navigate = useNavigate();
  const [postText, setPostText] = createSignal("");
  const [image, setImage] = createSignal<File | null>(null);

  type FormEvent = Event & {
    currentTarget: HTMLInputElement;
    target: Element;
  };

  const FormSubmitHandler = (e: Event) => {
    e.preventDefault();

    const requestConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    postsService
      .post(
        "/",
        {
          text: postText(),
          images: image(),
        },
        requestConfig
      )
      .then(() => {
        navigate("../");
      })
      .catch((e) => console.log(e));
  };

  const imagePickerHandler = (e: FormEvent) => {
    let selectedImage: File | null;
    if (!e.currentTarget.files) {
      return;
    }
    selectedImage = e.currentTarget.files[0];

    if (!selectedImage) return;

    setImage(() => selectedImage);
  };
  return (
    <main>
      <CustomHeader left={HeaderLeft} />
      <section class={styles.newPost}>
        <h2>Create post</h2>
        <form onSubmit={FormSubmitHandler}>
          <textarea
            name=""
            id=""
            rows="5"
            maxLength={170}
            placeholder="Write something"
            onChange={(e) => setPostText(e.currentTarget.value)}
          />
          {image() && (
            <div class={styles.media}>
              <img src={URL.createObjectURL(image()!)} />
            </div>
          )}

          <div class={styles.actions}>
            <div
              class={styles.addImage}
              onClick={() => document.getElementById("imagePicker")?.click()}
            >
              <AddPhoto size="20px" /> <p>Add Photo</p>
            </div>
            <div class={styles.addVideo}>
              <AddVideo size="20px" /> <p>Add Video</p>
            </div>
          </div>

          <input
            type="file"
            name=""
            id="imagePicker"
            hidden
            onChange={(e) => imagePickerHandler(e)}
          />

          <input type="submit" value="POST" />
        </form>
      </section>
    </main>
  );
};

const HeaderLeft = () => {
  return (
    <NavLink href="../">
      <BackNav />
    </NavLink>
  );
};
