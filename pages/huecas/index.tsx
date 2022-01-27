import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import styles from "../../styles/huecas.module.css";
import { CardHueca } from "../../components/Card/card";
import Link from "next/link";




const Huecas = ({huec}) => {
  return (
    <div>
      <Header />

      <h1>Huecas</h1>
      <p className={styles.texts1}>
        En esta seccion encontraras las huecas y restaurantes más conocidos y
        que mas venden productos de la provincia de Loja
        </p>
      <div className={styles.container}>
        {huec.map(huec  =>
        (
            <CardHueca key={huec._id} id={huec._id} imagen={huec.imagen} nombre={huec.nombre} description={huec.descripcion}/>
        ))}     
        </div>
      <div style={{display:"flex" , justifyContent:"center",padding:"40px"}}>
        <Link href="/huecas/newHueca"> 
      <a className={styles.boton}>Agregar</a>
      </Link>
      </div>
      <Footer />
    </div>
  )
}
export async function getServerSideProps() {
  const res= await fetch('http://localhost:3000/api/huecas')
  const huec=await res.json()
  return{
    props:{
      huec,

    }
  }
  
};

export default Huecas;
