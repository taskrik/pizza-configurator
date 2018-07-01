import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {selectToppings} from '../actions/pizza'

class PizzaToppings extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.dispatch({
      type:'NEW_TOPPING',
      payload:e.target.value
    });
  }


  render() {
    return(
      <div>
        <h1>Pick your Toppings</h1>

        <div className="form-group">

            <select className="form-control"  onChange={this.handleChange}>
              <option value="">Select Topping 1</option>
              <option value="0.50"> Pepperonni &euro; 0.50</option>
              <option value="0.50"> Chicken &euro; 0.50</option>
              <option value="0.50"> Sausage &euro; 0.50</option>
              <option value="0.50"> Green Olives &euro; 0.50</option>
              <option value="0.50"> Red Onions &euro; 0.50</option>
              <option value="0.50"> Spinach &euro; 0.50</option>
              <option value="0.50"> Cherry Tomatoes </option>
              <option value="0.50"> Pineapple &euro; 0.50</option>
            </select>
          </div>

          <div className="form-group">

              <select className="form-control"  onChange={this.handleChange}>
                <option value="">Select Topping 2</option>
                <option value="0.50"> Pepperonni &euro; 0.50</option>
                <option value="0.50"> Chicken &euro; 0.50</option>
                <option value="0.50"> Sausage &euro; 0.50</option>
                <option value="0.50"> Green Olives &euro; 0.50</option>
                <option value="0.50"> Red Onions &euro; 0.50</option>
                <option value="0.50"> Spinach &euro; 0.50</option>
                <option value="0.50"> Cherry Tomatoes </option>
                <option value="0.50"> Pineapple &euro; 0.50</option>
              </select>
            </div>

            <div className="form-group">

                <select className="form-control"  onChange={this.handleChange}>
                  <option value="">Select Topping 3</option>
                  <option value="0.50"> Pepperonni &euro; 0.50</option>
                  <option value="0.50"> Chicken &euro; 0.50</option>
                  <option value="0.50"> Sausage &euro; 0.50</option>
                  <option value="0.50"> Green Olives &euro; 0.50</option>
                  <option value="0.50"> Red Onions &euro; 0.50</option>
                  <option value="0.50"> Spinach &euro; 0.50</option>
                  <option value="0.50"> Cherry Tomatoes </option>
                  <option value="0.50"> Pineapple &euro; 0.50</option>
                </select>
              </div>

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
