import { Component } from 'react';
import AutosuggestInput from '../AutosuggestInput/AutosuggestInput';
import './TypeSelection.css'

export default class TypeSelection extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            inputValue: ''
        };
    }

    // Function signature like this to easily pass to Autosuggestion component
    onInputChange = (e, { newValue, method}) => {
        this.setState({
            inputValue: newValue
        })
    }

    render() {
        const { inputValue } = this.state;
        const { type } = this.props;
        return (
            <div>
                <AutosuggestInput 
                    value={inputValue}
                    id={type}
                    type={type}
                    onInputChange={this.onInputChange}
                    // optionsList={API of all pokemon of specific type}
                    // keys={["Property Name"]}
                    // suggestionProp={"Property Name"}
                />
            </div>
        );
    }
}