import React, { PureComponent } from 'react'
import { connect } from 'react-redux'



class PizzaSause extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.dispatch({
      type:'NEW_SAUSE',
      payload:e.target.value
    });

  }


  render() {
    return(
      <div>
        <h1>Pick your sause</h1>

        <select className="form-control" id="baseSelector" onChange={this.handleChange}>
              <option value="0.00"> Select a Sause </option>
              <option value={0.00}> White sauce &euro;0.00</option>
              <option value={0.00}> Red sauce &euro;0.00</option>
              <option value={1.00}> Double red sauce &euro;1.00 </option>
              <option value={1.50}> Mix it up &euro;1.50 </option>
        </select>

        {/* <div>
          <input name='sause' value='0.00' type='radio' onChange={this.handleChange} /> White sauce
          <input name='sause' value='0.00' type='radio' onChange={this.handleChange} /> Red sauce
          <input name='sause' value='1.00' type='radio' onChange={this.handleChange}/> Double red sauce € 1,00
          <input name='sause' value='1.50' type='radio' onChange={this.handleChange}/> Mix it up € 1,50
        </div> */}
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
