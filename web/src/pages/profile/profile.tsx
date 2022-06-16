import { NavLink } from "solid-app-router";

import styles from "./profile.module.scss";
import { CustomHeader, ProfileIntro } from "../../components";
import { Settings } from "../../assets/icons";

export const ProfilePage = () => {
  return (
    <main>
      <CustomHeader right={HeaderRight} />
      <ProfileIntro />
    </main>
  );
};

const HeaderRight = () => {
  return (
    <div>
      <NavLink href="/settings">
        <Settings />
      </NavLink>
    </div>
  );
};
