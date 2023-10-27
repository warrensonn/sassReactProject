import camion from '../../assets/svg/Camion.svg'
import "./plaqueImatriculation.sass"

export function PlaqueImatriculation({ numberPlaque }) {
    return (
        <div className={"plaqueImatriculation"}>
            <div className={"plaqueImatriculation__left"}>
                <img src={camion} alt="un camion blanc" />
            </div>
            <div className={"plaqueImatriculation__right"}>
                <p>{numberPlaque}</p>
            </div>
        </div>
    )
}

