import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Shubh Saini</h1>
        <p className={styles.description}>
          I'm a Mern-stack developer with 1 years of experience using React and
          NodeJS with expertise in Marketing And Sales . Reach out if you'd like to learn more!
        </p>
        <a href="mailto:shubhsaini12023@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};