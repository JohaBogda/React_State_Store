import React, { Component } from 'react';

class ProductList extends Component {
    // new syntax
    // initiate state above render()
    // everytime we want to access our state anywhere inside our component, we have to use this.state
    state= {
        inShoppingCart: false
    }

    // toggleCart function
    toggleCart = () => {
        // update our inShoppingCart to switch from true to false
        this.setState({
            // what state are we trying to update
            // this.setState automatically knows that we are trying to update our state
            // the ! means we want to replace the current value of our state so it's the opposite 
            inShoppingCart: !this.state.inShoppingCart

        })
    }

    render() {
        console.log("We're inside ProductList and this is our props", this.props)
        return (
            <div onClick={this.toggleCart}>
                {/* this.props refers to the object that was passed from the parent component App */}
                {/* TERNARY OPERATOR - if else statements */}
                {/* since state is declared = false then : "" is selected since it's the usual flase aka else statement */}
                {this.props.product.name} {this.props.product.price} {this.state.inShoppingCart ? <span>is in shopping cart!</span> : ""}
            </div>
        );
    }
}

export default ProductList;
