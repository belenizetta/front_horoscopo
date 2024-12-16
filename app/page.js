import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={style.container}>
      <div>
        <Image 
          src={"/images/dama.png"} 
          alt="Descripción de la imagen"
          width={300} // Especifica el ancho
          height={450}>
        </Image>
      </div>
      <Link href="/genero">
        <button className={style.button}>
          INGRESAR
        </button>
      </Link>
    </div>

  );
}
