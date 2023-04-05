import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Aboutus from './Aboutus'
import Bootstrap from './Bootstrap'

const Routing = () => {
  return (
    <div>
        <Routes>
        <Route path = '/about' element = {<Aboutus/>}></Route>
        <Route path = '/bootstrap' element = {<Bootstrap/>}></Route>
        </Routes>
    </div>
  )
}

export default Routing