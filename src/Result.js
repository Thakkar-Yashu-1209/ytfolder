import React, { useMemo } from 'react'

const Result = ({Result, Subject}) => {
    console.log("Result");

    const per = useMemo( () => { 
        console.log("useMemo")
        return (Result * 100)/100
    },[Result]);

  return (
    <>
     <div>Result : {Result}</div>
    <div>Persentage is : {per}</div>
    <div>Subject is : {Subject}</div>
    </>
   
    
  )
};

export default React.memo(Result)