import { NavLink } from "solid-app-router";

import { BackNav } from "../../assets/icons";
import { CustomHeader } from "../../components";

export const NewPostPage = () => {
  return (
    <main>
      <CustomHeader left={HeaderLeft} />
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
