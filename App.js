import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor() {
    super()
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    return fetch('https://octopus-database-56713.herokuapp.com/list')
      .then((response) => response.json())
      .then((responseJson) => {
       
        this.setState({
          data:responseJson
        })
        console.log(this.state.data)
      })
    }
  render() {
    return (
      <div>
        {
          this.state.data.map( (dynamicData,key)=>
          <div>
            {
              dynamicData.longitude
			  
            }
			<br>
			</br>
			{
				dynamicData._id
			}
			<br>
			</br>
			{
				dynamicData.latitude
			}
			<br>
			</br>
			{
				dynamicData.note
			}
			<br>
			</br>
			{
				dynamicData.bait
			}
			<br>
			</br>
			{
				dynamicData.__v
			}
            </div>

          )
        }

      </div>
    )
  }
}

export default App;
