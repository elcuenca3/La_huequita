import React from "react";
import Header from "../components/Header/header1";
import Footer from "../components/Footer/footer";
import styles from "../styles/repe.module.css";
import Image from "next/image";
import {useRouter} from "next/router"
function plato ({cplato})  {
  const router = useRouter();
  return (
    <div>
      <Header />
      {cplato.map(cplato=>(
      <div className={styles.continer} key={cplato.id}>
        <h1>{cplato._id}</h1>
        <Image 
         src={"/images/carnes.png"}
         alt="Sopa"
         width="280"
         height="140"
         className={styles.image_container}
        />
        <p className={styles.texto}>{cplato.Historia}</p>
        <ul>
          <li style={{listStyleType:"initial"}}>{cplato.ingredientes}</li>
          </ul>
          <p className={styles.texto}>{cplato. preparacion}</p>
          <h2>Lugar de creacion del plato{cplato.lugar}</h2>
      </div>))}
      
        
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const res= await fetch('http://localhost:3000/api/tasks')
  const cplato=await res.json()
  console.log(cplato);
  return{
    props:{
      cplato,

    }
  }
  
};

export default plato;
