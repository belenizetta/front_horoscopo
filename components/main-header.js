"use client";

import styles from "./main-header.module.css";
import { usePathname } from 'next/navigation';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function MainHeader() {
    const pathname = usePathname(); 
    let title = '';
    let atras = '';
    switch (pathname) {
        case '/datos':
            title = 'Tus Datos';
            atras = '/genero';
            break;
        case '/horoscopo':
            title = 'Tu Horóscopo';
            atras = '/datos';
            break;
        default:
            title = 'Tu Género'; // Por defecto
            atras = '/'
            break;
    }
    return <header className={styles.header}>
        <nav className={styles.nav}> 
            <Link href={atras}>
                <button className={styles.button}>
                    <FontAwesomeIcon icon={faArrowLeft } />
                </button> 
            </Link>
            <h1 className={styles.h1}>{title}</h1>
        </nav>
    </header>
}