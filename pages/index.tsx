import React from 'react'
import { NextPage } from 'next'
import { AboutTeaser, ContactSection, HomeLanding, ServiceTeaser } from '../components'

const Homepage: NextPage = () => (
  <>
    <HomeLanding />
    <AboutTeaser />
    <ServiceTeaser withButton />
    <ContactSection />
  </>
)

export default Homepage
