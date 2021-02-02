import { Component } from 'react';
import TypeSelection from '../TypeSelection/TypeSelection'
import './Main.css'

export default class Main extends Component {

    // types = ["bug", "dark", "dragon", 
    //         "electric", "fairy", "fighting", 
    //         "fire", "flying", "ghost",
    //         "grass", "ground", "ice", 
    //         "normal", "poison", "psychic",
    //         "rock", "steel", "water"];

    types = ["bug"]

    constructor(props) {
        super(props)

        // Object with properties of each type
        /*
        {
            bug: "pokemonName"
        }
        */
        const pokeTypesList = this.types.reduce( (acc, curr) => 
                            {
                                acc[curr] = ''
                                return acc;
                            }
                            , {});
        
        this.state = pokeTypesList;
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
                    { Object.keys(this.state).map(type => (
                        <TypeSelection 
                            key={type}
                            type={type}
                            onTypeSelectionChange={this.onTypeSelectionChange(type)}
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