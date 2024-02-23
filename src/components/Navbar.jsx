import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    name: "Home",
    href: "/Home",
  },
  {
    name: "Calendario",
    href: "/Calendario"
  },
  {
    name: "Informacion",
    href: "/Informacion"
  },
  {
    name: "Controlcitas",
    href: "/Controlcitas"
  },
  {
    name: "Historiaclinica",
    href: "/Historiaclinica"
  },
];

const Navbar = () => {
  return ( 
    <div>
      {links.map((x) => (
        <Link to={x.href}>{x.name}</Link>
      ))}
    </div>    
  );
};

export default Navbar;