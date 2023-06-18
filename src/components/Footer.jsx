import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} by <span><a href="https://krishcodz-portfolio.netlify.app/" target="_blank">Krishcodz</a></span></p>
    </footer>
  );
}

export default Footer;
