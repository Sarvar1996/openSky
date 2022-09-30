import React, {useEffect, useState} from 'react';
import './Dashboard.css';
import axios from "axios";
import FlightStats from "./FlightStats";
import dayjs from 'dayjs'
import { FlightInterface } from "../../interfaces/interfaces";

const DAY_IN_SECONDS = 60 * 60 * 24;
const HOUR_IN_SECONDS = 60 * 60 * 2;

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const begin = Math.floor(Date.now() / 1000) - 3 * DAY_IN_SECONDS
    const end = begin + HOUR_IN_SECONDS;
    const [flights, setFlights] = useState<FlightInterface[]>([]);

    const fetchAllFlights = async () => {
        try {
            setLoading(true)
            const {data: flights} = await axios(`/flights/all?begin=${begin}&end=${end}`);
            setFlights(flights.filter((flight: FlightInterface) => flight.estDepartureAirport));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllFlights();
    }, []);

    const flightRows = flights.slice(0, 10).map((flight: FlightInterface, index) => (
        <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{flight.estDepartureAirport}</td>
            <td>{dayjs(begin * 1000).format('H:mm A Z')}</td>
            <td>
                <FlightStats airportCode={flight.estDepartureAirport} begin={begin} end={end} type={'arrival'}/>
            </td>
            <td>
                <FlightStats airportCode={flight.estDepartureAirport} begin={begin} end={end} type={'departure'}/>
            </td>
        </tr>
    ));

    return (
        loading ? (<span aria-busy='true'>Loading...</span>) : <article>
            <table>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Airport</th>
                    <th scope="col">Time</th>
                    <th scope="col">Arriving</th>
                    <th scope="col">Departing</th>
                </tr>
                </thead>
                <tbody>
                {flightRows}
                </tbody>
            </table>
        </article>
    );
}

export default Dashboard;
