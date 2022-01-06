import type { NextPage } from "next";
import Header from "../components/Header/header1";
import Image from "next/image";
import styles from "../styles/home.module.css";
import Link from "next/link";
import Footer from "../components/Footer/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div style={{ justifyContent: "center" }}>
        <h1 className={styles.title}>Te damos la bienvenida a</h1>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Image
            src="/images/logo1.png"
            alt="Picture of the author"
            width={473.5}
            height={297}
            className={styles.logo}
          />
        </div>
      </div>
      <div
        style={{ display: "contents", position: "relative", padding: "auto" }}
      >
        <div className={styles.iz}>
          <Image
            src="/images/resta.png"
            alt="Picture of the author"
            width={400}
            height={190}
            className={styles.ima}
          />

          <p className={styles.texts}>
            Con los mejores restaurant y huecas de todo Loja
          </p>
          <Link href="/huecas">
          <a className={styles.redirect_button}>Huecas y Restaurates</a>
        </Link>
        </div>

        <div className={styles.de}>
          <Image
            src="/images/platos.jpeg"
            alt="Picture of the author"
            width={400}
            height={190}
            className={styles.ima}
          />

          <p className={styles.texts}>
            Junto al mejor catalogo de platos de toda la ciudad
          </p>
          <Link href="/catalogue">
          <a className={styles.redirect_button}>Catalogo de Platos</a>
        </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
