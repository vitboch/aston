import React, {Component} from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      isSubmitDisabled: false
    }
    this.inputRef = React.createRef()
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

  handleChange = event => {
    const inputValue = event.target.value
    const isSubmitDisabled = inputValue.includes('реакт')
    this.setState({inputValue, isSubmitDisabled})
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log('Form submitted with value:', this.state.inputValue)
    this.setState({inputValue: ''})
  }

  handleFocus = () => this.inputRef.current.focus()

  render() {
    console.log('render')

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          ref={this.inputRef}
        />
        <button type="submit" disabled={this.state.isSubmitDisabled}>
          Submit
        </button>
        <button type="button" onClick={this.handleFocus}>
          Set Focus
        </button>
      </form>
    )
  }
}

export default Form
