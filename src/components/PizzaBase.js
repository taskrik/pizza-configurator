import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {selectBase} from '../actions/pizza'


 class PizzaBase extends React.PureComponent {
   constructor(props) {
     super(props);
     this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
     this.props.dispatch({
       type:'NEW_BASE',
       payload:e.target.value
     });
   }

  render() {
    return(
      <div>
        <h1>First you pick your base</h1>
        <select className="form-control" id="baseSelector" onChange={this.handleChange}>
              <option value=""> Select a base </option>
              <option value="6.45"> 20cm NY Style € 6,45 </option>
              <option value="8.99"> 25cm NY Style € 8,99 </option>
              <option value="11.49"> 30cm NY Style € 11,49 </option>
              <option value="13.49"> 35cm NY Style € 13,49 </option>
        </select>
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
