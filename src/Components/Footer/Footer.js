import React from 'react'
import './Footer.scss'
import { FaServer, FaGithub} from "react-icons/fa";

export const Footer = () => {
    return ( 
          <footer className="social-section">
            <ul className="footer-links">
              <li className="foot-link">
                <a target="_blank" rel="noreferrer" href="https://github.com/Atos20/indecision-maker-server">
                  <FaServer className="repo-link"/>
                </a>
              </li>
              <li className="foot-link">
                <a target="_blank" rel="noreferrer" href="https://github.com/nicolegooden/indecision-maker">
                  <FaGithub className="repo-link"/>
                </a>
              </li>
            </ul>
            <p className="copy-rights">Ⓒ Indecision Maker is a product of Nicole Gooden, Blake Donnelly, and Orlando Murcio.</p>
          </footer>    
    )
}
