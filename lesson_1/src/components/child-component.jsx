import React, {Component} from 'react'

class ChildComponent extends Component {
  render() {
    const {stringProp, numberProp, booleanProp} = this.props

    return <h2>{stringProp} {numberProp} {booleanProp ? 'has started' : 'has not started'}</h2>
  }
}

export default ChildComponent
