import React, { useEffect } from 'react'
import { DashBoard } from './Pages/DashBoard'
import { useFetchData } from './Hooks/useFetchData'

export const Application = () => {
  const [setIsFetching] = useFetchData()
  useEffect(() => setIsFetching(true),[])
  return (
    <DashBoard/>
  )
}
