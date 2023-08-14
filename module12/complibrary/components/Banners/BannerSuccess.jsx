import { AiFillCheckCircle} from "react-icons/ai"
import "./banner.css"

export default function BannerSuccess({children, title="Title here"}) {
    return (
        <div className="banner success">
            <div className="icon"><AiFillCheckCircle/></div>
            <div className="banner-title">{title}</div>
            {children && <div className="content">{children}</div>}
        </div>
    )
}