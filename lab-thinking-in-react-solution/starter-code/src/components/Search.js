import React from 'react';


class SearchBar extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            searchTerm: "",
            showUnstocked: true,
        }

    }

    updateInput = e => {
        this.setState({
            searchTerm: e.target.value
        }, () =>{
            this.props.doTheSearch(this.state.searchTerm, this.state.showUnstocked);
        })
    }

    toggleStocked = () => {
        this.setState({
            showUnstocked: !this.state.showUnstocked
        }, ()=>{
            this.props.doTheSearch(this.state.searchTerm, this.state.showUnstocked)
        })
    }


    render(){
        return(
            <div>
                <div>
                    <label>
                        Search
                    </label>
                    <input 
                        type="text" 
                        name="searchTerm" 
                        onChange={this.updateInput}   
                    />
                </div>
                <br />
                <div>
                    <label>
                        Only Show Products In Stock
                    </label>
                    <input 
                        type="checkbox" 
                        onClick={this.toggleStocked} 
                    />
                </div>
               
            </div>
        )
    }





}

export default SearchBar;