import React from 'react'
import { DashBoard } from './Pages/DashBoard'
import { useFetchData } from './Hooks/useFetchData'

export const Application = () => {
  useFetchData()
  return (

    <DashBoard/>
  )
}
