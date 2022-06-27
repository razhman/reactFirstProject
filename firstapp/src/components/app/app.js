import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [
        {name: 'Vadim', salary: 800,increase: false,like: false, id: 1},
        {name: 'Artem', salary: 7000,increase: false,like: true, id: 2},
        {name: 'Andrey', salary: 5000,increase: false,like: false, id: 3}
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4
  }

  deleteItem = (id)=>{
    this.setState(({data})=>{
      return{
        data: data.filter(item => item.id != id )
      }
    })
  }

  addItem = (name, salary)=>{
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++
    }
    this.setState(({data})=>{
       const newArr = [...data, newItem]
          return{
        data: newArr
      }
    })
  }

  onToggleIncrease = (id)=>{
  
    this.setState(({data})=>({
      data: data.map(item => {
        if (item.id === id){
          return {...item, increase: !item.increase}
        }
        return item
      })
    }))
  }
  onToggleLike = (id)=>{
    this.setState(({data})=>({
      data: data.map(item => {
        if (item.id === id){
          return {...item, like: !item.like}
        }
        return item
      })
    }))
  }

  searchEmp = (items, term)=>{
    if (term.length === 0){
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term)=>{
    this.setState({term})
  }

 filterPost = (items, filter)=>{
  switch(filter){
    case 'like':
        return items.filter(item => item.like)
    case 'moreThan1000':
        return items.filter(item => item.salary > 1000)
    default:
        return items
  }
 }

 onFilterSelect = (filter)=>{
  this.setState({filter})
 }

 onUpdateInput = (id) => {
   this.setState(({data})=>{
     return{
      data: data
     }
   })
 }

  render(){
    const {data, term, filter} = this.state
    const employers = this.state.data.length
    const increased = this.state.data.filter(item => item.increase).length
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)

    return (
      <div className="app">
        <AppInfo 
        employers={employers} increased={increased}  
        
        />
  
        <div className="search-panel">
        <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
        <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployersList
         data={visibleData}
         onDelete={this.deleteItem}
         onToggleIncrease = {this.onToggleIncrease}
         onToggleLike = {this.onToggleLike}
         />
        <EmployersAddForm onAdd = {this.addItem}/>
      </div>
    )
  }
}


export  default App; 