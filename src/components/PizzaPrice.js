import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

class PizzaPrice extends React.PureComponent {
  render() {
    return (<div className="price-display">
      <b>Total: €
        <span className="price">{this.props.pizza['totalPrice']}</span>
      </b>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {pizza: state.pizza}
}

export default connect(mapStateToProps)(PizzaPrice)
