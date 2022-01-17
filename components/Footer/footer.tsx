import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Image
        src="/images/fblogo.png"
        layout="fixed"
        width="260"
        height="100"
        alt=""
      />
      <div style={{ textAlign: "center" }}>Copyright © 2022 La Huequita. Todos los Derechos Reservados</div>
    </footer>
  );
};

export default Footer;
