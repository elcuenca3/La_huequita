import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import styles from "../styles/contacto.module.css";
import Image from "next/image";
import Link from "next/link";

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
                <div className={styles.redes}>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>

                </div>
            </div>

            <form action="" method="GET" className={styles.formulario}>
                <input type={"text"} name="nombre" placeholder="Nombre" id="nombre"/>
                <input type={"text"} name="correo" placeholder="Correo Electronico" id="correo"/>
                <input type={"text"} name="asunto" placeholder="Asunto" id="asunto"/>
                <textarea name="mensaje" id="mensaje" placeholder="Mensaje"></textarea>
                <button type="button">Enviar</button>
            </form>

       </div>
       <Footer />
      </div>
    );
  };
  export default Contacto;