import { InputLogin } from "../../components/inputLogin/inputLogin";
import { SubmitLoginButton } from "../../components/submitLoginButton/submitLoginButton";
import logo from '../../assets/image/Logo.png'
import "./login.sass"
import useForm from "../../hook/useForm";
import { login } from "../../service/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const { data, errors, hangleChange } = useForm({ identifiant: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submitLoginHandeler = (e) => {
        e.preventDefault()

        const test = Object.values(errors).join("")

        if (test != "") {
            return;
        }

        login(data).then((value) => {
            if (value.tokken) {
                navigate("/listIntervention");
            } else {
                setError(value.code)
            }
        }).catch((err) => {
            console.warn(err)
        })
    }

    return (
        <form action="" onSubmit={submitLoginHandeler} className={"loginPage"}>
            <div>
                <img src={logo} height={105} alt="Logo de votre marque" />
            </div>
            <div>
                <InputLogin type={"text"} placeholder={"Identifiant"} id={"identifiant"} name={"username"} onChange={hangleChange} />
                <div><p>{errors.username}</p></div>
                <InputLogin type={"password"} placeholder={"Mot de passe"} id={"password"} name={"password"} onChange={hangleChange} />
                <div><p>{errors.password}</p></div>
            </div>
            <SubmitLoginButton />
            {<div><p>{error}</p></div>}
        </form>
    );
}
