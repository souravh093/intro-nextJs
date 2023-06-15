'use client'

import React from 'react';

const Template = ({children}) => {
    console.log("template layout")
    return (
        <div>
            {children}
        </div>
    );
};

export default Template;