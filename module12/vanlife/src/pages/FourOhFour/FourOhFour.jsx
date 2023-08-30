import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import "./fourohfour.css"


export default function FourOhFour() {
    return (
        <div className="fourohfour-container">
            <h1>Sorry, the page you were looking for was not found</h1>
            <Link to="/">
                <Button
                    styling="black on"
                    classes="btn-full btn-tall"
                >
                    Return to home
                </Button>
            </Link>
        </div>
    )
}