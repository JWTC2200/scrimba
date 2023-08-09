
import { IoPersonSharp } from "react-icons/io5"
import classnames from "classnames"

/**
 * Challenge: Create a flexible Avatar component!
 * 
 * Check the slides for notes on how the component 
 * should be used.
 * 
 * Each of the 3 different avatars should have a 
 * wrapper div with the classes below:
 * 
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 * 
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 * 
 * Check the hints.md file if you are really stuck.
 * 
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */


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