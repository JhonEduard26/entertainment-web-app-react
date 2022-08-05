import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SeeMoreButton = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/movies')
  }

  return (
    <button className='button' onClick={handleClick}>
      See more
    </button>
  )
}
