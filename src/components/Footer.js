import React from 'react';
import './styles/Footer.css';

function Footer() {

    const year = new Date().getFullYear()

    return ( <
            footer className = "footer" >
            <
            ul className = "footer-list" >
            <
            li className = "footer-item" > < a href = "mailto:carissa.j.mero@gmail.com"
            rel = "noreferrer"
            target = "_blank" > Email < /a></li >
            <
            li className = "footer-item" > < a href = "https://twitter.com/CarissaMero"
            rel = "noreferrer"
            target = "_blank" > Twitter < /a></li >
            <
            li className = "footer-item" > < a href = "https://www.linkedin.com/in/carissamero/"
            rel = "noreferrer"
            target = "_blank" > LinkedIn < /a></li >
            <
            li className = "footer-item" > < a href = "https://github.com/carissamero"
            rel = "noreferrer"
            target = "_blank" > GitHub < /a></li >
            <
            /ul>

            <
            p className = "footer-copyright" > Created by Carissa Mero, & #169; {year}</p>

    </footer>
  );
}

export default Footer;
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms