 export function setHeader(element) {
     element.innerHTML = `
     <div class="nav-bar">
       <div class="logo">
         <a href="/" class="logo">
           <h1 class="logo-name">AK</h1>
         </a>
       </div>

       <div class="menu">
         <ul class="menu-list">
           <li class="menu-item dropdown">
             <a href="/#skills" class="link-menu">Skills</a>
           </li>
           <li class="menu-item dropdown">
             <a href="/#projects" class="link-menu">Projects</a>
           </li>
           <li class="menu-item dropdown">
             <a href="/#education" class="link-menu">Education</a>
           </li>
           <li class="menu-item dropdown">
             <a href="/#Certifications" class="link-menu">Certifications</a>
           </li>
           <li class="menu-item dropdown">
             <a href="/#contact" class="link-menu">Contact</a>
           </li>
         </ul>
       </div>

       <div class="menu-hamburger">
          <a id="menuBtn" class="menu-hamburger" aria-expanded="false" aria-controls="menu">
            <img class="menu-hamburger-img" id="hamburger" src="/icon-hamburger.svg" alt="menu-mobile">
          </a>
       </div>

      </div>
       <div class="menu-mobile">
        <ul class="menu-list">
          <li class="menu-item dropdown">
            <a href="/#skills" class="link-menu">Skills</a>
          </li>
          <li class="menu-item dropdown">
            <a href="/#projects" class="link-menu">Projects</a>
          </li>
          <li class="menu-item dropdown">
            <a href="/#education" class="link-menu">Education</a>
          </li>
          <li class="menu-item dropdown">
            <a href="/#Certifications" class="link-menu">Certifications</a>
          </li>
          <li class="menu-item dropdown">
            <a href="/#contact" class="link-menu">Contact</a>
          </li>
        </ul>
       </div>
     `;
 }

 document.addEventListener('DOMContentLoaded', function () {
  const menuLogo = document.querySelector('.menu-hamburger');
  const menuNavs = document.querySelector('.menu-mobile');
  const menuIcon = menuLogo.querySelector('.menu-hamburger-img');

  menuLogo.addEventListener('click', () => {
      if (menuIcon.src.includes('icon-hamburger')) {
        menuIcon.src = '/icon-close.svg';
      } else {
        menuIcon.src = '/icon-hamburger.svg';
      }
    });

  menuLogo.addEventListener('click', function () {
      menuNavs.classList.toggle('visible');
  });
});





// export function setHeader(element) {
//   // Create the logo element
//   const logo = document.createElement('div');
//   logo.classList.add('logo');

//   const logoLink = document.createElement('a');
//   logoLink.href = '/';
//   logoLink.classList.add('logo');

//   const logoName = document.createElement('h1');
//   logoName.classList.add('logo-name');
//   logoName.textContent = 'AK';

//   logoLink.appendChild(logoName);
//   logo.appendChild(logoLink);

//   // Create the menu element
//   const menu = document.createElement('div');
//   menu.classList.add('menu');

//   const menuList = document.createElement('ul');
//   menuList.classList.add('menu-list');

//   const menuItems = [
//       { text: 'Skills', href: '/#skills' },
//       { text: 'Education', href: '/#education' },
//       { text: 'Projects', href: '/#projects' },
//       { text: 'Contact', href: '/#contact' },
//   ];

//   menuItems.forEach(item => {
//       const menuItem = document.createElement('li');
//       menuItem.classList.add('menu-item', 'dropdown');

//       const menuLink = document.createElement('a');
//       menuLink.href = item.href;
//       menuLink.classList.add('link-menu');
//       menuLink.textContent = item.text;

//       menuItem.appendChild(menuLink);
//       menuList.appendChild(menuItem);
//   });

//   menu.appendChild(menuList);

//   // Append logo and menu to the provided element
//   element.appendChild(logo);
//   element.appendChild(menu);
// }

// Usage: Call setHeader and pass in the element where you want to create the header.
// For example:
// setHeader(document.getElementById('header-container'));
