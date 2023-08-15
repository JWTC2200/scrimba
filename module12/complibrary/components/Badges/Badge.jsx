import classnames from "classnames"
import "./badge.css"

export default function Badge({children, shape="square", color="grey"}) {

    const classNames = classnames("badge", shape, color && `${color}-b` )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}