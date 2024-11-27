import React from 'react'

const layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className='container mx-auto max-w-5xl p-4 md:p-8 bg-white '>
            {children}
        </div>
    )
}

export default layout