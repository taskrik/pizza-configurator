import React, { PureComponent } from 'react'


class PizzaToppings extends React.PureComponent {
  render() {
    return(
      <div>
        <h1>Pick your Toppings</h1>

        <div>
          <input name='topping' type="checkBox"/>Pineapple
          <input name='topping' type="checkBox"/>Corn
          <input name='topping' type="checkBox"/>Olives (green)
          <input name='topping' type="checkBox"/>Red union
          <input name='topping' type="checkBox"/>Spinach
          <input name='topping' type="checkBox"/>Cherry tomatoes
          <input name='topping' type="checkBox"/>Chicken
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default PizzaToppings;
// export default connect(mapStateToProps)(PizzaBase)
