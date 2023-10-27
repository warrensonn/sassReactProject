import phone from "../../assets/svg/Phone.svg";
import './interventionItem.sass'

export function InterventionItem({ numberPhone, ville, address, textStatus, isEnable }) {
    const setpHandler = () => {
        console.log("test")
    }

    return (
        <div className="itemList">
            <div className="itemList__upZone">
                <div className="itemList__upZone__left">
                    <p>nom de societe</p>
                    <p>nom referant</p>
                </div>
                <div>
                    <a href={`tel:+33${numberPhone.substring(1)}`}><img src={phone} alt="image phone" /></a>
                </div>
            </div>
            {isEnable && (
                <div className="itemList__downZone">
                    <a className={"btn"} href={`https://www.waze.com/fr/live-map/directions/fr/idf/${ville}/${address}`}>Afficher destination</a>
                    <button className={'btn'} onClick={setpHandler}>{textStatus}</button>
                </div>
            )}
        </div>
    )
}

// https://www.waze.com/fr/live-map/directions/fr/idf/la-villeneuve-en-chevrie/13-rue-des-antilles