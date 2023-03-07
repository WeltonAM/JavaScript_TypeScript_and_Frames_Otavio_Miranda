import React from 'react'
import { useLocation } from 'react-router-dom'

type Props = {}

const About = (props: Props) => {

  const { state } = useLocation();

  return (
    <div>
      <h1>About</h1>

      <p>{state as string}</p>

    </div>
  )
}

export default About