import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Image from "next/image"
import styles from "../../styles/platos.module.css";
import Link from "next/link"
const PlatoPage = ({plato}) => {

    return (<div> 
 
      <Header />
        <h1 className={styles.titulo}>{plato.nombre}</h1>
        <br></br>
      <div style={{ justifyContent: "center", display: "flex"}}>
      <Image
       src={plato.imagen}
       alt={plato.nombre}
       width="675"
       height="400"
       className={styles.slider}
       />
      </div>

       <p className={styles.texts1}>{plato.Historia}</p>
        <div className={styles.menu}>
          <div className={styles.ingre}>
            <h4>Ingredientes</h4>
            {plato.ingredientes.map((ingrediente)=><li>{ingrediente}</li>)}
            <p className={styles.texts}/> 
          </div>
          <div className={styles.huec}>
          <h4>Donde Encontrarlo</h4> 
          {plato.huecas.map((huecas)=><li>
            {huecas}<a href="#"> ---> Visitar</a></li>)}
          <p className={styles.texts2}/> 
          </div>
          <div className={styles.prep}>
          <h4>Preparacion</h4> 
            {plato.preparacion.map((preparacion)=><li>{preparacion}</li>)}
            <p className={styles.texts3}/> 
          </div>
          <div
        style={{ display: "flex", justifyContent: "center", marginTop: "16em" }}
      ></div>
        </div>
        
        {/*
         { plato && JSON.stringify(plato)}
         */}
         
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