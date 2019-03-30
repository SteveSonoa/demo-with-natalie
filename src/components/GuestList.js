import React from 'react';

export const GuestList = (props) => (
    <div className="list-title">
        <h1>My {props.eventTitle} Guests:</h1>
        <ul>
        {props.guests.map(
            guest => <li>{guest.firstName} {guest.lastName}</li>
        )}
        </ul>
    </div>
);

export default GuestList;
