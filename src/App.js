import { useQuery, useMutation } from '@apollo/client'
import { useState } from 'react'
import { VOTERS, NEW_VOTERS } from './lib/Query'

import './App.css';

function App() {

  const [ages, setAges] = useState('')

  const { data, loading, error } = useQuery(VOTERS, {
	variables: { age: ages }
 })

 console.log(data);
 const [ newVoter ] = useMutation(NEW_VOTERS, {
	update: (cache, data) => {
	  console.log(data)
	}
 })

 const handleVoter = e => {
	e.preventDefault()
	const { name, age, address } = e.target.elements

	newVoter({
	  variables: {
		 name: name.value,
		 age: age.value - 0,
		 address: address.value
	  }
	})
 }
  const handleAge = (e) => {
    setAges(e.target.value)
  }
	return (
		<div className="App">
			<form onSubmit={handleVoter} >
				<input name="name" type='text' placeholder="name" />
				<input name="age" type='number' placeholder="age" />
				<input name="address" type='text' placeholder="address" />
				<button type="submit">Send</button>
			</form>
      <div className="div">
		<strong>Yosh bo'yicha saralash</strong>
			<select onChange={handleAge}>
        
				<option value='all'>All</option>
				<option value='18-35'>18-35</option>
				<option value='35-60'>35-60</option>
				<option value='60-200'>60-</option>
			</select>

			
		</div>
		{ 
      data && data.voters.map((e, i) => (
        <div key={i}>
          <strong>{e.name}</strong>
			 <strong>{e.age}</strong>
			 <strong>{e.address}</strong>
        </div>
      ))
    }
		</div>
	);
}

export default App;
