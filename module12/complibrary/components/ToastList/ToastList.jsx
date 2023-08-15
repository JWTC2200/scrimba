import React from "react"
import Toast from "../Toast/Toast"
import "./toastlist.css"

export default function ToastList({data}) {
    const listRef = React.useRef(null)

    const sortedData = [...data].reverse()

    const toastElements = data.map((toast) => {
        return(
            <Toast
                key={toast.id}
                style={toast.style}
                title={toast.title}
                onClose={toast.remove}
            >
                {toast.text}
            </Toast>
        )
        
    })

    return (
        <div className="toast-list">
            {toastElements}
        </div>
    )

}