import { InterventionItem } from "../../components/InterventionItem/interventionItem";
import { Header } from "../../components/header/header";
import { PlaqueImatriculation } from "../../components/plaqueImatriculation/plaqueImatriculation";
import { getItervention } from "../../service/inteventionService";
import "./listItervention.sass"
export function ListItervention() {
    const data = getItervention();

    return (
        <div className="container">
            <Header />
            <PlaqueImatriculation numberPlaque={"XX-XXX-XX"} />
            {data && data.map((value) => (<InterventionItem key={value.id} isEnable={value.isEnable} textStatus={value.textStatus} numberPhone={value.numberPhone} address={value.address} ville={value.ville} />))}
        </div>
    )
}