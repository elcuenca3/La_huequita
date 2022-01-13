import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import styles from "../../styles/catalogo.module.css";
import { Card, CardCata } from "../../components/Card/card";
import stylesc from "../../styles/platos.module.css";
import Image from "next/image";
import Link from "next/link";

const Catalogue = ({cata}) => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Catalogo</h1>
      <p className={styles.text}>
        En esta seccion encontraras los platos tipicos mas conocidos y más
        vendidos de la provincia de Loja, deleitate con nuestra gatronomia que
        esta dividida por Categorías.
      </p>
      <div className={styles  .container}>
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
  const res= await fetch('http://localhost:3000/api/catalogo')
  const cata=await res.json()
  return{
    props:{
      cata,

    }
  }
  
};

export default Catalogue;
