import classnames from "classnames"

export default function Badge({children, shape="square", color="grey"}) {

    const classNames = classnames("badge", shape, color && `${color}-b` )
    console.log(classNames)

    return (
        <div className={classNames}>
            {children}
        </div>
    )
}