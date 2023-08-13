import classnames from "classnames"

export default function BadgeSquare({children, color="grey"}) {

    const classNames = classnames("badge square", color && `${color}-b` )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}