import { Component } from 'react';
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest';
import Fuse from 'fuse.js';
import './AutosuggestInput.css';

class AutosuggestInput extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            suggestions: []
        };
    }

    //**** Autosuggest boilerplate **** //
    onAutocompleteChange = (e, { newValue, method }) => {
        const { onInputChange } = this.props;

        onInputChange(newValue);
    }

    getSuggestions = (value) => {
        const { keys } = this.props;
        const inputLength = value.trim().length;

        const { optionsList } = this.props;
        const fuseOpts = {
            threshold: 0.3,
            keys
        }

        const fuse = new Fuse(optionsList, fuseOpts);
        const results = fuse.search(value.trim()).map(sugg => sugg.item);

        return inputLength === 0
            ? []
            : results;
    }

    getSuggestionValue = suggestion => {
        return suggestion[this.props.suggestionProp];
    }

    renderSuggestion = suggestion => (
        <div>
            {suggestion[this.props.suggestionProp]}
        </div>
    )

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        })
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        })
    }

    shouldRenderSuggestions = () => {
        return true;
    };


    render() {
        const { suggestions } = this.state;
        const {
            value,
            id,
            type,
            onSuggestionSelected
        } = this.props;

        const inputProps = {
            placeholder: `Search ${type} types`,
            value,
            autocomplete: false,
            autocorrect: false,
            autocapitalize: false,
            spellcheck: false,
            onChange: this.onAutocompleteChange
        }
        
        return (
            <Autosuggest
                id={id}
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps} 
                onSuggestionSelected={onSuggestionSelected}
                shouldRenderSuggestions={this.shouldRenderSuggestions}
            />
        );
    }
}

AutosuggestInput.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    keys: PropTypes.arrayOf(PropTypes.string).isRequired,
    optionsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    suggestionProp: PropTypes.string.isRequired,
}

export default AutosuggestInput;