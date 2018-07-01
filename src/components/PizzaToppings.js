import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {newTopping, removeTopping} from '../actions/pizza'
import {toppings} from '../shared/data'

class PizzaToppings extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(e) {
    var amount = this.props.pizza['toppings'].length;
    if (e.target.checked === true) {
      if (amount === 3) {
        alert('Max toppings reached!')
        e.target.checked = false;
      } else {
        this.props.newTopping(e.target.value);
      }
    } else {
      this.props.removeTopping(e.target.value);
    }
  }

  render() {
    return (<div className="topping-options">
      <h1>Step 3: Select Your Toppings!
        <span className="red">(max 3)</span>
      </h1>
      {
        toppings.map((topping) => <label>
          <input type="checkbox" value={topping.id} name="topping-option" onChange={this.onSelect}/>
          <b>{topping.name} -
                 {topping.price}&euro;</b><br/>
        </label>)
      }
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {pizza: state.pizza}
}

export default connect(mapStateToProps, {newTopping, removeTopping})(PizzaToppings)
