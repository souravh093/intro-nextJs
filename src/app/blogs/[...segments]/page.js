import React from 'react';

const SinglePage = ({params}) => {
    const [year, id] = params.segments || []
    return (
        <div>
            this blog publish on {year} at {id}         
        </div>
    );
};

export default SinglePage;