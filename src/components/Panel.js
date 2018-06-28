import React from 'react';
import axios from 'axios';
import { Table } from '../components/Table';
import { GET_TRANSMITTERS_ENDPOINT } from '../api';
//import { GetTransmitters } from '../services/GetTransmitters';

export class Panel extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    getTransmitters = () => {
        /* this.setState({
            data: GetTransmitters()
        }) */
        axios.get(GET_TRANSMITTERS_ENDPOINT, 
            {
                "content-type": "application/json",
                "authorization": "Basic dXNlcjp1c2Vy"
            }
        )
        .then(response => {
            this.setState({
                data: response.data
            });
        })
        .catch(error => {
            alert(error.response);
        })
    }

    render() {
        return(
            <div>
                <div className='button__container'>
                    <button className='button' onClick={this.getTransmitters}>GET TRANSMITTERS</button>
                </div>
                <Table data={this.state.data}/>
            </div>
        );
    }
}