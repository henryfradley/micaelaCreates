import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './styles.module.scss';

import Main from '../components/Main.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Tools from '../components/Tools.jsx';
import Form from '../components/Form.jsx';
import Foot from '../components/Foot.jsx';
import Logo from './illustration.png';
import projectData from './projectData.js';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
        message: '',
        showForm: true,
        data: projectData

    }
    this.handleChange =  this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
    this.scroll = this.scroll.bind(this);

  }



  handleChange(event) {
    event.preventDefault();
    let name = event.target.name;
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

  }



  scroll(event) {
    let name = event.target.getAttribute('name');
    const page = document.querySelector(`#${name}`)
    if (name === 'projects') {
      page.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      page.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }





  render() {

    return (
      <div className={styles.mainApp}>
        <Main scroll={this.scroll} logo={Logo}/>
        <Skills showElement={this.showElement} />
        <Projects data={projectData} />
        <About />
        <Tools />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} showForm={this.state.showForm}/>
        <Foot scroll={this.scroll} />

      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'))