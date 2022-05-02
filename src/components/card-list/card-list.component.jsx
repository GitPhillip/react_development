import Card from "../card/card.component"; 
import './card-list.styles.css';

const CardList = ({monstors}) => (
    <div className="card-list">
        {monstors.map(monstor => {
            return (
                <Card 
                    monstor={monstor}
                />
            )
        })}
    </div>
);

export default CardList