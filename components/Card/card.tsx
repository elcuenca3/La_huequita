import Image from "next/image"
import Link from "next/link"
import styles from './card.module.css'

export const Card = ({nombre='', imagen='/images/carnes.png', description='', id=''}) => {
    return (
        <Link href={`/catalogo/${nombre}`}>
        <a>
        <div className={styles.card}>
            <h3>{nombre}</h3>
            <Image className={styles.image} width={100} height={50} layout='responsive' src={imagen} />
            <p>{description}</p>
        </div>
        </a>
      
        </Link>
       
    )
}



