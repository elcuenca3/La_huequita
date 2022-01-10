import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import styles from "../styles/mamalola.module.css";
import Image from "next/image";
import Link from "next/link";

const mamalola = () => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Bienvenido a</h1>

      <div className={styles.catalogo}>
        <div className={styles.card}>
            <div className={styles.image}>
                <img
                src="/images/mama.png"
                alt=""
                width="430px"
                height="300px"
                />
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.image1}>
                <img
                src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/huecas/mamalola.jpg"
                alt=""
                width="680px"
                height="450px"
                />
            </div>
            <p className={styles.texts}/> 
         </div>
      </div>
      <h1 className={styles.title1}>~Menú~</h1>
      <p className={styles.texts1}>
      Mama Lola Restaurante, lleva 7 años en el mercado pero su tradición 
      culinaria viene desde hace ya 100 años atrás.Su nombre es en honor a 
      Lolita Silva, la promotora de nuestros sueños, a entregado su vida 
      entera a la cocina y llevamos la herencia de su sabor y pasión por lo que hacemos.
      </p>
      <div className={styles.catalogo1}>
      <div className={styles.card1}>
          <img
            src="/images/platomama.jpg"
            alt=""
          />
          <h3>Platos</h3> 
        </div>

        <div className={styles.card1}>
          <img
            src="/images/ensalmama.jpg"
            alt=""
          />
          <h3>Ensalada</h3>
        </div>

        <div className={styles.card1}>
          <img
            src="/images/sopamama.jpg"
            alt=""
          />
          <h3>Sopas</h3>
        </div>

        <div className={styles.card1}>
          <img
            src="/images/pormama.jpg"
            alt=""
          />
          <h3>Porciones</h3>
        </div>

        <div className={styles.card1}>
          <img
            src="/images/bebidamama.jpg"
            alt=""
          />
          <h3>Bebidas</h3>
        </div>

        <div className={styles.card1}>
          <img
            src="/images/postmama.jpg"
            alt=""
          />
          <h3>Postres</h3>
        </div>
    </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "13%" }}>
        <section className={styles.ubicacion}>
          <a href="https://www.google.com/maps/dir/-3.9677321,-79.2112762/mama+lola+ubicacion/@-3.9726833,
          -79.210576,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x91cb480ab15a9075:0x67f5e9cff1e275ba!2m2
          !1d-79.2010101!2d-3.9779515">Ven y Conoce</a>
          <p className={styles.texts2}/> 
        </section>
      </div>
    <br></br>
    <br></br>
    <br></br>
      <Footer />
    </div>
  );
};

export default mamalola;
