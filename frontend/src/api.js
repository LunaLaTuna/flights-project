import axios from 'axios'

const VuelosApi = axios.create({
    baseURL: "http://localhost:8000/vuelos/api/"
})


export const flights = () => VuelosApi.get('/')

export const reservationsDepartureCity = (departure_city) => VuelosApi.get(`/reservaciones/?departure_city=${departure_city}`)

export const reservationsArrivalCity = (arrival_city) => VuelosApi.get(`/reservaciones/?arrival_city=${arrival_city}`)

export const busquedaCompleta = (departure_city, arrival_city , comeback_date) => VuelosApi.get(`/reservaciones/?departure_city=${departure_city}&arrival_city=${arrival_city}&comeback_date=${comeback_date}`)

export const busquedaCompleta2 = (departure_city, arrival_city , departure_date, comeback_date, ) => VuelosApi.get(`/reservaciones/?departure_city=${departure_city}&arrival_city=${arrival_city}&departure_date=${departure_date}&comeback_date=${comeback_date}`)