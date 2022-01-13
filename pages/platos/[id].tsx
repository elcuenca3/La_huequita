import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Image from "next/image"
import styles from "../../styles/id.module.css";
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
       width="575"
       height="300"
       className={styles.slider}
       />
      </div>

       <p className={styles.texts1}>{plato.historia}</p>
        <div className={styles.menu}>
          <div className={styles.ingre}>
            <h4>Ingredientes</h4>
            {plato.ingredientes.map((ingrediente)=><li>{ingrediente}</li>)}
            <p className={styles.texts}/> 
          </div>
          <div className={styles.huec}>
          <h4>Donde Encontrarlo</h4> 
          {plato.huecas.map((huecas)=><li>
            {huecas}<a href="#"> Visitar</a></li>)}
          <p className={styles.texts2}/> 
          </div>
          <div className={styles.prep}>
          <h4>Preparacion</h4> 
            {plato.preparacion.map((preparacion)=><li>{preparacion}</li>)}
            <p className={styles.texts3}/> 
          </div>
          {/* 
          <h2 className={styles.titulo1}>Te pueden Interesar estos platos</h2>
          <div className={styles.catalogo}>
        <Link href="#">
      <div className={styles.card}>
        <Image
          src="/images/fritada.jpg"
          alt="Sopa"
          width="330"
          height="180"
          className={styles.image_container}
        />
        <p className="ncatalogo">Fritada</p>
        </div>
        </Link>
        <div className={styles.card}>
        <Image
          src="/images/tamal.jpg"
          alt="ptipico"
          width="330"
          height="180"
          className={styles.image_container}
        />
           <p className="ncatalogo">Tamal Lojano</p>
        </div>
        <div className={styles.card}>
        <Image
          src="/images/seco.jpg"
          alt="ptipico"
          width="330"
          height="180"
          className={styles.image_container}
        />
        <p className="ncatalogo">Seco de Chivo</p>
      </div>
      </div>
      */}
        </div>
        
        {/*
         { plato && JSON.stringify(plato)}
         */}
         <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
      ></div>
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