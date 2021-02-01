import { Component } from 'react';
import TypeSelection from '../TypeSelection/TypeSelection'
import './Main.css'

export default class Main extends Component {

    types = ["bug", "dark", "dragon", 
            "electric", "fairy", "fighting", 
            "fire", "flying", "ghost",
            "grass", "ground", "ice", 
            "normal", "poison", "psychic",
            "rock", "steel", "water"];

    constructor(props) {
        super(props)
        
        this.state = this.types.reduce( (acc, curr) => 
                        {
                            acc[curr] = {
                                type: curr,
                                value: ''
                            }
                            return acc;
                        }
                        , {});
    }

    onTypeSelectionChange = (type) => (value) => {
        console.log(type);
        console.log(value);
        this.setState({
            [type]: value
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="container main-container">
                <div className="half-container selections-container">
                    { Object.keys(this.state).map(prop => (
                        <TypeSelection 
                            key={prop}
                            type={prop}
                        />
                    ) )}
                </div>
                <div className="half-container results-container">
                    Results
                </div>
            </div>
        );
    }
}