import { Component } from 'react';
import './app-info.css'



// const AppInfo =() =>{
//   return (
//     <div className="app-info">
//       <h1>Учет сотрудников в моей компании</h1>
//       <h2>Общее число сотрудников: </h2>
//       <h2>Премию получат: </h2>
//     </div>
//   )
// }
class AppInfo extends Component{
constructor(props){
  super(props)

}

  render(){
    const {employers, increased} = this.props
    
    return (
      <div className="app-info">
        <h1>Учет сотрудников в моей компании</h1>
        <h2>Общее число сотрудников: {employers} </h2>
        <h2>Премию получат: {increased} </h2>
      </div>
    )
  }
}


export default AppInfo;