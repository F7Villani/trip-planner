import { useState } from "react";
import AutocompleteTextField from "../AutocompleteTextField/AutocompleteTextField";

function ChooseTransport(){

    const [transport, setTransport] = useState('');

    const transports = ["Avião", "Carro", "Ônibus"];

    async function getTransports(searchTerm: string) : Promise<string[]> {
        return transports.filter((trasnport) => trasnport.indexOf(searchTerm) !== -1);
    }

    return(
        <>
            {<AutocompleteTextField<string> initialItem={""} onItemClick={setTransport} getItems={getTransports} delay={0} placeholder="Escolha seu meio de transporte" />}
            <p>{transport}</p>
        </>
    );
}

export default ChooseTransport;