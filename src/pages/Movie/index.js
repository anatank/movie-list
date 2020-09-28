import React, { Component } from 'react';
import './movie.css';
import { Link } from 'react-router-dom';

class Movie extends Component {
  constructor(props) {
    super();
    this.state = {
      movie: []
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    fetch(url)
    .then((r) => r.json())
    .then((json) => {
      this.setState({movie: json})
    })
  }

  render() {
    return(
      <div className="movie-info">
        <h1>{this.state.movie.nome}</h1>
        <img src={this.state.movie.foto} alt="Imagem do Filme" />
        {this.state.movie.length !== 0 && <h3>Sinopse</h3>}
        {this.state.movie.sinopse}
        <Link to="/">Voltar para a página inicial</Link>      
      </div>
    )
  }
}

export default Movie;