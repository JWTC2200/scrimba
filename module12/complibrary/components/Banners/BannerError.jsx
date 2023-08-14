import { IoIosCloseCircle } from "react-icons/Io"
import "./banner.css"

export default function BannerSuccess({children, title="Title here"}) {
    return (
        <div className="banner error">
            <div className="icon"><IoIosCloseCircle/></div>
            <div className="banner-title">{title}</div>
            {children && <div className="content">{children}</div>}
        </div>
    )
}