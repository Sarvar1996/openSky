import {useEffect, useState} from "react";
import axios from "axios";
import {IProps} from "../../interfaces/interfaces";

const FlightStats = ({airportCode, begin, end, type}: IProps) => {
    const [arriving, setArriving] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const {data: arrivals} = await axios(`/flights/${type}?airport=${airportCode}&begin=${begin}&end=${end}`);
            setArriving(arrivals.length);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [airportCode]);
    return loading ? <span aria-busy="true"></span> : <span>{arriving}</span>;
}

export default FlightStats;