import React from 'react';

type BackgroundImageProps = {
    backgroundImage?: string;
    children?: React.ReactNode; // To allow for nested content
};

const ServiceCardWithBackgroundImage: React.FC<BackgroundImageProps> = ({ backgroundImage = "farmer4.jpg", children }) => {
    return (
       <div className='relative rounded-3xl'>
         <div className="absolute inset-0 z-0 rounded-3xl"
            style={{
                backgroundImage: `url("/images/${backgroundImage}")`,
                // filter: 'contrast(101%) brightness(101%) saturate(2)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100%',
                minHeight: '100%',
                width: '100%',
                minWidth: '100%',
                position: 'absolute',
            }}>
            {children}
        </div>
       </div>
    );
};

export default ServiceCardWithBackgroundImage;