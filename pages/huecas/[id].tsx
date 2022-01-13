import { NextPage } from "next";
import Header from "../../components/Header/header";
import React from "react";
import styles from "../../styles/huecas.module.css";
import Footer from "../../components/Footer/footer";
import Image from "next/image"
import Link from "next/link";

const HuecasPage = ({huec}) => {

    return (<div>  
      <Header />
        <h1>{huec.nombre}</h1>
      
     
       <p className={styles.texts1}>{huec.historia}</p>
        
         <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
      ></div>
         <Footer />
          </div>)
}


export async function getServerSideProps(context) {
  const {id} = context.params
  const res= await fetch(`http://localhost:3000/api/huecas/busqueda/${id}`)
  const huec=await res.json()
  return{
    props:{
      huec,
    }
  }
  
};
export default HuecasPage;