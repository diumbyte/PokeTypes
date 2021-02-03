import { Component } from 'react';
import AutosuggestInput from '../AutosuggestInput/AutosuggestInput';
import axios from 'axios';
import { capitalizeString } from '../../utils/stringHelpers'
import './TypeSelection.css'

export default class TypeSelection extends Component {
    basePokeAPI = "https://pokeapi.co/api/v2";

    constructor(props) {
        super(props)
        
        this.state = {
            pokemonList: [],
            inputValue: ''
        };
    }

    // Function signature like this to easily pass to Autosuggestion component
    onInputChange = (newValue) => {
        this.setState({
            inputValue: newValue
        })
    }

    componentDidMount = async () => {
        const { type } = this.props;
        const { data: {pokemon: pokemonResList} } = await axios.get(`${this.basePokeAPI}/type/${type}`);
        // API response looks like:
            // pokemon: { name: "", url: "API Url to specific pokemon"}
        const pokemonList = pokemonResList.map(item => (
            {
                name: capitalizeString(item.pokemon.name),
                url: item.pokemon.url
            }
        ))

        this.setState({
            pokemonList
        })
    }

    render() {
        const { inputValue, pokemonList } = this.state;
        const { type, onTypeSelectionChange } = this.props;

        return (
            <div>
                <AutosuggestInput 
                    value={inputValue}
                    id={type}
                    type={type}
                    onInputChange={this.onInputChange}
                    optionsList={pokemonList}
                    keys={["name"]}
                    suggestionProp={"name"}
                    onSuggestionSelected={(e, {suggestion}) => {
                        // Example suggestion.url = https://pokeapi.co/api/v2/pokemon/10/
                        // Want the last URL segment
                        const segments = suggestion.url.split('/');
                        // If there's a trailing slash pop() will return an empty string "" = false
                        // Short circuit fails so pop is executed again only if there's a trailing slash
                        const lastSegment = segments.pop() || segments.pop(); 

                        onTypeSelectionChange({id: lastSegment, name: suggestion.name})
                    }}
                />
            </div>
        );
    }
}