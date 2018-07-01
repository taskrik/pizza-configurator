import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class PizzaPrice extends React.PureComponent {
  render() {
    return(
      <div>
        <h1>Price of your pizza</h1>
        <h2>Total:{this.props.totalPrice}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}


export default connect(mapStateToProps)(PizzaPrice)
