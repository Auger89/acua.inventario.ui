import React from 'react';

export class Table extends React.Component {

    /* shouldComponentUpdate(nextProps) {
        return this.props.data !== nextProps.data;
    } */
    
    renderRows = () => {
        if (this.props.data !== undefined) {
            const transmitters = this.props.data;
            return transmitters.map((transmitter) => {

                return (
                    <tr key={transmitter.id}>
                        <td>{transmitter.transmitterId}</td>
                        <td>{transmitter.alias}</td>
                        <td>{transmitter.status}</td>
                        <td>{transmitter.sim.simId}</td>
                        <td>{transmitter.sim.simStatus}</td>
                        <td>{transmitter.modem.modemId}</td>
                        <td>{transmitter.modem.modemStatus}</td>
                    </tr>
                );
            });
        }
    }

    renderHeader = () => {
        return (
            <tr>
                <th scope="col">Transmitter ID</th>
                <th scope="col">Alias</th>
                <th scope="col">Status</th>
                <th scope="col">SIM ID</th>
                <th scope="col">SIM Status</th>
                <th scope="col">Modem ID</th>
                <th scope="col">Modem Status</th>
            </tr>
        );
    }

    renderRowsOldImplementation = () => {
        if (this.props.data !== undefined) {
            const transmitters = this.props.data.transmitters;
            return transmitters.map((transmitter) => {

                return (
                    <tr key={transmitter.id}>
                        <td>{transmitter.transmitterSerialNumber}</td>
                        <td>{transmitter.modemSerialNumber}</td>
                        <td>{transmitter.softwareVersion}</td>
                        <td>{transmitter.simId}</td>
                        <td>{transmitter.ip}</td>
                        <td>{transmitter.icc}</td>
                        <td>{transmitter.company}</td>
                        <td>{transmitter.installationDate}</td>
                    </tr>
                );
            });
        }
    }

    renderHeaderOldImplementation = () => {
        return (
            <tr>
                <th scope="col">Transmitter ID</th>
                <th scope="col">Modem</th>
                <th scope="col">Software</th>
                <th scope="col">SIM</th>
                <th scope="col">IP</th>
                <th scope="col">ICC</th>
                <th scope="col">Company</th>
                <th scope="col">Date</th>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    {this.renderHeader()}
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}