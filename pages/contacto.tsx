import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import styles from "../styles/contacto.module.css";

const Contacto = () => {
    return (
      <div>
       <Header />
       <h1>Contacto</h1>
       <div className={styles.contenedor_contacto}>

            <div className={styles.info}>

                <div className={styles.col}>
                    <p>✉ lahuequita@gmail.com</p>
                </div>
                <div className={styles.col}>
                    <p>📞(+593) 0000-111 <br/>📞(+593) 1111-000</p>
                </div>
                
                <div className={styles.huecas}>

        <div className={styles.card}>
          <img
            src="/images/logo1.png"
            alt=""
          />
          <h4>Desarrolladores</h4>
          <p>
            Erick 
            - Luis  
            - Rommel
          </p>
        </div>
        </div>
            </div>

            <form action="" method="GET" className={styles.formulario}>
                <input   autoComplete="off" type={"text"} name="nombre" placeholder="Nombre" id="nombre"/>
                <input  autoComplete="off" type={"text"} name="correo" placeholder="Correo Electronico" id="correo"/>
                <input  autoComplete="off" type={"text"} name="asunto" placeholder="Asunto" id="asunto"/>
                <textarea  autoComplete="off" name="mensaje" id="mensaje" placeholder="Mensaje"></textarea>
                <button type="button">Enviar</button>
            </form>

       </div>
       <Footer />
      </div>
    );
  };
  export default Contacto;