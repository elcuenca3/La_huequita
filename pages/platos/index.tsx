import Image from "next/image"
import Link from "next/link"
import { Card } from "../../components/Card/card";
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header1"
import styles from "../../styles/platos.module.css";

const Platos = ({cplato})=> {

    return(  <div>
        <Header />
        <div className={styles.container}>
        {cplato.map(cplato=>
        (
            <Card key={cplato._id} id={cplato._id} imagen={cplato.image} nombre={cplato.nombre} description={cplato.description}/>
        ))}
        
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

export default Platos