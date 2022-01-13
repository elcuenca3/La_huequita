import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Image from "next/image"
import styles from "../../styles/id.module.css";
import Link from "next/link"
import { CardPlato } from "../../components/Card/card";
const PlatoPage = ({catal}) => {

  return(  <div>
    <Header />
    <div className={styles.container}>
    {catal.map(catal=>
    (
        <CardPlato key={catal._id} id={catal._id} imagen={catal.imagen} nombre={catal.nombre} description={catal.descripcion}/>
    ))}
    
    </div>
    <Footer />
  </div>)
}



export async function getServerSideProps(context) {
  const {id} = context.params
  const res= await fetch(`http://localhost:3000/api/catalogo/busqueda/${id}`)
  const catal= await res.json()
  return{
    props:{
      catal ,
    }
  }
  
};
export default PlatoPage