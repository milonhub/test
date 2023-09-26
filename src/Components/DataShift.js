import React from 'react'

export default function DataShift(props) {

    const {data, onHandleData} =props;
    onHandleData("Hi I am from Child Component") 
    
  return (
    <div>
        <p>{data}</p>
      <h1>This is a child component</h1>
    </div>
  )
}
