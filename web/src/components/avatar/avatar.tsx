import { Profile } from "../../assets/icons";
import type { Component } from "solid-js";

interface AvatarProps {
  image?: string;
  size?: string;
}

export const Avatar: Component<AvatarProps> = ({ image, size = "30px" }) => {
  return (
    <>
      {image ? (
        <img
          src={image}
          style={{
            width: size,
            height: size,
            objectFit: "cover",
            "border-radius": 999,
          }}
          alt="profile_picture"
        />
      ) : (
        <Profile size={size} />
      )}
    </>
  );
};
