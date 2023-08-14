import { HiOutlineCloudUpload } from "react-icons/Hi"
import "./card.css"

export default function Card({children, icon=<HiOutlineCloudUpload/>, title="Title here"}) {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-icon">{icon}</div>
                <div className="card-title">{title}</div>
                {children && <div>{children}</div>}
            </div>
        </div>
    )
}