import React from 'react';
import axios from 'axios';
// import expe from 'express';

// const ListElement = (props) =>(
//   <div>
//   <span>
//     <div>{props.student.name}</div>
//     <img src={props.student.imgurl}></img>
//   </span>
//   </div>
// )

class ListElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      studentId: 0,
      studentName: this.props.studentName
    }
    this.updateStudent = this.updateStudent.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  updateStudent(id) {
    // this.setState({
    //   clicked: true
    // })
    axios.put(`/api/students/${id}`, {
      name: this.state.studentName
    })
    .then(() => {
      this.props.getStudent()
    })
  }

  clickHandler(id) {
    this.setState({
      clicked: true,
      studentId: id
    }, console.log('click', this.state))
  }

  changeHandler(e) {
    this.setState({
      studentName: e.target.value
    })
  }

  submitHandler(e) {
    e.preventDefault()
    this.setState({
      clicked: false
    }, () => {
      this.updateStudent(this.state.studentId)
    })
  }

  render() {
    // if (!this.state.clicked) {
    //   return (
    //     <div>
    //     <span>
    //       <div onClick={this.updateStudent}>{this.props.student.name}</div>
    //       <img src={this.props.student.imgurl}></img>
    //     </span>
    //     </div>
    //   )
    // } else {
    //   return (
    //   <div>
    //     <label>Change Name
    //       <input type="text"/>
    //     </label>
    //     <button>Submit</button>
    //   </div>
    //   )
    // }
    return (
      this.state.clicked ?
        <span>
          <input onChange={this.changeHandler} value={this.state.studentName}></input>
          <button onClick={this.submitHandler}>Change Name</button>
          <img src={this.props.student.imgurl}></img>
        </span> :
        <span>
          <div onClick={() => this.clickHandler(this.props.student._id)} >{this.props.student.name}</div>
          <img src={this.props.student.imgurl}></img>
        </span>        




    )
  }
}


export default ListElement;