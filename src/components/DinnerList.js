import React from 'react';

export const DinnerList = (props) => (
    <div className="dinnerlist-title">
        <h1>My Dinner Guests:</h1>
        <ul>
        {props.guests.map(
            guest => <li>{guest.firstName} {guest.lastName}</li>
        )}
        </ul>
    </div>
);

export default DinnerList;
