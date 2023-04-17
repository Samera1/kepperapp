import React from "react";

function Footer (){
    const date = new Date();
    const year = date.getFullYear();

    return <footer>
        <p>Desarrollado por Sebastian Mera en {year}</p>
    </footer>

}

export default Footer;