import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {newSause} from '../actions/pizza'
import {sauses} from '../shared/data'

class PizzaSause extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(e) {
    this.props.newSause(e.target.value);
  }

  render() {
    return (<div className="sauce-options">
      <h1>Step 2: Select Sauce!</h1>
      {
        sauses.map((sauce) => <label>
          <input type="radio" value={sauce.id} name="base-option" onChange={this.onSelect}/>
          <b>{sauce.name} -
                {sauce.price}&euro; </b><br/>
        </label>)
      }
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {pizza: state.pizza}
}

export default connect(mapStateToProps, {newSause})(PizzaSause)
