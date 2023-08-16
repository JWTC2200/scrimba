import "./footer.css"
import { AiOutlineCopyright, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

export default function Footer() {
    return (
        <div className="footer-container">
            <p style={{display: "flex", alignItems:"center"}}>
                <AiOutlineCopyright className="footer-icon"/>
                &nbsp;2023 #VANLIFE
            </p>
            <p style={{textAlign:"center"}}>Made by JWTC2200 for Scrimba front end developer path</p>
            <a 
                href="https://github.com/JWTC2200/scrimba/tree/main/module12/vanlife"
            >
                <AiOutlineArrowRight />
                &nbsp; Link to Github repository &nbsp; 
                <AiOutlineArrowLeft />
            </a>
        </div>
    )
}