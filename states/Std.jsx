import React from 'react'

function Std(props) {
    let data = props.data
  return (
    <div>
      <table border="2PX" style={{textAlign:"center"}}>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>YOP</th>
          <th>DOB</th>
          <th>Branch</th>
          <th>Native</th>
          <th>PHNO</th>
        </tr>
      {data.map((x)=>{
        return(
          <tr>
            <td>{x.studentName}</td>
            <td>{x.age}</td>
            <td>{x.yop}</td>
            <td>{x.dob}</td>
            <td>{x.branch}</td>
            <td>{x.native}</td>
            <td> 
              <ol>
              {x.phNo.map((x)=>{
                return <li>{x}</li>
              })}
              </ol>
               </td>
          </tr>
        )
      })}
      </table>
    </div>
  )
}

export default Std