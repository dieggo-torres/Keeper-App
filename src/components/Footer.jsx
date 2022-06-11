import React from "react";

function Footer() {
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  
  return (
    <footer>
      <p>Copyright &copy; {anoAtual}.</p>
    </footer>
  );
}

export default Footer;