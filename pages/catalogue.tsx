import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import styles from "../styles/catalogue.module.css";
import Image from "next/image";
import Link from "next/link";

const Catalogue = () => {
  return (
    <div >
      <Header />
      <h1 className={styles.title}>Catalogo</h1>
      <p className={styles.text}>
        En esta seccion encontraras los platos tipicos mas conocidos y más
        vendidos de la provincia de Loja, deleitate con nuestra gatronomia que
        esta dividida por Categorías.
      </p>

      <div className={styles.image_container}>
      <Image
            src="/images/sopa.png"
            alt="Sopa"
            width="280"
            height="140"
            className={styles.ingL}
          />
            
          </div>
          <Image
            src="/images/p_tipico.png"
            alt="ptipico"
            width="280"
            height="140"
            className={styles.ingC}
          />
        
      
      <Footer />
    </div>
  );
};

export default Catalogue;
