import { useState } from "react";
import ComboBox from "../ComboBox/ComboBox";

interface ChooseTransportProps {
    sendTransport: (string) => void;
}

function ChooseTransport({sendTransport}: ChooseTransportProps){

    const [transport, setTransport] = useState('');

    const transports = ["Avião", "Carro", "Ônibus"];

    function handleItemClick(transport : string){
        setTransport(transport);
        sendTransport(transport);
    }

    return(
        <>
            <ComboBox<string> initialItem={""} onItemClick={handleItemClick} items={transports} placeholder="Escolha seu meio de transporte" />
            <p>{transport}</p>
        </>
    );
}

export default ChooseTransport;