import React from 'react';

export class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }

    render() {
        return (
            <div className='button__container'>
                <button className='button'>GET TRANSMITTERS</button>
            </div>
        )
    }
}