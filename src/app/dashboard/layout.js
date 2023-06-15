import React from 'react';
import Sidebar from './Sidebar';


export const metadata = {
    title: "Next Try || dashboard",
    description: "description",
  };

const DashboardLayout = ({children}) => {
    return (
        <div className='flex container mx-auto'>
            <Sidebar />
            {children}
        </div>
    );
};

export default DashboardLayout;