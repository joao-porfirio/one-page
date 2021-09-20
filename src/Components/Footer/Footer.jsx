import React from 'react'
import '../../css/reset.css';
import '../../css/style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__titulo">Entre em contato</h2>
      <form className="footer__formulario .formulario">
        <ul className="formulario__container">
          <li className="formulario__container-item">
            <input className="formulario__field" type="text" id="first-name" placeholder="Nome"/>
          </li>
          <li className="formulario__container-item">
            <input className="formulario__field" type="email" id="email" placeholder="E-mail"/>
          </li>
          <li className="formulario__container-item">
            <input className="formulario__field" type="tel" id="phone" placeholder="Telefone"/>
          </li>
          <li className="formulario__container-item">
            <textarea className="formulario__field" rows="5" id="message" placeholder="Mensagem..."></textarea>
          </li>
          <li className="formulario__container-item">
            <button className="formulario__container-button" type="submit">Enviar mensagem</button>
          </li>
        </ul>
      </form>
    </footer>
  )
}

export default Footer
