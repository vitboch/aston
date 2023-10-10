import React, {Component} from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted with value:', this.state.inputValue)
    this.setState({inputValue: ''})
  }

  render() {
    console.log('render')

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
