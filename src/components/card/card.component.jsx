import { Component } from "react";

import './card.styles.css';

class Card extends Component{

    render(){
        const {name, email, id} = this.props.monstor;
        return(
            <div className='card-container' key={id}>
                <img 
                    alt={`monstor ${name}`}
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <h3>{email}</h3>
            </div>
        )
    }
}
export default Card;