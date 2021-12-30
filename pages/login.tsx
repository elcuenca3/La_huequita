import { NextPage } from "next";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Image from "next/image";
import styles from "../styles/home.module.css";
const Login: NextPage = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
      <Image
          src="https://raw.githubusercontent.com/RommelOjeda/imagenes/main/sin-cadena.png"
          alt=""
          width="580"
          height="225"
          className={styles.image_logo}
        />

      </div>
      <Footer />
    </div>
  );
};

export default Login;
