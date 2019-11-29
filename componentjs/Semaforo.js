import React from 'react';

class Semaforo extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            semaforo: null
        };
    }

    ficarAmarelo = () => {
        this.setState({
            semaforo: 'amarelo',
        })
    }

    ficarVermelho = () => {
        this.setState({
            semaforo: 'vermelho',
        })
    }

    ficarVerde = () => {
        this.setState({
            semaforo: 'verde',
        })
    }

    render() {
        return(
        <div>
            <p>{this.state.semaforo}</p>
            <button onClick={this.ficarVerde}>Amarelo</button>
            <button onClick={this.ficarVermelho}>Vermelho</button>
            <button onClick={this.ficarAmarelo}>Verde</button>
        </div>
        )
    }
}
export default Semaforo;
