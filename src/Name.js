import React from 'react'

const Name = ({Name}) => {
    console.log("Name")
  return (
    <div>Name : {Name}</div>
  )
}

export default React.memo(Name)