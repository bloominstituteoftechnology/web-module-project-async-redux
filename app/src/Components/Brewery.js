import React from 'react';

const Brewery = (props) => {
    const { brewery } = props;

    return(<div class='brewery'>
        <h3>{brewery.name}</h3>
        <p>{brewery.city}</p>
        <p>Website:{brewery.website_url}</p>
    </div>);
}
export default Brewery;