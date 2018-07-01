import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {droneDelivery, notDroneDelivery} from '../actions/pizza'

class PizzaDelivery extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(e) {
    if (e.target.checked === true) {
      this.props.droneDelivery(true);
    } else {
      this.props.notDroneDelivery(false);
    }
  }

  render() {
    return (<div className="delivery-options">
      <h1>Want your Pizza 'On The Fly'??</h1>
      <label>
        <input type="checkbox" value="1" name="delivery-option" onChange={this.onSelect}/>
        <b>Drone Delivery (+10% on Total &euro;)</b>
      </label>
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {pizza: state.pizza}
}

export default connect(mapStateToProps, {droneDelivery, notDroneDelivery})(PizzaDelivery)
