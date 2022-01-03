import React from "react";
import Header from "../components/Header/header1";
import Footer from "../components/Footer/footer";
import styles from "../styles/catalogue.module.css";
import Image from "next/image";
import Link from "next/link";

const seccionSopas = () => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Sopas</h1>
      <p className={styles.text}>
        En esta seccion encontraras las Sopas más conocidos y más
        vendidos de la provincia de Loja, deleitate con nuestra gatronomia que
        esta dividida por Secciones.
      </p>

      <div className={styles.catalogo}>
        <Link href="/repe">
      <div className={styles.card}>
        <Image
          src="/images/repe.jpg"
          alt="Sopa"
          width="280"
          height="140"
          className={styles.image_container}
        />
        <p className="ncatalogo">Repe</p>
        </div>
        </Link>
        <div className={styles.card}>
        <Image
          src="/images/arveja.jpg"
          alt="ptipico"
          width="280"
          height="130"
          className={styles.image_container}
        />
           <p className="ncatalogo">Arveja con Guineo</p>
      

        </div>
        <div className={styles.card}>
        <Image
          src="/images/sancocho.jpg"
          alt="ptipico"
          width="280"
          height="140"
          className={styles.image_container}
        />
        <p className="ncatalogo">Sancocho</p>
      </div>
      <div className={styles.card}>
        <Image
          src="/images/bola.jpg"
          alt="ptipico"
          width="280"
          height="140"
          className={styles.image_container}
        />
        <p className="ncatalogo">Caldo de Bola</p>
      </div>
      
      <div className={styles.card}>
        <Image
          src="/images/caldogallinas.jpg"
          alt="ptipico"
          width="280"
          height="140"
          className={styles.image_container}
        />
         <p className="ncatalogo">Caldo de Gallina</p>
      </div>
      <div className={styles.card}>
        <Image
          src="/images/hueso.jpg"
          alt="ptipico"
          width="280"
          height="140"
          className={styles.image_container}
        />
         <p className="ncatalogo">Caldo de Hueso</p>
      </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "6%" }}
      >
        <section className={styles.mascatalogo}>
          <a href="#">Más Sopas</a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default seccionSopas;
