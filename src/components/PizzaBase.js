import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {selectBase} from '../actions/pizza'
import {pizzabases} from '../shared/data'

class PizzaBase extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e) {
    this.props.selectBase(e.target.value);
  }

  render() {
    return (<div className="base-options">
      <h1>Step 1: Select a Base!</h1>
      {
        pizzabases.map((base) => <label>
          <input type="radio" value={base.id} name="base-option" onChange={this.onSelect}/>
          <b>{base.name} -
             {base.price}&euro;</b><br/>
        </label>)
      }
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {pizza: state.pizza}
}

export default connect(mapStateToProps, {selectBase})(PizzaBase)
