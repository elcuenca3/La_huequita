import React from "react";
import Header from "../components/Header/header1";
import Footer from "../components/Footer/footer";
import styles from "../styles/catalogue.module.css";
import Image from "next/image";
import Link from "next/link";

const Catalogue = () => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Catalogo</h1>
      <p className={styles.text}>
        En esta seccion encontraras los platos tipicos mas conocidos y más
        vendidos de la provincia de Loja, deleitate con nuestra gatronomia que
        esta dividida por Categorías.
      </p>

      <div className={styles.catalogo}>
        <Link href="#">
      <div className={styles.card}>
        <Image
          src="/images/sopa.png"
          alt="Sopa"
          width="280"
          height="140"
          className={styles.image_container}
        />
        <p className="ncatalogo">Sopas</p>
        </div>
        </Link>
        <div className={styles.card}>
        <Image
          src="/images/p_tipico.png"
          alt="ptipico"
          width="280"
          height="130"
          className={styles.image_container}
        />
           <p className="ncatalogo">Platos Tipicos</p>
      

        </div>
        <div className={styles.card}>
        <Image
          src="/images/postre.png"
          alt="ptipico"
          width="280"
          height="140"
          className={styles.image_container}
        />
        <p className="ncatalogo">Postres</p>
      </div>
      <div className={styles.card}>
        <Image
          src="/images/vegetales.png"
          alt="ptipico"
          width="280"
          height="140"
          className={styles.image_container}
        />
        <p className="ncatalogo">Vegetariano</p>
      </div>
      
      <div className={styles.card}>
        <Image
          src="/images/carnes.png"
          alt="ptipico"
          width="280"
          height="140"
          className={styles.image_container}
        />
         <p className="ncatalogo">Carnes</p>
      </div>
      <div className={styles.card}>
        <Image
          src="/images/pescado.png"
          alt="ptipico"
          width="280"
          height="140"
          className={styles.image_container}
        />
         <p className="ncatalogo">Pescados</p>
      </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50%" }}
      >
        <section className={styles.mascatalogo}>
          <a href="#">Mas Catalgo</a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Catalogue;
