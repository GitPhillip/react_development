import { Component } from "react";

import Card from "../card/card.component"; 
import './card-list.styles.css';

class CardList extends Component{

    render() {
        const { monstors } = this.props;
        return(
            <div className="card-list">
                {monstors.map(monstor => {
                    return (
                        <Card 
                            monstor={monstor}
                        />
                    )
                })}
            </div>
        )
    }
}

export default CardList