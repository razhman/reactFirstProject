import { Component } from 'react'
import './employers-add-form.css'


// const EmployersAddForm = ()=>{
//   return(
//     <div className="app-add-form">
//       <h3>Добавьте нового сотрудника</h3>
//       <form className="add-form d-flex">
//         <input type="text" className="form-control new-post-label" placeholder="Как его зовут?"/>
//         <input type="number" className="form-control new-post-label" placeholder="З/П в $?"/>
//         <button type="submit" className="btn btn-outline-light">Добавить</button>
//       </form>
//     </div>
//   )
// }

class EmployersAddForm extends Component{
 constructor(props){
  super(props)
  this.state = {
    name: '',
    salary: ''
  }
 }

 onValueChange = (e)=>{
  this.setState({
    [e.target.name]: e.target.value
  })
 }
 onSubmit = (e) => {
  e.preventDefault()
  if(this.state.name != '' && this.state.salary != ''){
    this.props.onAdd(this.state.name, this.state.salary)
    this.setState({
      name: '',
      salary: ''
    })
  }
  
 }

  render(){
    const {name, salary} = this.state
    return(
      <div className="app-add-form">

        <h3>Добавьте нового сотрудника</h3>

        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input onChange={this.onValueChange} name = 'name'  value = {name} type="text" className="form-control new-post-label" placeholder="Как его зовут?"/>
          <input onChange={this.onValueChange} name = 'salary' value = {salary} type="number" className="form-control new-post-label" placeholder="З/П в $?"/>
          <button type="submit" className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    )
  }
}

export default EmployersAddForm