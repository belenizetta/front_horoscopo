"use client";

import style from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function HoroscopoPage() {
    const searchParams = useSearchParams();

    // Obtener los datos desde los parámetros de consulta
    const nombre = searchParams.get("nombre");
    const email = searchParams.get("email");
    const fechaNacimiento = searchParams.get("fechaNacimiento");

    const [horoscopo, setHoroscopo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Solo hacer la solicitud si tenemos los datos necesarios
        if (nombre && email && fechaNacimiento) {
          const getHoroscopo = async () => {
            try {
              const res = await fetch("https://localhost:7034/horoscopo", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  nombre: nombre,
                  email: email,
                  fecha_nacimiento: fechaNacimiento,
                }),
              });
    
              if (!res.ok) {
                throw new Error("Error al obtener el horóscopo");
              }
    
              const data = await res.json();
              setHoroscopo(data);
            } catch (err) {
              setError(err.message);
            } finally {
              setLoading(false);
            }
          };
    
          getHoroscopo();
        }
      }, [nombre, email, fechaNacimiento]);
    
      if (loading) return <div className={style.container}>Loading...</div>;
      if (error) return <div className={style.container}>Error: {error}</div>;

    return <div className={style.container}>
    <div className={style.divHoroscopo}>
        <Image className={style.imagenSigno}
            src={`/images/boton_${horoscopo.signo}.png`} 
            alt="Descripción de la imagen"
            width={300} // Especifica el ancho
            height={70}>
        </Image>
        <h4 className={style.h4Hola}> Hola {nombre}</h4>
        <p className={style.pHoroscopo}> Tu horoscopo para hoy dice que {horoscopo.horoscopo} </p>
        <h4>Faltan {horoscopo.cantidad_dias} días para tu cumpleaños.</h4>
    </div>

    
    <Link href="/estadisticas">
        <button className={style.button}>
            CONTINUAR
        </button>
    </Link>
</div>
}