import { Component, createSignal, For } from "solid-js";

import styles from "./chat-body.module.scss";

const Dmessages = [
  {
    from: "amy",
    content: "Hello",
    timeStamp: "12:01 AM",
  },
  {
    from: "amy",
    content: "Hpw r u ?",
    timeStamp: "12:01 AM",
  },
  {
    from: "jack",
    content: "Hey, Whatsup",
    timeStamp: "12:04 AM",
  },
  {
    from: "amy",
    content: "r we going to to the movies",
    timeStamp: "12:20 AM",
  },
  {
    from: "jack",
    content: "sure",
    timeStamp: "12:55 AM",
  },
  {
    from: "amy",
    content: "Pick me up at 11",
    timeStamp: "01:10 AM",
  },
];

export const ChatBody: Component = () => {
  const [messages, setMessages] = createSignal<MessageProps[]>(Dmessages);
  return (
    <div class={styles.main}>
      <For each={Dmessages}>
        {(message) => {
          return (
            <Message
              from={message.from}
              content={message.content}
              timeStamp={message.timeStamp}
            />
          );
        }}
      </For>
    </div>
  );
};

interface MessageProps {
  from: string;
  content: string;
  timeStamp: string;
}

const Message: Component<MessageProps> = ({ from, content }) => {
  return (
    <div
      class={styles.message}
      style={{
        "margin-left": from === "jack" ? "auto" : 0,
        "background-color": from === "jack" ? "black" : "green",
      }}
    >
      <p>{content}</p>
    </div>
  );
};
