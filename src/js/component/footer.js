import React from "react";
import icon from '../../img/icon.png';

export const Footer = () => (
  <footer className="footer py-3 text-center mt-5 bg-light shadow">
    <p className="mb-0">© 2024 
      <a href="https://github.com/eliasjr89">
        <img className="icon" src={icon} alt="GitHub Icon" />
      </a> 
      All rights reserved.
    </p>
  </footer>
);
