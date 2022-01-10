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
      <div style={{ justifyContent: "center"}}>
        <h1 className={styles.title}>Te damos la bienvenida a</h1>
        <div style={{ justifyContent: "center", display: "flex"}}>
          <Image
            src="/images/logo1.png"
            alt="Picture of the author"
            width={473.5}
            height={297}
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.iz}>
          <Image
            src="/images/resta.png"
            alt="Picture of the author"
            width={400}
            height={190}
            className={styles.ima}
          />

          <p className={styles.texts1}>
            Con los mejores restaurantes y huecas de todo Loja
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

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "27em" }}
      >
      </div>
      <h3 className={styles.title1}>¿No te decides Aún...? Aqui tenemos unas recomendaciones</h3>
      <div className={styles.catalogo}>
        <Link href="#">
      <div className={styles.card}>
        <Image
          src="/images/sopa.png"
          alt="Sopa"
          width="330"
          height="180"
          className={styles.image_container}
        />
        <p className="ncatalogo">Sopas</p>
        </div>
        </Link>
        <div className={styles.card}>
        <Image
          src="/images/p_tipico.png"
          alt="ptipico"
          width="330"
          height="180"
          className={styles.image_container}
        />
           <p className="ncatalogo">Platos Tipicos</p>
      

        </div>
        <div className={styles.card}>
        <Image
          src="/images/postre.png"
          alt="ptipico"
          width="330"
          height="180"
          className={styles.image_container}
        />
        <p className="ncatalogo">Postres</p>
      </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Home;
