import React from "react";
import Header from '../../../component/header';
import { connect, useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction} from '../../../redux/action'
import Button from "react-bootstrap/Button";


class Explorer extends React.Component {
    increment = () => {
        this.props.increment();
    } 
    decrement = () => {
        this.props.decrement();
    } 


    render(){

        return(
            <React.Fragment>  
                 <Header />    
                 <h2>{this.props.user.name}</h2>
                 <h2>{this.props.num}</h2>
                 <Button onClick={this.increment}>+</Button>
                 <Button onClick={this.decrement}>-</Button>
            </React.Fragment>

        );
    }
}

const mapStateToProps = (state) => ({
    num: state.count,
    user: state.user
});
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);