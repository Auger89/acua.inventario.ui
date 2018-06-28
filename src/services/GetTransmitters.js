import react from 'react';
import { MOCK_ENDPOINT } from '../api';
import axios from 'axios';

export const GetTransmitters = () => {

    axios.get(MOCK_ENDPOINT)
        .then(response => {
            return response.data;
        })
}