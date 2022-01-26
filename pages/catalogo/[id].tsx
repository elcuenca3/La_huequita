import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Image from "next/image"
import styles from "../../styles/id.module.css";
import Link from "next/link"
import { CardPlato } from "../../components/Card/card";
import { useState } from "react";
import router from "next/router";
const PlatoPage = ({catal}) => {
  const [message, setMessage] = useState("");
  const handleDelete = async () => {
    const caregoriaId = router.query.id;
    console.log(caregoriaId)
    try {
      await fetch(`/api/categoria/busqueda/${caregoriaId}`, {
        method: "DELETE",
      });
      router.push("/catalogo");
    } catch (error) {
      console.log(caregoriaId)
      setMessage("Error al eliminar");
    }
  };

  return(  <div>
    <Header />
    <button className="btn btn-danger" onClick={handleDelete}>
            Eliminar
          </button>
          {message && <p>{message}</p>}
      
    
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