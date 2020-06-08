import React from 'react';

//function Search(props){
class Search extends React.Component{    
    constructor(props){
        super(props);
    }
    onChangeEvent=(e) =>{
        const query=e.target.value.toString().toLowerCase();
        this.props.onsearch(e.target.value);
    }
    render(){
        return(
            
            <input type="text" onChange={this.onChangeEvent} />
        );
    }
}
export default Search;