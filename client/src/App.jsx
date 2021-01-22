import React from 'react';
import ReactDOM from 'react-dom';


import Main from '../components/Main.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Tools from '../components/Tools.jsx';
import Form from '../components/Form.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        message: '',
      data: {
        aloha: {
          name: 'ALOHA GARDENER',
          mainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          secondaryText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          images: ['_DSC2802-2.jpg', '_DSC2909-2.jpg', '_DSC3034-2.jpg', '_DSC3085.jpg']
        }
      }
    }
    this.handleChange =  this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let name = event.target.name;
    // this.setState({[name]: event.target.value})
    this.setState({[name]: event.target.value})
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.name)
    console.log(this.state.email)
    console.log(this.state.message)
  }


  render() {
    return (
      <div>
        <Main />
        <Skills />
        <Projects data={this.state.data} />
        <About />
        <Tools />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'))