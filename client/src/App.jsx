import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Main from '../components/Main.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Tools from '../components/Tools.jsx';
import Form from '../components/Form.jsx';
import Thanks from '../components/Thanks.jsx';
import Foot from '../components/Foot.jsx';

import Logo from './illustration.png';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        message: '',
        showForm: true,
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
    this.scroll = this.scroll.bind(this);

  }



  handleChange(event) {
    event.preventDefault();
    let name = event.target.name;
    // this.setState({[name]: event.target.value})
    this.setState({[name]: event.target.value})
  }


  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/send',
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }
    })
    this.setState({
      showForm: false
    })
    // .then(res => {
    //   if (res.data.status === 'success') {
    //   } else {
    //     alert("Sorry your message failed to send")
    //   }
    // })
  }



  scroll(event) {
    let name = event.target.getAttribute('name');
    const page = document.querySelector(`#${name}`)
    page.scrollIntoView({ behavior: 'smooth', block: 'center' })

  }





  render() {
    return (
      <div>
        <Main scroll={this.scroll} logo={Logo}/>
        <Skills showElement={this.showElement} />
        <Projects data={this.state.data} />
        <About />
        <Tools />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} showForm={this.state.showForm}/>
        <Foot scroll={this.scroll} />

      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'))