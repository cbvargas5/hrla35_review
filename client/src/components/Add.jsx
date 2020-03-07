import React from 'react';
import axios from 'axios';


export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'name': '',
      'imgurl': ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(e){

    this.setState({
      [e.target.name]: e.target.value,
      // imgurl: e.target.value
    }, () => {console.log(this.state)})
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/students', {
      name: this.state.name,
      imgurl: this.state.imgurl
    })
    .then(() => {
      window.alert('you did great chief!')
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Student Name: </label>
          <input type="text" name="name" onChange={this.changeHandler}/>
          <label>Image URL: </label>
          <input type="text" name="imgurl" onChange={this.changeHandler}/>
          <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}