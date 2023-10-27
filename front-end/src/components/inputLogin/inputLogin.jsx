import './inputLogin.sass'

export const InputLogin = ({ name, ...rest }) => {
    return (
        <div className={"inputLogin"}>
            <input className={`inputLogin__${name}`} name={name} {...rest} />
        </div>
    )
}
