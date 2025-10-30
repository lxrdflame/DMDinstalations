document.addEventListener("DOMContentLoaded", function() {
    const servicesContainer = document.createElement('div');
    servicesContainer.className = 'services-container';

    const services = [
        {
            image: '../images/service1.jpg',
            title: 'Service 1',
            description: 'Description of service 1'
        },
        {
            image: '../images/service2.jpg',
            title: 'Service 2',
            description: 'Description of service 2'
        },
        {
            image: '../images/service3.jpg',
            title: 'Service 3',
            description: 'Description of service 3'
        }
    ];

    services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'service-item';

        serviceDiv.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;

        servicesContainer.appendChild(serviceDiv);
    });

    const servicesPageContent = document.querySelector('.services-page-content');
    if (servicesPageContent) {
        servicesPageContent.appendChild(servicesContainer);
    }
});