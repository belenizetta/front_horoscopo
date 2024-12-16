"use client"; // Asegúrate de que este componente sea ejecutado en el cliente

import { usePathname } from 'next/navigation'; // Importa usePathname de next/navigation
import MainHeader from './main-header'; // Asegúrate de que este es tu componente MainHeader

export default function HeaderWrapper({ children }) {
  const pathname = usePathname(); // Obtenemos la ruta actual usando usePathname

  return (
    <>
      {pathname !== '/' && <MainHeader />} {/* No mostrar el Header si estamos en la página de inicio */}
      {children}
    </>
  );
}
