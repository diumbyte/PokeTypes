import { pokeIdToSpriteURL, typeToHex } from '../../utils/displayHelpers';
import { capitalizeString } from '../../utils/stringHelpers';
import './TypeResult.css';

const TypeResult = ({type, pokeId, children}) => {
    return(
        <div className="result-card">
            <div className="result-card___header" style={{backgroundColor: typeToHex(type)}}>
                <img className="result-card___type-icon" 
                    src={`${process.env.PUBLIC_URL}/assets/${type}.svg`}
                    alt="Pokemon type icon"
                />
                <span className="result-card___type">{`${capitalizeString(type)}`}</span>
                <span className="result-card___name">
                    {children}    
                </span>
            </div>
            <div className="result-card___body">
            {   pokeId.length === 0
                ? <></>
                : <img src={ pokeIdToSpriteURL(pokeId)} alt="Pokemon icon"/>
            }
            </div>
            
        </div>
    );
}

export default TypeResult;