import { pokeIdToSpriteURL } from '../../utils/displayHelpers';
import { capitalizeString } from '../../utils/stringHelpers';
import './TypeResult.css';

// TODO: Create a placeholder unknown image for pokemon that haven't been selected yet.
    // Or a blank transparent background
const TypeResult = ({type, value}) => {
    return(
        <div>
            <p>{`${capitalizeString(type)}`}</p>
            <img src={value === "" ? "?" : pokeIdToSpriteURL(value)} />
        </div>
    );
}

export default TypeResult;