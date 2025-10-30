document.addEventListener("DOMContentLoaded", function() {
    const servicesRoot = document.getElementById('servicesRoot');
    if (!servicesRoot) return;

    const services = [
        {
            image: '../../Images/DSTV-image.jpg',
            title: 'DSTV Installation',
            description: 'DSTV installation and maintenance including dish alignment, signal testing, and troubleshooting.'
        },
        {
            image: '../../Images/CCTV-Image.png',
            title: 'CCTV Installation',
            description: 'CCTV installation and maintenance services for residential and commercial properties.'
        },
        {
            image: '../../Images/Alarm-Image.png',
            title: 'Alarm Installation',
            description: 'Alarm installation and monitoring services for residential and commercial properties.'
        },
        {
            image: '../../Images/Wifi-Image.png',
            title: 'Wifi Installation',
            description: 'Professional wifi installation and optimization services for homes and businesses.'
        },
        {
            image: '../../Images/Surround-Sound.png',
            title: 'Surround Sound Installation',
            description: 'Custom surround sound system installation for an immersive audio experience.'
        },
        {
            image: '../../Images/Smart-Home-Image.png',
            title: 'Smart Home Installation',
            description: 'Smart home device installation and integration for enhanced home automation.'
        }
    ];

    // Clear any existing content (optional)
    servicesRoot.innerHTML = '';

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'service-item';

        serviceDiv.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;

        servicesRoot.appendChild(serviceDiv);
    });
});
