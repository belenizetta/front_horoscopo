"use client"; 

import { useState } from 'react';
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import Image from "next/image";
import style from "../page.module.css";
import class_datos from "./page-datos.module.css";
export default function DatosPage() {

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        fechaNacimiento: "",
      });
    
      const router = useRouter(); // Hook para manejar navegación
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); // Evitar recargar la página
    
        // Redirigir a la página /horoscopo y pasar los datos
        router.push(`/horoscopo?nombre=${formData.nombre}&email=${formData.email}&fechaNacimiento=${formData.fechaNacimiento}`);
      };

    return (
        <div className={style.container}>
            <Image
                        src={"/images/datos-1.PNG"}
                        alt="Paso 1"
                        width={400}
                        height={100}
            ></Image>
          <h2 className={style.h2}>INGRESÁ TUS DATOS</h2>
          <form onSubmit={handleSubmit} className={class_datos.divDatos}>
            <div className={class_datos.divInput}>
              <label className={`${class_datos.label} ${class_datos.labelNombre}`}>Nombre: </label>
              <input
                className={class_datos.input}
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className={class_datos.divInput}>
              <label className={`${class_datos.label} ${class_datos.labelNombre}`}>EMail: </label>
              <input
                className={class_datos.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={class_datos.divInput}>
              <label className={`${class_datos.label} ${class_datos.labelFecha}`}>Fecha de Nacimiento: </label>
              <input
                className={class_datos.input}
                type="date"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className={class_datos.divButton}>
              <Link href="/genero">
                <button type="button" className={`${class_datos.button} ${class_datos.buttonAzul}`}>
                  VOLVER
                </button>
              </Link>

                <button type="submit" className={`${class_datos.button} ${class_datos.buttonNaranja}`}>
                  INGRESAR
                </button>
            </div>
          </form>

        </div>
      );
    }