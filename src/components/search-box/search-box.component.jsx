import './search-box.styles.css';

const SearchBox = ({onChangeHandler, placeholder, className}) =>(
    <input 
        type='search' 
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={`${className} search-box`}
    />
);
export default SearchBox;