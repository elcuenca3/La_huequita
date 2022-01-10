import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Image from "next/image"
import Link from "next/link"
const PlatoPage = ({plato}) => {

    return (<div>  
      <Header />
      <h1>{plato.nombre}</h1>
      <Image
       src={plato.imagen}
       alt="Sopa"
       width="480"
       height="260"/>
       <p>{plato.Historia}</p>
        {plato.ingredientes.map((ingrediente)=><li>{ingrediente}</li>)}
        {plato.huecas.map((huecas)=><li>{huecas}</li>)}
        {plato.preparacion.map((preparacion)=><li>{preparacion}</li>)}
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