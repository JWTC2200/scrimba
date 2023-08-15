import "./footer.css"
import { AiOutlineCopyright } from "react-icons/ai"

export default function Footer() {
    return (
        <div className="footer-container">
            <AiOutlineCopyright
                className="footer-icon"
            />
            <p>&nbsp;2022 #VANLIFE</p>
        </div>
    )
}