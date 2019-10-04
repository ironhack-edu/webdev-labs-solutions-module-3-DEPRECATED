import React from 'react';
import axios from 'axios';

class NewBeer extends React.Component{

    constructor(props){
        super(props)
        this.state={
            newName:"",
            newTagLine: "",
            newContributor: "",
        }
    }

    addNew = e => {
        e.preventDefault();
        const { newName, newTagLine, newContributor } = this.state;
        const newBeer = {
            name: newName,
            tagline: newTagLine,
            contributed_by: newContributor
        }

        axios.post('https://ih-beer-api.herokuapp.com/beers/new', newBeer)
        .then( () =>{
            // console.log("redirecting....");
            // this is how you redirect
            this.props.history.push('/all-beers');
        })
        .catch(err => console.log(err))
    }


    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        return(
            <div>
                <form onSubmit={this.addNew}>
                    <label>Name</label>
                    <input 
                        value={this.state.newName} 
                        name="newName" 
                        onChange={this.handleInput}
                    />

                    <label>Tagline</label>
                    <input 
                        value={this.state.newTagLine} 
                        name="newTagLine" 
                        onChange={this.handleInput}
                    />

                    <label>Contributor</label>
                    <input 
                        value={this.state.newContributor} 
                        name="newContributor" 
                        onChange={this.handleInput}
                    />
                    <button>Submit</button>
                </form> 
            </div>
        )
    }
}

export default NewBeer;