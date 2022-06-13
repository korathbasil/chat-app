import type { Component } from "solid-js";
import { For } from "solid-js";

import styles from "./posts.module.scss";
import { Comments, HeartOutlined } from "../../assets/icons";

export const Posts = () => {
  const posts = [
    {
      id: "123456",
      owner: {
        id: "23456",
        name: "Jessey Storms",
        profilePicture:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      text: "Wow",
      media: [
        {
          type: "IMG" as "IMG",
          content:
            "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
        },
      ],
      caption: "Hello",
      createdAt: "19:36 AM",
    },
    {
      id: "123456",
      owner: {
        id: "23456",
        name: "Jessey Storms",
        profilePicture:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      text: "",
      media: [
        {
          type: "IMG" as "IMG",
          content:
            "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
        },
      ],
      caption: "Hello",
      createdAt: "19:36 AM",
    },
  ];
  return (
    <section class={styles.posts}>
      <p>FEED</p>
      <div>
        <For each={posts}>
          {(post) => {
            return <Post post={post} />;
          }}
        </For>
      </div>
      {/* <div class={styles.spacer200}></div> */}
    </section>
  );
};

interface PostProps {
  post: {
    id: string;
    owner: {
      id: string;
      name: string;
      profilePicture: string;
    };
    text: string;
    media: {
      type: "IMG" | "VDO";
      content: string;
    }[];
    caption: string;
    createdAt: string;
  };
}

const Post: Component<PostProps> = ({ post }) => {
  return (
    <div class={styles.post}>
      <div class={styles.top}>
        <div class={styles.left}>
          <img src={post.owner.profilePicture} alt="" />
          <div>
            <h5>JJ Abrams</h5>
            <p>jj_abrams</p>
          </div>
        </div>
        <div class={styles.right}></div>
      </div>
      <div class={styles.content}>
        {post.text ? <PostText text={post.text} /> : null}
        {post.media.length > 0 ? <PostMedia media={post.media} /> : null}
      </div>
      <div class={styles.bottom}>
        {post.caption && <p>{post.caption}</p>}
        <div class={styles.actions}>
          <div class={styles.like}>
            <HeartOutlined size="15px" />
            <p>218</p>
          </div>
          <div class={styles.comment}>
            <Comments size="15px" />
            <p>14</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PostTextProps {
  text: string;
}

const PostText: Component<PostTextProps> = ({ text }) => {
  return (
    <div class={styles.textPost}>
      <p>{text}</p>
    </div>
  );
};

interface PostMediaProps {
  media: {
    type: "IMG" | "VDO";
    content: string;
  }[];
}

const PostMedia: Component<PostMediaProps> = ({ media }) => {
  return (
    <div class={styles.media}>
      <For each={media}>
        {(item) => {
          return <img src={item.content} />;
        }}
      </For>
    </div>
  );
};
