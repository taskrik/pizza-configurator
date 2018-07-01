import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class PizzaSause extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(e) {
    this.props.dispatch({
      type: 'NEW_SAUSE',
      payload: {
        id: e.target.value
      }
    });
  }

  render() {
    return (
      <div className="sauce-options">
        <h1>Step 2: Select Sauce!</h1>
        <label>
          <input type="radio" value="1" name="sauce-option" onChange={this.onSelect} />
          <b>White Sauce € 0,00</b>
        </label><br />
        <label>
          <input type="radio" value="2" name="sauce-option" onChange={this.onSelect} />
          <b>Red Sauce € 0,00</b>
        </label><br />
        <label>
          <input type="radio" value="3" name="sauce-option" onChange={this.onSelect} />
          <b>Double Red Sauce € 1,00</b>
        </label><br />
        <label>
          <input type="radio" value="4" name="sauce-option" onChange={this.onSelect} />
          <b>Mix it up! € 1,50</b>
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

export default connect(mapStateToProps)(PizzaSause)
