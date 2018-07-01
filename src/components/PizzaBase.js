import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectBase } from '../actions/pizza'
import { pizzabases } from '../shared/data';
import Radio from '@material-ui/core/Radio';

class PizzaBase extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e) {
    this.props.dispatch({
      type: 'NEW_BASE',
      payload: {
        id: e.target.value
      }
    });
  }

  render() {
    return (
      <div className="base-options">
        <h1>Step 1: Select a Base!</h1>
        <label>
          <input type="radio" value="1" name="base-option" onChange={this.onSelect} />
          <b>20cm NY Style € 6,45</b>
        </label><br />
        <label>
          <input type="radio" value="2" name="base-option" onChange={this.onSelect} />
          <b>25cm NY Style € 8,99</b>
        </label><br />
        <label>
          <input type="radio" value="3" name="base-option" onChange={this.onSelect} />
          <b>30cm NY Style € 11,49</b>
        </label><br />
        <label>
          <input type="radio" value="4" name="base-option" onChange={this.onSelect} />
          <b>35cm NY Style € 13,49</b>
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

export default connect(mapStateToProps)(PizzaBase)
