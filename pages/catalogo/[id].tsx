import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Image from "next/image"
import styles from "../../styles/id.module.css";
import Link from "next/link"
const PlatoPage = ({catal}) => {

    return (<div>  
      <Header />

         <Footer />
          </div>)
}


export async function getServerSideProps(context) {
  const {id} = context.params
  const res= await fetch(`http://localhost:3000/api/catalogo/busqueda/${id}`)
  const catal= await res.json()
  return{
    props:{
      catal,
    }
  }
  
};
export default PlatoPage