import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class PizzaToppings extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(e) {
    var amount = this.props.pizza['toppings'].length;

    if (e.target.checked === true) {
      if (amount >= 3) {
        alert('Only 3 toppings allowed!')
        e.target.checked = false
      } else {
        this.props.dispatch({
          type: 'NEW_TOPPING',
          payload: {
            id: e.target.value
          }
        })
      }
    } else {
      this.props.dispatch({
        type: 'REMOVE_TOPPING',
        payload: {
          id: e.target.value
        }
      })
    }
  }

  render() {
    return (
      <div className="topping-options">
        <h1>Step 3: Select Your Toppings! <span className="red">(max 3)</span></h1>
        <label>
          <input type="checkbox" value="1" name="topping_selector" onChange={this.onSelect} />
          <b>Pineapple</b>
        </label><br />
        <label>
          <input type="checkbox" value="2" name="topping_selector" onChange={this.onSelect} />
          <b>Corn</b>
        </label><br />
        <label>
          <input type="checkbox" value="3" name="topping_selector" onChange={this.onSelect} />
          <b>Olives (Green)</b>
        </label><br />
        <label>
          <input type="checkbox" value="4" name="topping_selector" onChange={this.onSelect} />
          <b>Red Onions</b>
        </label><br />
        <label>
          <input type="checkbox" value="5" name="topping_selector" onChange={this.onSelect} />
          <b>Spinach</b>
        </label><br />
        <label>
          <input type="checkbox" value="6" name="topping_selector" onChange={this.onSelect} />
          <b>Cherry Tomatoes</b>
        </label><br />
        <label>
          <input type="checkbox" value="7" name="topping_selector" onChange={this.onSelect} />
          <b>Cottage Cheese</b>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps)(PizzaToppings)
