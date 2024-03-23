"use client"
import Navbar from '../components/NavBar'

import Footer from '../components/Footer'
import EventList from '../components/event/EventList'


import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar />
      
      <EventList />
      
      <Footer />
      
    </div>
  )
}
