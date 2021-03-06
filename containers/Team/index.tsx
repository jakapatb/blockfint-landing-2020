import { ContactBanner } from 'components/ContactBanner'
import { TeamLead } from './components/teamLead'
import styled from 'styled-components'
import { Slider } from 'components/Slider'
import React from 'react'

const Footer = styled.div`
  overflow: hidden;
`
export const Team: React.FC = () => {
  return (
    <>
      <TeamLead />
      <Footer>
        <Slider sectionName="Our Team" images={images} description={description} />
      </Footer>
      <ContactBanner />
    </>
  )
}
const images = [
  '/images/Blockfint-Outing.jpg',
  '/images/Daily-stand-up.jpg',
  '/images/Developer-consulting.jpg',
  '/images/Focusing-work.jpg',
  '/images/Townhall.jpg',
  '/images/Trained-national-coach.jpg'
]
const description = [
  'Blockfint Outing',
  'Company Meeting',
  'Brain Storming',
  'Coding',
  'Townhall',
  'Play time'
]
