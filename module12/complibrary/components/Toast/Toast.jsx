import { PiCheckCircle, PiWarningCircle, PiInfo, PiXCircle, PiQuestion } from "react-icons/pi"
import "./toast.css"


// valid style = "success" "warning" "info" "error"
// defaults to black and white

export default function Toast({children="Info here!", style="", title="Title here", onClose=()=>{}}) {

    const toastIcon = checkIcon()

    function checkIcon() {
        if(style === "success") {
            return <PiCheckCircle />
        }
        if(style === "warning") {
            return <PiWarningCircle />
        }
        if(style === "information") {
            return <PiInfo />
        }
        if(style === "error") {
            return <PiXCircle />
        } 
        else {
            return <PiQuestion />
        }
    }


    return (
        <div 
            className={`toast ${style && `toast-${style}`}`}
            onClick={onClose}
        >
            <div className="toast-icon">{toastIcon}</div>
            <div  className="toast-title">{title}</div>
            <div className="toast-text">{children}</div>
        </div>
    )
}