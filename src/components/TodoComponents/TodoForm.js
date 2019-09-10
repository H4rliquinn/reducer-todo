import React from 'react';

class Todoform extends React.Component{
    constructor(){
        super();
        this.state={input:""};
    }

    handleChange=(e) =>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({[name]:value})
        // console.log(e.target.value,this.state);
    }

    addButton=(e)=>{
        this.props.todos(e, this.state.input);
        this.setState({input:""});
    } 

    render(){
        return(
            <form>
                <input type="text" placeholder="Add item" id="todoItem" name="input" onChange={this.handleChange} value={this.state.input}/>
                <button type="button" onClick={this.addButton}>Add</button>
                <button type="button" onClick={(e)=> this.props.clearHandel(e, this.state.input)}>Clear</button>
            </form>
        );
    }
}

export default Todoform;

