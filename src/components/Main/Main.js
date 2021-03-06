import { Component } from 'react';
import TypeSelection from '../TypeSelection/TypeSelection';
import TypeResult from '../TypeResult/TypeResult';
import './Main.css'

export default class Main extends Component {

    types = ["bug", "dark", "dragon", 
            "electric", "fairy", "fighting", 
            "fire", "flying", "ghost",
            "grass", "ground", "ice", 
            "normal", "poison", "psychic",
            "rock", "steel", "water"];

    // types = ["bug", "dark", "dragon"]

    constructor(props) {
        super(props)

        // Reduce array to object with properties of each type
        /*
        {
            bug: "pokemonName"
        }
        */
        const pokeTypesList = this.types.reduce( (acc, curr) => 
                            {
                                acc[curr] = {
                                    id: '',
                                    name: ''
                                }
                                return acc;
                            }
                            , {});
        
        this.state = pokeTypesList;
    }

    onTypeSelectionChange = (type) => ({id, name}) => {
        this.setState({
            [type]: {
                id,
                name
            }
        })
    }

    render() {
        return (
            <div className="container  main-container">
                <div className="grid-container results-container">
                    { Object.keys(this.state).map(type => (
                        <TypeResult 
                            key={type}
                            type={type}
                            pokeId={this.state[type].id}
                        >
                            <TypeSelection 
                                key={type}
                                type={type}
                                onTypeSelectionChange={this.onTypeSelectionChange(type)}
                            />
                        </TypeResult>
                    ) )}
                </div>
            </div>
        );
    }
}