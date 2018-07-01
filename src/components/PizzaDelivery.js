import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class PizzaDelivery extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(e) {
    if(e.target.checked===true)
    {
      this.props.dispatch ({
        type:'DRONE_DELIVERY',
        payload: {
          select: true
        }
      })
    } else {
      this.props.dispatch({
          type:'NODRONE_DELIVERY',
          payload: {
            select: false
          }
      })
    }
  }

  render() {
    return (
      <div className="delivery-options">
        <h1>Want your Pizza 'On The Fly'??</h1>
        <label>
          <input type="checkbox" value="1" name="delivery-option" onChange={this.onSelect} />
          <b>Turbo Drone Delivery</b>
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

export default connect(mapStateToProps)(PizzaDelivery)
