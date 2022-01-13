import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import styles from "../styles/formulario.module.css";

const Formaulario = () => {
    return (
      <div>
       <Header />
       <h1>Formulario Platos</h1>
       <div className={styles.contenedor_formulario}>

            <form action="" method="POST" className={styles.formulario}>
                <input type={"text"} name="nombre" placeholder="Nombre" id="nombre"/>
                <input type={"text"} name="imagen" placeholder="Imagen (URL)" id="iamgen"/>
                <input type={"text"} name="categoria" placeholder="Categoria" id="categoria"/>
                <textarea name="descrpcion" id="descripcion" placeholder="Descripcion"></textarea>
                <input type={"text"} name="ingredientes" placeholder="Ingredientes (Separar por Comas)" id="ingredientes"/>
                <input type={"text"} name="preparacion" placeholder="Preparación (Separar por Comas)" id="preparacion"/>
                <input type={"text"} name="lugar" placeholder="Lugar" id="lugar"/>
                <input type={"text"} name="huecas" placeholder="Huecas (Separar por Comas)" id="huecas"/>

                <button type="button">Enviar</button>
                <button type="button">Limpiar</button>
            </form>

       </div>
       <Footer />
      </div>
    );
  };
  export default Formaulario;