import React from 'react'
import './App.css'
import { AppProvider } from './Contexts/AppContext'
import CardList from './Components/CardList'
import Pages from './Components/Pages'

 const App=()=> {
  return (
    <AppProvider>
      <div className='app'>
        <CardList/>
        <Pages/>
      </div>
    </AppProvider>
    
  )
}
export default App;