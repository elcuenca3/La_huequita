import type { NextPage } from "next";
import Header from "../components/Header/headerinicio";
import { CardCata } from "../components/Card/card";
import Image from "next/image";
import styles from "../styles/home.module.css";
import Link from "next/link";
import Footer from "../components/Footer/footer";

const Home: NextPage = ({ cata }) => {
  return (
    <div >
      <Header />
      <h1 className={styles.title}>Te damos la bienvenida a</h1>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          paddingBottom: "50px",
          paddingTop: "25px",
        }}
      >
        <Image
          src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/sin-cadena.png"
          alt="Picture of the author"
          width={608}
          height={173}
          className={styles.logo}
        />
      </div>
      <h2 className={styles.descrip}>
        La página perfecta que te ayudara a encontrar el lugar perfecto y el
        plato donde comer con todo el sabor y tradición que Loja puede
        ofrecerte.
      </h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src="/images/resta.png"
            alt="Picture of the author"
            width={500}
            height={257}
            className={styles.ima}
          />

          <p className={styles.des}>
            En este apartado encontraras la huquita que tanto buscabas
          </p>
          <Link href="/huecas">
            <a className={styles.redirect_button}>Huecas y Restaurantes</a>
          </Link>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/platos.jpeg"
            alt="Picture of the author"
            width={500}
            height={257}
            className={styles.ima}
          />

          <p className={styles.des}>
            El sabor de la verdadera gastronomia lojana para volver uno y otra
            ves
          </p>
          <Link href="/catalogo">
            <a className={styles.redirect_button}>Catalogo de Platos</a>
          </Link>
        </div>


      </div>
      <div className={styles.descrip}>
      <h2>no te decidiste aun.... aqui tenemos unas recomendaciones </h2>
      </div>
      <div style={{display:"flex",padding:"20px" }}>
      {cata.map(cata=>
        (
            <CardCata key={cata._id} id={cata._id} imagen={cata.imagen} nombre={cata.nombre} />
        ))}
        
        </div>

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/home");
  const cata= await res.json();
  return {
    props: {
      cata,
    },
  };
}

export default Home;
