import { useState } from 'react'
import Badge from '../components/Badges/index'
import Banner from '../components/Banners/index'
import Card from '../components/Card/Card'
import Testimonial from '../components/Testimonial/Testimonial'
import testimage from "./images/testimage.jpg"
import TestimonialPlain from '../components/Testimonial/TestimonialPlain'
import { HiOutlineLibrary } from "react-icons/Hi"
import BadgePill from '../components/Badges/BadgePill'
import Tooltip from '../components/Tooltip/Tooltip'

export default function App() {
  return (
    <main>
      <Badge color="purple">Click me?</Badge>
      <Badge.Pill color="blue">Pill Badge</Badge.Pill>

      <Banner.Error title="Something bad happened">OH NO</Banner.Error>
      <Banner status="warning" title="Watch Out!"></Banner>

      <Card title="I'm a card">Look at me senpai!</Card>

      <TestimonialPlain 
        name="John Smith" 
        job="Workcation, CTO" 
        banner="Workcation"
        bannerIcon={<HiOutlineLibrary/>}
      > 
        “Lorem ipsum 
          <Tooltip 
            title=" dolor "
            style="b-green"
          >Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis
          </Tooltip> 
        sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
      </TestimonialPlain>
      <Testimonial
        name="John Smith"
        job="Workcation, CTO"
        image={testimage}
      >Lorem ipsum dolor 
        <Tooltip 
          title=" sit amet" 
          style="l-green">
          sit amet, consectetur adipiscing elit. Sed
        </Tooltip>
        , consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </Testimonial>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      <div onClick={() => <Tooltip style="b-blue" title="test">OKIEDOKE</Tooltip>}>
        TESTING
      </div>

    </main>

    
  )
}

