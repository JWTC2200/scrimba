import "./button.css"

export default function Button({children, styling="", click=()=>{}, classes=""}) {

    return (
        <div 
            className={`btns ${styling} ${classes}`}
            onClick={()=>click()}
        >
            {children}
        </div>
    )
}