import React from 'react'
import './body.css'
import Search from '../../components/Search';


function Body(props) {
    return (
        <div className="bodypage">
            <Search 
                token={props.token} 
                selectedTracks={props.selectedTracks} 
                handleSelect={props.handleSelect}
            />
        </div>
    );
}

export default Body
