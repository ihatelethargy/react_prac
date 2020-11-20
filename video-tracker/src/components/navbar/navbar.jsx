import React, { useRef } from 'react';
import './navbar.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const Navbar = (props) => {
    
    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        
        props.onSearch(value);
    }

    const onClick = (event) =>{
        handleSearch()
    }
    
    const onKeyPress = (event) => {
        if(event.key === 'Enter') handleSearch()
    }    
    return(
            <div className="navbar">
                <h1 className="navbar-title">SOPTUBE</h1>
                <div className="searchForm">
                    <input className="search" 
                        ref={inputRef}   
                        type="text" 
                        placeholder="search..."
                        onKeyPress={onKeyPress} 
                        />
                    <button className="searchBtn"
                            onClick={onClick}
                    ><img src="/images/search.png" alt=""/></button>
                </div>
                <div className="info">info</div>
            </div>
    );
}

export default Navbar;