document.addEventListener("DOMContentLoaded", function()
{

    (function(){
        const root = document.getElementById('nav-root');

        const nav = document.createElement('nav');
        nav.className = 'navbar';
        nav.setAttribute('aria-label','Main Navigation');

        const brand = document.createElement('a');
        brand.className = 'brand';
        brand.href = '#';

        // Use image from images/INSTALLATION.png as the brand logo
        const img = document.createElement('img');
        img.src = 'Images/INSTALLATIONS-2.png';
        img.alt = 'DMD INSTALLATIONS';
        img.className = 'logo';
        brand.appendChild(img);

        nav.appendChild(brand);

        const toggle = document.createElement('button');
        toggle.className = 'nav-toggle';
        toggle.type = 'button';
        toggle.setAttribute('aria-expanded','false');
        toggle.setAttribute('aria-label','Toggle navigation');
        toggle.innerHTML = '<span class="hamburger" aria-hidden="true"></span>';
        nav.appendChild(toggle);

        const ul = document.createElement('ul');
        ul.className = 'nav-list';

        const items = [
            { text: 'Home', href: '#' },
            { text: 'Services', href: '../Services-Page/Services.html' },
            { text: 'Projects', href: '#projects' },
            { text: 'About', href: '#about' },
            { text: 'Contact', href: '#contact' }
        ];

        items.forEach(it => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'nav-link';
            a.href = it.href;
            a.textContent = it.text;
            a.addEventListener('click', () => {
                toggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('open');
            });
            li.appendChild(a);
            ul.appendChild(li);
        });

        nav.appendChild(ul);
        root.appendChild(nav);

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
            nav.classList.toggle('open');
        });

        // basic active-link handling
        nav.addEventListener('click', (e) => {
            const link = e.target.closest('.nav-link');
            if (!link) return;
            nav.querySelectorAll('.nav-link').forEach(x => x.classList.remove('active'));
            link.classList.add('active');
        });
    })();

});
