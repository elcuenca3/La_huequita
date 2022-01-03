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
                ha caracterizado la gastronomía de la provincia. El truquito de la receta está 
                en el quesillo, para que esté en su punto debe derretirse un poco en la cocción</p>
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
            <p>Mama Lola
              <a href="#">   Visitar</a>
            </p>
            <p>El Repe Restaurante Cafetería
              <a href="#">   Visitar</a>
            </p>
            <p>Cecinas de la Y
              <a href="#">   Visitar</a>
              </p>
            <p>Mercado Gran Colombia
              <a href="#">   Visitar</a>
          </p>
          </div>
          

        
      <Footer />
    </div>
  );
};

export default Repe;
