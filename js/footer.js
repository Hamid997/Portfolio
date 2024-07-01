export function setFooter(element) {
    element.innerHTML = `
    <div class="logo">
        <a href="/" class="logo">
            <h1 class="logo-name">AK</h1>
        </a>
    </div>
    <div class="menu-footer">
        <ul class="menu-list-footer">
            <li class="menu-item dropdown">
                <a href="/#skills" class="link-menu footer-link-menu">Skills</a>
            </li>
            <li class="menu-item dropdown">
                <a href="/#education" class="link-menu footer-link-menu">Education</a>
            </li>
            <li class="menu-item dropdown">
                <a href="/#Certifications" class="link-menu">Certifications</a>
            </li>
            <li class="menu-item dropdown">
                <a href="/#projects" class="link-menu footer-link-menu">Projects</a>
            </li>
            <li class="menu-item dropdown">
                <a href="/#contact" class="link-menu footer-link-menu">Contact</a>
            </li>
        </ul>
    </div>
    <div class="social-media-footer">
        <a href="https://www.linkedin.com/" target="_blank">
            <img src="/icon-linkedin.svg" alt="Linkedin">
        </a>
        <a href="https://www.github.com/" target="_blank">
            <img src="/icon-github.svg" alt="Github">
        </a>
        <a href="https://www.twitter.com/" target="_blank">
            <img src="/icon-twitter.svg" alt="Twitter">
        </a>
        <a href="https://www.frontendmentor.io/" target="_blank">
            <img src="/icon-frontend-mentor.svg" alt="FrontEnd mentor">
        </a>
        <a href="https://www.instagram.com/" target="_blank">
            <img src="/icon-instagram.svg" alt="FrontEnd mentor">
        </a>
        <a href="https://www.facebook.com/" target="_blank">
            <img src="/icon-facebook.svg" alt="FrontEnd mentor">
        </a>
    </div>
    `;
}




// export function setFooter(element) {
//     // Create the main div
//     const footerDiv = document.createElement('div');

//     // Create the logo
//     const logo = document.createElement('div');
//     logo.classList.add('logo');

//     const logoLink = document.createElement('a');
//     logoLink.href = '/';
//     logoLink.classList.add('logo');

//     const logoName = document.createElement('h1');
//     logoName.classList.add('logo-name');
//     logoName.textContent = 'AK';

//     logoLink.appendChild(logoName);
//     logo.appendChild(logoLink);

//     // Create the menu
//     const menuFooter = document.createElement('div');
//     menuFooter.classList.add('menu-footer');

//     const menuListFooter = document.createElement('ul');
//     menuListFooter.classList.add('menu-list-footer');

//     const menuItemsFooter = [
//         { text: 'Skills', href: '/#skills' },
//         { text: 'Education', href: '/#education' },
//         { text: 'Projects', href: '/#projects' },
//         { text: 'Contact', href: '/#contact' },
//     ];

//     menuItemsFooter.forEach(item => {
//         const menuItem = document.createElement('li');
//         menuItem.classList.add('menu-item', 'dropdown');

//         const menuLink = document.createElement('a');
//         menuLink.href = item.href;
//         menuLink.classList.add('link-menu', 'footer-link-menu');
//         menuLink.textContent = item.text;

//         menuItem.appendChild(menuLink);
//         menuListFooter.appendChild(menuItem);
//     });

//     menuFooter.appendChild(menuListFooter);

//     // Create the social media links
//     const socialMediaFooter = document.createElement('div');
//     socialMediaFooter.classList.add('social-media-footer');

//     const socialMediaLinks = [
//         { href: 'https://www.linkedin.com/', iconSrc: '/icon-linkedin.svg', alt: 'Linkedin' },
//         { href: 'https://www.github.com/', iconSrc: '/icon-github.svg', alt: 'Github' },
//         { href: 'https://www.twitter.com/', iconSrc: '/icon-twitter.svg', alt: 'Twitter' },
//         { href: 'https://www.frontendmentor.io/', iconSrc: '/icon-frontend-mentor.svg', alt: 'FrontEnd mentor' },
//         { href: 'https://www.instagram.com/', iconSrc: '/icon-instagram.svg', alt: 'Instagram' },
//         { href: 'https://www.facebook.com/', iconSrc: '/icon-facebook.svg', alt: 'Facebook' },
//     ];

//     socialMediaLinks.forEach(link => {
//         const socialMediaLink = document.createElement('a');
//         socialMediaLink.href = link.href;
//         socialMediaLink.target = '_blank';

//         const icon = document.createElement('img');
//         icon.src = link.iconSrc;
//         icon.alt = link.alt;

//         socialMediaLink.appendChild(icon);
//         socialMediaFooter.appendChild(socialMediaLink);
//     });

//     // Append elements to the main div
//     footerDiv.appendChild(logo);
//     footerDiv.appendChild(menuFooter);
//     footerDiv.appendChild(socialMediaFooter);

//     // Append the main div to the provided element
//     element.appendChild(footerDiv);
// }

// // Usage: Call setFooter and pass in the element where you want to create the footer.
// // For example:
// // setFooter(document.getElementById('footer-container'));
