import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentValue: '',
      filteredValue: '',
    };

    this.removeVogais = this.removeVogais.bind(this);
  }

  removeVogais(event) {
    const arrayString = Array.from(event.target.value);
    let arrayStringFiltered = arrayString
      .filter((item) => {
        if (item >= 'A' && item <= 'z') {
          switch (item.toUpperCase()) {
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
              break;
              return false;
            default:
              return true;
          }
          return false;
        }
      })
      .join('');
    console.log(arrayStringFiltered);
    this.setState({ filteredValue: arrayStringFiltered });
  }
  getValue(event) {
    if (this.state.filteredValue !== '') {
      return `Consoantes: ${this.state.filteredValue}`;
    }
  }

  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p></p>
            <div className="App-input">
              <input
                type="text"
                placeholder="Digite o texto aqui..."
                onChange={this.removeVogais}
                // defaultValue={this.state.currentValue}
              />
            </div>
            <p> {this.getValue()} </p>
          </header>
        </div>
      </Fragment>
    );
  }
}

// export default App;
