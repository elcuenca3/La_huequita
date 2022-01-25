import { NextPage } from "next";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Image from "next/image";
import styles from "../styles/signup.module.css";
import Link from "next/link";
const SigUp: NextPage = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Sign-up</h1>
        <div className={styles.container}>
          <p style={{display:"flex",justifyContent:"center",padding:"20px",fontSize:"30px"}}>Ingrese los siguientes datos</p>
          <form>
            <div className={styles.box}>
            <p className={styles.nombre}>Ingrese su nombre:</p>
            <input
              autoComplete="off"
              name="nombre"
              type="text"
            
              placeholder="Nombres"
            />
            </div>
            <div className={styles.box}>
            <p className={styles.nombre}>Ingrese su apellido:</p>
            <input
              autoComplete="off"
              name="nombre"
              type="text"
              placeholder="Apellidos"
            />
            </div>
            <div className={styles.box}>
            <p className={styles.nombre}>Ingrese su Correo:</p>
            <input
              autoComplete="off"
              name="nombre"
              type="text"
              placeholder="Correo@utpl.edu.ec"
            />
            </div>
            <div className={styles.box}>
            <p className={styles.nombre}>Ingrese una contraseña</p>
            <input
              autoComplete="off"
              name="nombre"
              type="email"
              placeholder="contraseña"
            />
            </div>
             <div className={styles.box}>
            <p className={styles.nombre}>Rescriba la contraseña</p>
            <input
              autoComplete="off"
              name="nombre"
              type="text"
              placeholder="re-contraseña"
            />
            </div>
          </form>
          <div style={{justifyContent:"center",display:"flex"}}>
          <button className={styles.boton}>login</button>
          <Link href="/signup">
          <button className={styles.boton}>Sign-up</button>
          </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SigUp;
