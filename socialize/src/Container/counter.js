import React, { Component } from 'react'
import{connect} from "react-redux";

 class counter extends Component {
    render() {
        return (
            <div>

        <h1>your score is:{this.props.ctr}</h1>
                <button onClick={this.props.onInCounter}>Add</button>
                <button onClick={this.props.onDecCounter}>decrease</button>
                <button onClick={this.props.addCounter}>add 5</button>
                <button onClick={this.props.removeCounter}>remove 5</button>
                
            </div>
        )
    }
}


const mapStatetoProps=(state)=>{
    return{
        ctr:state.counter,
    };
};

const mapDispatchtoProps = (dispatch) =>{
    return{
        onInCounter:(dispatch)=> dispatch ({type:"INCREMENT"}),
        onDecCounter:(dispatch) => dispatch ({type:"DECREAMENT"}),
        addCounter:(dispatch)=> dispatch ({type:"ADD"}),
        removeCounter:(dispatch)=> dispatch ({type:"REMOVE"}),
        resetCounter:(dispatch)=> dispatch ({type:"RESET"}),


    };

};

export default connect (mapDispatchtoProps, mapStatetoProps) (counter) ;