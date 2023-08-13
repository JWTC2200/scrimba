import classnames from "classnames"

export default function BadgePill({children, color="grey"}) {

    const classNames = classnames("badge pill", color && `${color}-b` )

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}