import React from 'react';

function Avatar({person, size}) {
    const getImageUrl = 'https://i.imgur.com/'
    return (
        <img
            src={getImageUrl + person.imgeId + '.jpg'}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default Avatar;