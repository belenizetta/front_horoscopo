"use client"; 
import { useEffect, useState } from 'react';
import style from "../page.module.css";
import class_datos from "./page-estadisticas.module.css";
import Image from "next/image";
export default function EstadisticaPage() {
    const [estadisticas, setEstadisticas] = useState(null);
    const [historial, setHistorial] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const estadisticasResponse = await fetch('https://localhost:7034/estadisticas-signo'); 
                const historialResponse = await fetch('https://localhost:7034/historial-consultas'); 

                const estadisticasData = await estadisticasResponse.json();
                const historialData = await historialResponse.json();

                setEstadisticas(estadisticasData);
                setHistorial(historialData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, []);
    return (
        <div className={style.container}>
            <div className={style.divHoroscopo}>
                <h2 className={style.h2}>Signo más buscado</h2>
                {estadisticas ? (
                    <div>
                        <Image
                            src={`/images/boton_${estadisticas.signo}.png`} 
                            alt="Descripción de la imagen"
                            width={300} 
                            height={70}>
                        </Image>
                        <p className={class_datos.pCantidad}><strong>Cantidad de consultas:</strong> {estadisticas.cantidadConsultas}</p>
                    </div>
                ) : (
                    <p>Cargando estadísticas...</p>
                )}
            </div>
            <div className={style.divHoroscopo}>
                <h2 className={style.h2}>Historial de consultas</h2>
                {historial.length > 0 ? (
                    <table className={class_datos.estadisticasTable}>
                        <thead className={class_datos.estadisticasThead}>
                            <tr>
                                <th className={class_datos.estadisticasTh}>Usuario</th>
                                <th className={class_datos.estadisticasTh}>Signo Consultado</th>
                                <th className={class_datos.estadisticasTh}>Fecha de Consulta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historial.map((consulta, index) => (
                                <tr key={index}>
                                    <td className={class_datos.estadisticasTd}>{consulta.nombre}</td>
                                    <td className={class_datos.estadisticasTd}>{consulta.signo}</td>
                                    <td className={class_datos.estadisticasTd}>{new Date(consulta.fechaConsulta).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No hay consultas registradas.</p>
                )}
            </div>
        </div>
    );
}