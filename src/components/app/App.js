import './App.css';
import { Component } from 'react';
import Person from '../person/person';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 123, name: 'Mirzonazir', phone: '+79092643133', career: 'Junior Web Develoer', email: 'mirzonazir.okhunov@gmail.com', meeting: '06.01.2023 - 12:00' },
        { id: 1234, name: 'Aziza', phone: '+79121170977', career: "Mirzonazir's wife", email: 'azizahonohunov@gmail.com', meeting: '08.01.2023 - 10:00' },
        { id: 1235, name: 'Aliyakhon', phone: '+79092643133', career: "Mirzonazir's & Aziza's dother", email: 'none', meeting: '' },
        { id: 1236, name: 'Mokhiniso', phone: '+79092643133', career: "Mirzonazir's & Aziza's dother", email: 'none', meeting: '' }
      ]
    }
  }
  onValueChange = (id, value) => {    
    this.setState(({data}) => {
      const item = data.find(item => item.id === id)
      const newItem = {...item, meeting: value}
      const index = data.indexOf(item)
      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1, data.length)]
      return {
        data: newData
      }
    })
  }
  render() {
    const {data} = this.state
    const personList = data.map(item => {
      return <Person {...item} key={item.id} onValueChange={(id, value) => this.onValueChange(id, value)} />
    })
    return (
      <>        
      <p className='tableHead'>Таблица информации </p>
      <table className='responsive-table'>        
        <thead>          
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Career</th>
            <th>E-mail</th>
            <th>Meeting</th>
          </tr>
        </thead>
        <tbody>
          {personList}
        </tbody>
      </table>
      </>
    );
  }
}

export default App;
