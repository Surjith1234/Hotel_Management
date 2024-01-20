import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Header from '../../component/header/Header'
import "./List.css"
import { useLocation } from 'react-router-dom'
import format from 'date-fns/format'
import { DateRange } from 'react-date-range'
import Searchitem from '../../component/searchitem/Searchitem'
const List = () => {
  const location=useLocation();
  const[destination,setDestination]=useState(location.state.destination)
  const[date,setDate]=useState(location.state.date)
  const[option,setOption]=useState(location.state.option)
  const[opendate,setopendate]=useState(false)

  console.log(location);
  return (
    <div>
      <Navbar/>
      <Header type={"list"}/>
      <div className='listcontainer'>
        <div className='listwrapper'>
          <div className='listsearch'>
            <h1 className='listtitle'>Search</h1>
            <div className='listsearchitem'>
              <label>Destination</label>
              <input type='text' placeholder={destination}/>
            </div>
            <div className='listsearchitem'>
              <label>Check-in Date</label>
              <span onClick={()=>setopendate(!opendate)}>{`${format(date[0].startDate,"dd/mm/yyyy")} to ${format(date[0].endDate,"dd/mm/yyyy")}`}</span>
             {opendate && <DateRange 
              onChange={(item)=>setDate([item.selection])}
              minDate={new Date()}
              ranges={date}/>}
            </div>
            <div className='listsearchitem'>
              <label>Option</label>
              <div className='listoptionitem'>
                <span className='listoptiontext'>Min price <small>per night</small>
                </span>
                <input type='number' className='listoptioninput'></input>
              </div>
              <div className='listoptionitem'>
                <span className='listoptiontext'>Adult
                </span>
                <input type='number' className='listoptioninput' placeholder={option.adult}></input>
              </div>
              <div className='listoptionitem'>
                <span className='listoptiontext'>children
                </span>
                <input type='number' className='listoptioninput' placeholder={option.children}></input>
              </div>
              <div className='listoptionitem'>
                <span className='listoptiontext'>Room
                </span>
                <input type='number' className='listoptioninput' placeholder={option.room}></input>
              </div>
            </div>
          </div>
          <div className='listresult'>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List