import React from 'react'
import Badge from '../components/Badges/index'
import Banner from '../components/Banners/index'
import Card from '../components/Card/Card'
import Testimonial from '../components/Testimonial/Testimonial'
import testimage from "./images/testimage.jpg"
import TestimonialPlain from '../components/Testimonial/TestimonialPlain'
import { HiOutlineLibrary } from "react-icons/Hi"
import Tooltip from '../components/Tooltip/Tooltip'
import Toast from '../components/Toast/Toast'
import ToastList from '../components/ToastList/ToastList'


export default function App() {

  const [toasts, setToasts] = React.useState([])

  function removeToast(id) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id != id))
  }

  function addToast({title, style, text}) {
    const newId = Date.now()
    const toast = {
      id:newId,
      title,
      style, 
      text,
      remove: ()=> removeToast(newId)
    }
    setToasts((prevToasts) => [...prevToasts, toast])
  }

  return (
    <main>
      <div>
        <Tooltip title="Whereas" style="l-green">Whereas recognition of the inherent dignity</Tooltip> recognition of the inherent dignity
      </div>
      <br></br>
      <div className="app-row app-row--group">
        <button onClick={()=> {addToast({text: "Toast testing", style:"success", title:"hope this works"})
      }}>
          <Tooltip title="Show Success Toast" style="b-blue">Show Success Toast</Tooltip>
        </button>
        <button onClick={()=>addToast({text: "Toast testing", style:"error", title:"hope this works"})}>
          Show Error Toast
        </button>
        <button onClick={()=>addToast({text: "Toast testing", style:"warning", title:"hope this works"})}>
          Show Warning Toast
        </button>
        <button onClick={()=> setToasts([])}>Clear Toasts</button>
      </div>
      <ToastList
        data={toasts}
        removeToast={()=>console.log("i clicked")}
      ></ToastList>
    </main>
  )
}



// <Badge color="purple">Click me?</Badge>
// <Badge.Pill color="blue">Pill Badge</Badge.Pill>

// <Banner.Error title="Something bad happened">OH NO</Banner.Error>
// <Banner status="warning" title="Watch Out!"></Banner>

// <Card title="I'm a card">Look at me senpai!</Card>

// <TestimonialPlain 
//   name="John Smith" 
//   job="Workcation, CTO" 
//   banner="Workcation"
//   bannerIcon={<HiOutlineLibrary/>}
// > 
//   “Lorem ipsum 
//     <Tooltip 
//       title=" dolor "
//       style="b-green"
//     >Lorem ipsum dolor
//       sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis
//     </Tooltip> 
//   sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
// </TestimonialPlain>
// <Testimonial
//   name="John Smith"
//   job="Workcation, CTO"
//   image={testimage}
// >Lorem ipsum dolor 
//   <Tooltip 
//     title=" sit amet" 
//     style="l-green">
//     sit amet, consectetur adipiscing elit. Sed
//   </Tooltip>
//   , consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
// </Testimonial>
// <hr/>
// <hr/>
// <hr/>
// <hr/>