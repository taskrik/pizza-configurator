import React, { PureComponent } from 'react'
import { connect } from 'react-redux'



class PizzaSause extends React.PureComponent {
  render() {
    return(
      <div>
        <h1>Pick your sause</h1>
        <div>
          <input name='sause' type='checkBox'/> White sauce
          <input name='sause' type='checkBox'/> Red sauce
          <input name='sause' type='checkBox'/> Double red sauce € 1,00
          <input name='sause' type='checkBox'/> Mix it up € 1,50
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

// export default PizzaSause;
export default connect(mapStateToProps)(PizzaSause)
