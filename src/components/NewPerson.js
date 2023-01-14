import React, { Component } from "react";
import "../css/NewPerson.css";

class NewPerson extends Component {
    state = {
        name : "",
        job : "",
        gender : ""
    }

    setValues = e => this.setState({[e.target.id] : e.target.value })
    
    
    save = (e)=>{
        e.preventDefault();
        this.props.insertNewPerson(this.state);
    }

    render(){
        return(
            <div>
                
                <form action="" onSubmit={this.save}>
                    <input className="field" id="name" onChange={this.setValues} type="text" placeholder="name" /><br />
                    <input className="field" id="job" onChange={this.setValues} type="text" placeholder="job" /><br />
                    <input className="field" id="gender" onChange={this.setValues} type="text" placeholder="gender" /><br />
                    <button className="btn" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default NewPerson;