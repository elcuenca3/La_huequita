import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { CardPlato } from "../../components/Card/card";
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import styles from "../../styles/platos.module.css";

const Platos = ({cplato})=> {
  const router = useRouter();

    return(  <div>
        <Header />
        <h1>Catalogo de platos</h1>
      
        <div className={styles.container}>
        {cplato.map(cplato=>
        (
            <CardPlato key={cplato._id} id={cplato._id} imagen={cplato.imagen} nombre={cplato.nombre} description={cplato.descripcion}/>
        ))}
        </div>
        <div style={{display:"flex" , justifyContent:"center",padding:"40px"}}>
        <Link href="/platos/newPlatos"> 
      <a className={styles.boton}>Agregar</a>
      </Link>
      </div>
     
        <Footer />
      </div>)
}


export async function getServerSideProps() {
    const res= await fetch('http://localhost:3000/api/tasks')
    const cplato=await res.json()
    return{
      props:{
        cplato,
  
      }
    }
    
  };

export default Platos;