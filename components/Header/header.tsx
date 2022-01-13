import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href="/">     
       <div className={styles.logo}>
      
      <Image
            src="/images/logo1.png"
            layout='fixed'
            alt="logo"
            width="200"
            height="120"
            className={styles.logoa}
          />
          </div>
          </Link>

      <ul className={styles.menu}>
          {/*Asi se hace
          
          */}
          <Link href="/">
        <li>
            <a>Inicio</a>
        </li>
          </Link>
          <Link href="/catalogo">
        <li>
            <a>Catalogo</a>
        </li>
        </Link>
        <Link href="/huecas">
        <li>
          
            <a>Huecas</a>
          
        </li>
        </Link>
        <Link href="/contacto">
        <li>
          
            <a>Contactos</a>
          
        </li>
        </Link>
        <Link href="/languaje">
        <li>
          
            <a>Formularios</a>
          
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;