import { MdOutlineInbox } from "react-icons/Md"
import { RxCross2 } from "react-icons/Rx"
import './tooltip.css'

// tooltip styles
// bold "" (black), b-blue, b-purple, b-green
// light l-white, l-blue, l-purple, l-green

export default function Tooltip({children, title="text here", style=""}) {
    return (
        <span className="tooltip">
             {title}
            <span className={`tooltip-box ${style}`}>
                <div className="tooltip-icon"><MdOutlineInbox/></div>
                <div className="tooltip-title">{title}</div>
                <div className="tooltip-close"><RxCross2/></div>
                <div className="tooltip-text">{children}</div>
            </span>
        </span>
    )

}
