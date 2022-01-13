import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

export const CardPlato = ({
  nombre = "",
  imagen = "/images/carnes.png",
  description = "",
  id = "",
}) => {
  return (
    <Link href={`/platos/${id}`}>
      <a>
        <div className={styles.card}>
          <h3 className={styles.titulo}>{nombre}</h3>
          <Image
            className={styles.image}
            width={100}
            height={50}
            layout="responsive"
            src={imagen}
          />
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
};
export const CardCata = ({
  nombre = "",
  imagen = "/images/carnes.png",
  description = "",
  id = "",
}) => {
  return (
    <Link href={`/catalogo/${id}`}>
      <a>
        <div className={styles.card}>
          <h3 className={styles.titulo}>{nombre}</h3>
          <Image
            className={styles.image}
            width={100}
            height={50}
            layout="responsive"
            src={imagen}
          />
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
};
export const CardHueca = ({
  nombre = "",
  imagen = "/images/carnes.png",
  description = "",
  id = "",
}) => {
  return (
    <Link href={`/huecas/${id}`}>
      <a>
        <div className={styles.card}>
          <h3 className={styles.titulo}>{nombre}</h3>
          <Image
            className={styles.image}
            width={100}
            height={50}
            layout="responsive"
            src={imagen}
          />
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
};
