import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loja}>
      <Image
            src="/images/logo1.png"
            alt="logo"
            width="200"
            height="75"
            className={styles.loja}
          />
          </div>
      <ul className={styles.menu}>
        
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/catalogue">
            <a>Catalogo</a>
          </Link>
        </li>
        <li>
          <Link href="/huecas">
            <a>Huecas</a>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <a>Contactos</a>
          </Link>
        </li>
        <li>
          <Link href="/languaje">
            <a>Idioma</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
