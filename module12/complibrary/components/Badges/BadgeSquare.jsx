import classnames from "classnames"
import "./badge.css"

export default function BadgeSquare({children, color="grey"}) {

    const classNames = classnames("badge square", color && `${color}-b` )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}