import { useNavigate } from "solid-app-router";

import { BackNav } from "../../assets/icons";

export const SearchHeader = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div onClick={() => navigate("../", { replace: true })}>
        <BackNav />
      </div>
    </header>
  );
};
