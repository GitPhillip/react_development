import { Component } from "react";

import './search-box.styles.css';

class SearchBox extends Component{

    render(){
        console.log('render from Search box ');
        const { onChangeHandler, placeholder, className } = this.props; //destructure

        return (
            <input 
                type='search' 
                placeholder={placeholder}
                onChange={onChangeHandler}
                className={`${className} search-box`}
            />
        );
    }
}
export default SearchBox;