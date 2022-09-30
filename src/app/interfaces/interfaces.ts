export interface FlightInterface {
    arrivalAirportCandidatesCount: number;
    callsign: string;
    departureAirportCandidatesCount: number;
    estArrivalAirport: string;
    estArrivalAirportHorizDistance: number;
    estArrivalAirportVertDistance: number;
    estDepartureAirport: string;
    estDepartureAirportHorizDistance: number;
    estDepartureAirportVertDistance: number;
    firstSeen: number;
    icao24: string;
    lastSeen: number;
}

export interface IProps {
    airportCode: string;
    begin: number;
    end: number;
    type: string;
}