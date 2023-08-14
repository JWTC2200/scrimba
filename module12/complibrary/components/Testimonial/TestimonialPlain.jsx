import "./testimonial.css"

export default function TestimonialPlain({children, name="Name here", job="Job title here", banner="", bannerIcon}) {
    return (
        <div className="testimonial-plain">
            {banner && <div className="testimonial-banner">{bannerIcon}{banner}</div>}
            {children && <div className="testimonial-text">{children}</div>}
            <div className="testimonial-name">{name}</div>
            <div className="testimonial-job">{job}</div>            
        </div>
    )
}