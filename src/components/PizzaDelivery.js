import React, { PureComponent } from 'react'


class PizzaDelivery extends React.PureComponent {
  render() {
    return(
      <div>
        <h1>Drone Delivery</h1>
        <div>
          <input name='delivery' type="radio"/>With turbo-drone-delivery
          <input name='delivery' type="radio"/>Without turbo-drone-delivery

        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default PizzaDelivery;
// export default connect(mapStateToProps)(PizzaBase)
