  import Link from "next/link";
import React from "react";
import styles from "./headerinicio.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href="/">     
       <div className={styles.logo}>
      
      <Image
            src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/verdadero.png"
            layout='fixed'
            alt="logo"
            width="400"
            height="60"
            className={styles.logoa1}
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
        <Link href="/platos">
        <li>
          
            <a>Platos</a>
          
        </li>
        
        </Link>
        <Link href="/contacto">
        <li>
          
            <a>Contactos</a>
          
        </li>
        </Link>
        <Link href="/login">
        <li>
          
            <a>Login</a>
          
        </li>
        </Link>
        
      </ul>
      <div className={styles.header1}>
                <img
                src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/header.jpg"
                alt=""
                width={"1536px"}
                height={"150px"}
                />
            </div>
    </div>
  );
};

export default Header;