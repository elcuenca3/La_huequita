import { NextPage } from "next";
import Header from "../components/Header/header1";
import React from "react";
import styles from "../styles/huecas.module.css";
import Footer from "../components/Footer/footer";
import Link from "next/link";

const huecas: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>Huecas</h1>
      <p className={styles.texts}>
        En esta seccion encontraras las huecas y restaurantes más conocidos y
        que mas venden productos de la provincia de Loja
      </p>
      <div className={styles.huecas}>
        <div className={styles.card}>
          <img
            src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/huecas/mamalola.jpg"
            alt=""
          />
          <h3>Mama Lola</h3>
          <p>
            Su nombre es en honor a Lolita Silva, la promotora de nuestros
            sueños, a entregado su vida entera a la cocina y llevamos la
            herencia de su sabor y pasión por lo que hacemos.
          </p>
          <Link href="/mamalola">
            <a href="#">Visitar</a>
          </Link> 
        </div>

        <div className={styles.card}>
          <img
            src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/huecas/carbonerorestaurant.jpg"
            alt=""
          />
          <h3>Carbonero</h3>
          <p>
            Carbonero Mirador Express te traemos las mejores promociones para
            compartir con los que quieres y disfrutar las fiestas,disfruta de
            las mejores carnes y de los mejores platos
          </p>
          <a href="#">Visitar</a>
        </div>

        <div className={styles.card}>
          <img
            src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/huecas/salonlolita.jpg"
            alt=""
          />
          <h3>Salon Lolita</h3>
          <p>
            Nacida en los años cuarenta, esta tradición ha pasado por
            generaciones y tiene un sabor único que ha hecho de este lugar wauno
            de los restaurantes culinarios típicos más importantes del Ecuador.
          </p>
          <a href="#">Visitar</a>
        </div>

        <div className={styles.card}>
          <img
            src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/huecas/cecinasY.jpg"
            alt=""
          />
          <h3>Cecinas de la Y</h3>
          <p>
            Suma ya dos décadas y la sazón para la preparación de la cecina no
            ha variado y es la identidad del restaurante ‘Las Cecinas de la Y’,
            que desde 1996 satisface el paladar de sus comensales propios y
            forasteros.
          </p>
          <a href="#">Visitar</a>
        </div>

        <div className={styles.card}>
          <img
            src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/huecas/emporio.jpg"
            alt=""
          />
          <h3>Emporio Lojano</h3>
          <p>
            Delicioso, seguro y especial, el mejor sabor en un ambiente único y
            especial. En 2018 ampliamos nuestra carta y ahora también puedes
            disfrutar los sabores tradicionales de Loja.
          </p>
          <a href="#">Visitar</a>
        </div>

        <div className={styles.card}>
          <img
            src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/huecas/casalojana.jpg"
            alt=""
          />
          <h3>La Casa Lojana</h3>
          <p>
            Nuestro restaurante del Sonesta Loja, ubicado en el piso cuarto, es
            de diseño Industrial, con una gastronomía Internacional y Nacional
            liderada por nuestro Chef William Geovanny Farias Osori
          </p>
          <a href="#">Visitar</a>
        </div>

        <div className={styles.card}>
          <img
            src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/huecas/repe%20restaurant.jpg"
            alt=""
          />
          <h3>El Repe Restaurant Cafetería</h3>
          <p>
            Restaurante ubicado al frente de la plaza Bolívar, con muy
            deliciosos platos a base de verde y acompañados de un tradicional y
            exquisito café Lojano. Muy recomendable para ir solo o con familia.
            Precios accesibles.
          </p>
          <a href="#">Visitar</a>
        </div>

        <div className={styles.card}>
          <img
            src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/huecas/tahuqi.jpg"
            alt=""
          />
          <h3>Tahuqui</h3>
          <p>
            Lugar wauno de los restaurantes culinarios típicos más importantes
            del Ecuador, servimos Micheladas, Hamburguesas de colores, Hervidos,
            Alitas. Muy recomendable para ir solo o con familia
          </p>
          <a href="#">Visitar</a>
        </div>

        <div className={styles.card}>
          <img
            src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/huecas/tamallojano.jpg"
            alt=""
          />
          <h3>El Tamal Lojano</h3>
          <p>
            Poma Medina decide emprender en un negocio de cafeteria con el
            anhelo de mejorar su situación económica. Siendo los productos
            tradicionales los más apreciados por la ciudadania.
          </p>
          <a href="#">Visitar</a>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "63em" }}
      >
        <section className={styles.mashuecas}>
          <a href="#">Más Huecas</a>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default huecas;
