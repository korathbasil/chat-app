import { createSignal } from "solid-js";
import { User } from "../../types";

const demoUser = {
  id: "12121212",
  name: "Rashid Shalu",
  username: "__ras.hi",
  email: "rashid@email.com",
  phone: "9875677287",
  profilePicture:
    "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000",
} as User;

export const [user, setUser] = createSignal<User | null>(demoUser);
