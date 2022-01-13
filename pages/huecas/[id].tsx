import { NextPage } from "next";
import Header from "../../components/Header/header";
import React from "react";
import styles from "../../styles/huecas.module.css";
import Footer from "../../components/Footer/footer";
import Image from "next/image"
import Link from "next/link";

const HuecasPage = ({hueca}) => {

    return (<div>  
      <Header />
        <h1 className={styles.titulo}>Bienvenido a</h1>
        <div className={styles.imagenes}>
          <div className={styles.image}>
            <img
            src={hueca.logo}
            alt={hueca.nombre}
            width="575"
             height="575"
             
             />
          </div>

          <div className={styles.image1}>
            <img
            src={hueca.imagen}
            alt={hueca.nombre}
            width="700"
            height="420"
             />
          </div>
          <p className={styles.texts}/> 
        <p className={styles.histo}>{hueca.historia}</p> 
        </div>
        <h3 className={styles.titulo1}>Ubicación</h3>
        <p className={styles.ubica}>{hueca.ubicacion}</p> 

        <div
        style={{ display: "flex", justifyContent: "center", marginTop: "-25em" }}
      ></div>
      
         <Footer />
          </div>)
}


export async function getServerSideProps(context) {
  const {id} = context.params
  const res= await fetch(`http://localhost:3000/api/huecas/busqueda/${id}`)
  const hueca=await res.json()
  return{
    props:{
      hueca,
    }
  }
  
};
export default HuecasPage;