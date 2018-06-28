import React from 'react';
import { HelloWorld } from '../components/HelloWorld';
import { Panel } from '../components/Panel';

export class GestionConcentradores extends React.Component {
    render() {
        return(
            <div>
                <HelloWorld text="Transmitter Manager" />
                <Panel />
            </div>
        );
    }
}