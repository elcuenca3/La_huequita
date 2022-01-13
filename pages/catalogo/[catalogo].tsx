import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Image from "next/image"
import styles from "../../styles/id.module.css";
import Link from "next/link"
const PlatoPage = ({plato}) => {

    return (<div>  
      <Header />
      { plato && JSON.stringify(plato)}
         <Footer />
          </div>)
}


export async function getServerSideProps(context) {
  const {id} = context.params
  const res= await fetch(`http://localhost:3000/api/catalogo/busqueda/${id}`)
  const plato=await res.json()
  return{
    props:{
      plato,
    }
  }
  
};
export default PlatoPage