import axios from 'axios';

// Configura la instancia de Axios
const instance = axios.create({
    baseURL: '/api', // Base URL para las solicitudes de la API
    timeout: 10000, // Tiempo de espera para las solicitudes (opcional)
    headers: {
        'Content-Type': 'application/json',
        // Otros headers globales si es necesario
    },
});

export default instance;
