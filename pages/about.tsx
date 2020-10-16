import React from 'react'
import { NextPage } from 'next'

import { AboutDetailed, ShortIntro } from '@portfolio/components'

const About: NextPage = () => {
  return (
    <>
      <ShortIntro />
      <AboutDetailed />
    </>
  )
}

export default About
