import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class PizzaPrice extends React.PureComponent {
  render() {
    return(
        <h1>Price of your pizza</h1>

    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default PizzaPrice;
// export default connect(mapStateToProps)(PizzaBase)
