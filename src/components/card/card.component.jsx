import './card.styles.css';

const Card = ({monstor}) =>{
    const {name, email, id} = monstor; //destructure the props
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

export default Card;