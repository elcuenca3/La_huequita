import React from "react";
import Header from "../components/Header/header1";
import Footer from "../components/Footer/footer";
import styles from "../styles/repe.module.css";
import Image from "next/image";
import Link from "next/link";

const Repe = () => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Repe</h1>
        <div className={styles.slides}></div>
        <div className={styles.texto}>
            <p>El repe, la sopa más popular de Loja obtiene su nombre de un vocablo popular. 
                Según Santiago Erráez, cantautor oriundo de Loja, “así le decían al verde las 
                abuelitas”. Con una base de verde, leche, quesillo lojano y culantro el repe 
                ha caracterizado la gastronomía de la provincia.</p>
        </div>
        <div className={styles.cardrepe}>
          <h3>Ingredientes</h3>
          <p>-5 guineos verdes picados finamente y lavado</p>
          <p>-1 ramita de cebolla blanca</p>
          <p>-2 dientes de ajo, machacados</p>
          <p>-Quesillo desmenuzado</p>
          <p>-½ taza de leche</p>
          <p>-1 manojo de cilantro</p>
          <p>-8 tazas de agua</p>
          <p>-Aceite</p>
          <p>-Sal al gusto</p>
          <a href="#">Calorias: 320kcal</a>
        </div>
        <div className={styles.cardrepe1}>
          <h3>Donde Encontrarlo</h3>
          <a href="#">Mama Lola</a>
          <a href="#">El Repe Restaurante Cafetería</a>
          <a href="#">Cecinas de la Y</a>
          <a href="#">Mercado Gran Colombia</a>
          </div>

        
      <Footer />
    </div>
  );
};

export default Repe;
