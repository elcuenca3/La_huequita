import type { NextPage } from "next";
import Header from "../components/Header/header";
import Image from "next/image";
import styles from "../styles/home.module.css";
import Link from "next/link";
import Footer from "../components/Footer/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Te damos la bienvenida a</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/sin-cadena.png"
          alt=""
          width="580"
          height="225"
          className={styles.image_logo}
        />
      </div>
      <div className={styles.platos}>
        <Link href="/catalogue">
          <a className={styles.redirect_button}>Catalogo de Platos</a>
        </Link>
        <div className={styles.image_container} >

          <Link href="/catalogue">
          <Image
          
            src="/images/platos.jpeg"
            alt="platos imagen"
            width="300"
            height="150"
            className={styles.image_menu}
            
          />
          </Link>
        </div>
      </div>
      <div className={styles.huecas}>
        <div className={styles.image_container}>
          <Link href="huecas">
          <Image
            src="/images/resta.png"
            alt="platos imagen"
            width="300"
            height="150"
            layout="responsive"
            className={styles.image_menu}
          />
          </Link>
        </div>
        <Link href="/huecas">
          <a className={styles.redirect_button}>Huecas y Restaurates</a>
        </Link>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2em" }}
      >
        <Link href="/login">
          <a className={styles.redirect_button_nos}>Login</a>
        </Link>

        <Link href="/signup">
          <a className={styles.redirect_button_nos}>SignUp</a>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
