import { RiDoubleQuotesL } from "react-icons/Ri"
import "./testimonial.css"

export default function Testimonial({children, image="", name="Name here", job="Job title here"}) {

    return (
        <div className="testimonial-container">
            <div className="testimonial-inner">
                <img src={image} className="testimonial-image"></img>
                <div className="test-quote"><RiDoubleQuotesL/></div>
                {children && <div className="testimonial-text">{children}</div>}
                <div className="testimonial-name">{name}</div>
                <div className="testimonial-job">{job}</div>
            </div>
        </div>
    )
}