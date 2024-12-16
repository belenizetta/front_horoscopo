import Image from "next/image";
import style from "../page.module.css";
import clases from "./page-genero.module.css"
import Link from "next/link";

export default function GeneroPage() {
    return <div className={style.container}>
        <Image
            src={"/images/genero-1.PNG"}
            alt="Paso 1"
            width={350}
            height={100}
        ></Image>
        <h2 className={style.h2}> INGRESÁ TU GÉNERO</h2>
        <div>
            <Image
                src={"/images/gen-1.png"} 
            alt="Descripción de la imagen"
            width={100} // Especifica el ancho
            height={100}>
            </Image>
            <Image
                src={"/images/gen-2.png"} 
            alt="Descripción de la imagen"
            width={100} // Especifica el ancho
            height={100}>
            </Image>
            <Image
                src={"/images/gen-3.png"} 
            alt="Descripción de la imagen"
            width={100} // Especifica el ancho
            height={100}
            >
            </Image>

        </div>
        <Link href="/datos">
        <button className={style.button}>
          INGRESAR
        </button>
      </Link>
    </div>
}