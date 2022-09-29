import {useEffect, useState} from "react";
import axios from "axios";
import { IProps } from "../../interfaces/interfaces";

const Arriving = ({airportCode, begin, end}: IProps) => {
    const [arriving, setArriving] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchArrivingFlights = async () => {
        try {
            setLoading(true);
            const {data: arrivals} = await axios(`/flights/arrival?airport=${airportCode}&begin=${begin}&end=${end}`);
            setArriving(arrivals.length);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchArrivingFlights();
    }, [airportCode]);
    return loading ? <span aria-busy="true"></span> : <span>{arriving}</span>;
}

export default Arriving;