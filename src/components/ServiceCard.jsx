import { useEffect } from 'react';
import { serviceData } from '../productData/serviceData';

const ServiceCard = ({ iconName, title, subtitle, bgColor }) => {
    return (
        <div
            className="flex flex-col items-center p-6 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            style={{ backgroundColor: bgColor }}
        >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <ion-icon name={iconName} class="text-3xl text-gray-700"></ion-icon>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-center">{subtitle}</p>
        </div>
    );
};

const ServiceCards = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-6xl w-full text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {serviceData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            iconName={service.icon}
                            title={service.title}
                            subtitle={service.subtitle}
                            bgColor={service.bg}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;
