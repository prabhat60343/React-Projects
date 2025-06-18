import React from 'react'
import Header from './components/footer/header'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'

function layout () {
  return (
    <>
<Header/>
<Outlet/>
<Footer/>
    </>
  )
}
export default layout