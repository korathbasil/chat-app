import { createSignal } from "solid-js";
import { User } from "../../types";

const demoUser = {
  id: "12121212",
  fullName: "Rashid Shalu",
  userName: "__ras.hi",
  email: "rashid@email.com",
  phone: "9875677287",
  profilePicture:
    "https://instagram.fccj6-1.fna.fbcdn.net/v/t51.2885-19/279236228_950663942288750_5464712819569725365_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fccj6-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=KGq9o_dO5XYAX_qDwwT&tn=jxocQN36o0sb829c&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT_eb54GKN0-l25X4Sg2c6FwupzE7dm3mRsNgU17taD4MQ&oe=62A7F84A&_nc_sid=9a90d6",
} as User;

export const [user, setUser] = createSignal<User | null>(demoUser);
