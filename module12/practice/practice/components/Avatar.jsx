
import { IoPersonSharp } from "react-icons/io5"
import classnames from "classnames"

export default function Avatar({src, alt, children, ...rest}) {

    let text = children && "avatar-letters"
    let color = ["navy", "pink", "red", "blue", "green"][Math.floor(Math.random() * 5)]

    const classNames = classnames("avatar", text, color)

    return (
        <div className={classNames}>
            {src && <img src={src} alt={alt}></img>}
            {children}
            {(!children && !src) && <IoPersonSharp />}

        </div>
    )
}