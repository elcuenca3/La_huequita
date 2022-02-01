import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Image from "next/image"
import styles from "../../styles/platos.module.css";
import Link from "next/link"
import { useState } from "react";
import router from "next/router";

const PlatoPage = ({plato}:any) => {

  const [message, setMessage] = useState("");
  const handleDelete = async () => {
    const platoId = router.query.id;
    try {
      await fetch(`/api/tasks/platos/${platoId}`, {
        method: "DELETE",
      });
      await fetch(`/api/tasks/platos/${platoId}`, {
        method: "PULL",
      });
      router.push("/platos");
    } catch (error) {
      setMessage("Error al eliminar");
    }
  };


    return (<div> 
 
      <Header />
      <button className={styles.boton1} onClick={handleDelete}>
            Eliminar
          </button>
          {message && <p>{message}</p>}
      
        <h1 className={styles.titulo}>{plato.nombre}</h1>
        <br></br>
      {/*<div style={{  justifyContent: "left", display: "flex",paddingBottom:"250px",paddingLeft:"1px",position:"relative"}}>
      <Image
       src={plato.imagen}
       alt={plato.nombre}
       width="675"
       height="350"
       className={styles.img}
       />
    </div>*/}
    <Image
       src={plato.imagen}
       alt={plato.nombre}
       width="750"
       height="350"
       className={styles.img} 
       />
     
      <div className={styles.page}>
       <p className={styles.historia}><h4 style={{fontFamily:"Rouge Script",fontSize:"40px" }}>Hitoria</h4>{plato.historia}</p>
        <div className={styles.menu}>
          <div className={styles.ingre}>
            <h4>Ingredientes</h4>
            {plato.ingredientes.map((ingrediente:any)=><li key={ingrediente}>{ingrediente}</li>)}
            <p className={styles.texts}/> 
          </div>
          <div className={styles.huec}>
          <h4>Donde Encontrarlo</h4> 
          {plato.huecas.map((huecas:any)=><li key={huecas} className={styles.ubicacion}>
            {huecas}<a  href={`https://www.google.com.ec/maps/search/${huecas}`} className={styles.ubi}>Visitar</a></li>)}
          <p className={styles.texts2}/> 
          </div>
          <div className={styles.prep}>
          <h4>Preparacion</h4> 
            {plato.preparacion.map((preparacion:any)=><li key={preparacion}>{preparacion}</li>)}
            <p className={styles.texts3}/> 
          </div>
          <div
        style={{ display: "flex", justifyContent: "center", marginTop: "4.3em" }}
      ></div>
        </div>
        
        {/*
         { plato && JSON.stringify(plato)}
         */}
         </div>
         
         <Footer />
          </div>)
}


export async function getServerSideProps(context) {
  const {id} = context.params
  const res= await fetch(`http://localhost:3000/api/tasks/platos/${id}`)
  const plato=await res.json()
  return{
    props:{
      plato,
    }
  }
  
};
export default PlatoPage