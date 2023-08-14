import { AiFillCheckCircle} from "react-icons/ai"
import { IoIosWarning, IoIosCloseCircle } from "react-icons/Io"
import  { HiInformationCircle } from "react-icons/Hi"
import "./banner.css"

export default function Banner({children, status="neutral", title="Title here" }) {

    const bannerIcon = iconCheck()
    
    function iconCheck() {
        if(status === "success") {
            return <AiFillCheckCircle/>
        }
        if(status === "warning") {
            return <IoIosWarning/>
        }
        if(status === "error") {
            return <IoIosCloseCircle/>
        }
        if(status === "neutral") {
            return <HiInformationCircle/>
        }
    }

    return (
        <div className={`banner ${status}`}>
            <div className="icon">{bannerIcon}</div>            
            <div className="banner-title">{title}</div>
            {children && <div className="content">{children}</div>}
        </div>                
    )
}



