import React from 'react';
import ReactDOM from 'react-dom';


import Main from '../components/Main.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Tools from '../components/Tools.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        form: {
          name: '',
          email: '',
          message: ''
        },
        aloha: {
          name: 'ALOHA GARDENER',
          mainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          secondaryText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          images: ['_DSC2802-2.jpg', '_DSC2909-2.jpg', '_DSC3034-2.jpg', '_DSC3085.jpg']
        }
      }
    }
    this.handleChange =  this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)




  }


  render() {
    return (
      <div>
        <Main />
        <Skills />
        <Projects data={this.state.data} />
        <About />
        <Tools />

      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'))