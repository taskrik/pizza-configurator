import * as React from 'react'
import { connect } from 'react-redux'

import PizzaBase from './PizzaBase'
import PizzaSause from './PizzaSause'
import PizzaToppings from './PizzaToppings'
import PizzaDelivery from './PizzaDelivery'
import PizzaPrice from './PizzaPrice'

class PizzaConfigurator extends React.PureComponent {
  render() {
    return (

      <div className="pizza-configurator">
        <h1>Make your own Pizza</h1>
        <PizzaBase />
        <PizzaSause />
        <PizzaToppings />
        <PizzaDelivery />
        <PizzaPrice />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(PizzaConfigurator)
