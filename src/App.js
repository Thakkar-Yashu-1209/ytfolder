import React from 'react'
import Name from './Name'
import Result from './Result'

const App = () => {
  return (
    <div>
      <Name Name="yash"/>
      <Result  Result={90} Subject="physics" />
    </div>
  )
}

export default App