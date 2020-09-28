import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer__copyright">
          Este app foi criado a partir do curso <a href="https://www.udemy.com/course/curso-reactjs/">
          'React Js do zero ao avançado na pratica'. </a>
        </p>
      </footer>
    )
  }
}

export default Footer;