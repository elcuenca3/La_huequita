import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Image
        src="/images/fblogo.png"
        layout="fixed"
        width="300"
        height="100"
        alt=""
      />
      <div style={{ textAlign: "center" }}>Copyrigth 2021</div>
    </footer>
  );
};

export default Footer;
