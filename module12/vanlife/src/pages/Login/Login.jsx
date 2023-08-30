import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Button from "../../components/Button/Button"
import "./login.css"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const redirectionMessage = useLocation().state

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>{redirectionMessage != null ? redirectionMessage : "Sign in to your account"}</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button><Button styling="simple on btn-full btn-tall">Log in</Button></button>
            </form>
        </div>
    )

}