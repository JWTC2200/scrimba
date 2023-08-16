import "./button.css"

export default function Button({children, styling="", onClick=()=>{}, classes=""}) {

    return (
        <div 
            className={`btns ${styling} ${classes}`}
            onClick={()=>onClick()}
        >
            {children}
        </div>
    )
}