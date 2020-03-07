import React from 'react';
import axios from 'axios';
import Random from './Random.jsx'
import Add from './Add.jsx'
import List from './List.jsx'



export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'page': 'home',
      'studentlist' : []
    }
    this.getStudents = this.getStudents.bind(this);
    this.changepage = this.changepage.bind(this);

  }

  componentDidMount(){
    this.getStudents()
  }

  getStudents(){
    axios.get('/api/students')
      .then((students) => {
        this.setState({
          studentlist: students.data
        }, () => {console.log(this.state)})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  changepage(e){
    if (e.target.value === 'home') {
      this.getStudents()
    }
    var whatever = e.target.value;
    this.setState({
      page: whatever
    })
  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <Add />
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <List students={this.state.studentlist} getStudents={this.getStudents}/>
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <Random students={this.state.studentlist}/>
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else {
      return (
        <div>
          <button value='add' onClick={this.changepage}>Add Student</button>
          <button value='list' onClick={this.changepage}>List Students</button>
          <button value='random' onClick={this.changepage}>Random Student</button>
        </div>
      )
    }
  }
}