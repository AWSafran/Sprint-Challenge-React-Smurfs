import React, { Component } from 'react';
import Smurf from './Smurf';
import axios from 'axios';

class SmurfPage extends Component{
    constructor(props){
        super(props);
        this.state={
            smurf: []
        }
    }

    componentDidMount= () =>{
        console.log(this.props.match.params.id);

        axios.get(`http://localhost:3333/smurfs?id=${this.props.match.params.id}`)
            .then(res => this.setState({smurf: res.data}))
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
    render(){
        return <Smurf
            name={this.state.smurf.name}
            id={this.state.smurf.id}
            age={this.state.smurf.age}
            height={this.state.smurf.height}
            key={this.state.smurf.id}
            deleteSmurf={this.props.deleteSmurf}
        />
    }
}

export default SmurfPage;