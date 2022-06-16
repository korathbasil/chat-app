import styles from "./profile-intro.module.scss";

export const ProfileIntro = () => {
  return (
    <section class={styles.main}>
      <div class={styles.images}>
        <div class={styles.cover}>
          <img
            src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
            alt=""
          />
        </div>
        <div class={styles.profileImage}>
          <img
            src="https://e0.365dm.com/22/04/768x432/skysports-cristiano-ronaldo_5743998.jpg?20220419115805"
            alt=""
          />
        </div>
      </div>
      <div class={styles.info}>
        <img src="" alt="" />
        <h2>Cristiano Ronaldo</h2>
        <p>Hello , I new here</p>
      </div>
    </section>
  );
};
