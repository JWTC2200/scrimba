import { IoIosWarning } from "react-icons/Io"

export default function BannerSuccess({children, title="Title here"}) {
    return (
        <div className="banner warning">
            <div className="icon"><IoIosWarning/></div>
            <div className="banner-title">{title}</div>
            {children && <div className="content">{children}</div>}
        </div>
    )
}