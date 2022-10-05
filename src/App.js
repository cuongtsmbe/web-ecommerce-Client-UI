import { PureComponent } from 'react';
import './App.css';

class Header extends PureComponent {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
class Content extends PureComponent {
  constructor() {
    super();
    this.state = {
       data: 
       [
          {
             "id":1,
             "name":"NGUYEN VAN A",
             "class":"JAVA"
          },
          {
             "id":2,
             "name":"NGUYEN VAN B",
             "class":"PHP"
          },
          {
             "id":3,
             "name":"NGUYEN VAN C",
             "class":"JAVA"
          }
       ]
    }
  }
  render() {
     return (
        <div>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <ListStudent key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
        </div>
     );
  }
}
 
class ListStudent extends PureComponent {
   render(){
     return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.class}</td>
      </tr>
     );
   }
}

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
