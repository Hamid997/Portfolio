// import './styles/styles.css'
// import { setHeader } from './header'
// import { setFooter } from './footer'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <header class="header" id="header">
//     </header>
//     <main>
//       <section class="projects component-box" id="projects">
//       </section>
//     </main>
//     <footer class="footer" id="footer">
//     </footer>
//   </div>
// `

// export function setProjects(element) {
//   element.innerHTML = `
//   <div class="projects-container">
//       <h2 class="heading">Projects</h2>
//       <div id="projects-list" class="projects-list">
//       </div>
//   </div>
//  `;

//  // JavaScript for dynamically adding project information
//  const projectsList = document.getElementById('projects-list');

//  // Define an array of project details
//  const projectsData = [
//      {
//          imageUrl: '/Advice-generator-app.jpg',
//          title: 'Advice generator app',
//          demoLink: 'https://advice-generator-app-ten-omega.vercel.app/',
//          repoLink: 'https://github.com/Hamid997/Advice-generator-app',
//          techInfo: 'Tech Stack: React, Axios, CSS and Vite',
//      },
//      {
//          imageUrl: '/REST-Countries-API-with-color-theme-switcher.jpg',
//          title: 'REST Countries API with color theme switcher',
//          demoLink: 'https://rest-countries-api-with-color-theme-switcher-dun-six.vercel.app/',
//          repoLink: 'https://github.com/Hamid997/REST-Countries-API-with-color-theme-switcher',
//          techInfo: 'Tech Stack: Vite, React, CSS & JSON',
//      },
//      {
//          imageUrl: '/IP-Address-Tracker.jpg',
//          title: 'IP Address Tracker',
//          demoLink: 'https://ip-address-tracker-dusky-six.vercel.app/',
//          repoLink: 'https://github.com/Hamid997/IP-Address-Tracker',
//          techInfo: 'Tech Stack: React, Axios, Leaflet js, Vite and CSS',
//      },
//      {
//          imageUrl: '/URL-shortening-API-landing-page.jpg',
//          title: 'URL shortening API landing page',
//          demoLink: 'https://url-shortening-api-landing-page-theta.vercel.app/',
//           repoLink: 'https://github.com/Hamid997/URL-shortening-API-landing-page',
//           techInfo: 'Tech Stack: React, Vite and CSS',
//       },
//       {
//           imageUrl: '/Insure-landing-page.jpg',
//           title: 'Insure landing page',
//           demoLink: 'https://hamid997.github.io/Insure-landing-page/',
//           repoLink: 'https://github.com/Hamid997/Insure-landing-page',
//           techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//       },
//       {
//           imageUrl: '/Blogr-landing-page.jpg',
//           title: 'Blogr landing page',
//           demoLink: 'https://hamid997.github.io/Blogr-landing-page/',
//           repoLink: 'https://github.com/Hamid997/Blogr-landing-page/',
//           techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//       },
//       {
//           imageUrl: '/Sunnyside-agency-landing-page.jpg',
//           title: 'Sunnyside agency landing page',
//           demoLink: 'https://hamid997.github.io/Sunnyside-agency-landing-page/',
//           repoLink: 'https://github.com/Hamid997/Sunnyside-agency-landing-page',
//           techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//       },
//       {
//           imageUrl: '/Clipboard-landing-page.jpg',
//           title: 'Clipboard landing page',
//           demoLink: 'https://hamid997.github.io/Clipboard-landing-page/',
//           repoLink: 'https://github.com/Hamid997/Clipboard-landing-page',
//           techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//       }
//       // Add more project details as needed
//   ];

//  // Function to generate the projects list
//  function generateProjectsList() {
//      projectsData.forEach(projectData => {
//          const projectItem = document.createElement('div');
//          projectItem.classList.add('project-item');

//          const projectImage = document.createElement('img');
//          projectImage.classList.add('project-image');
//          projectImage.src = projectData.imageUrl;

//          const projectTitle = document.createElement('h3');
//          projectTitle.classList.add('project-title');
//          projectTitle.textContent = projectData.title;

//          const projectLinks = document.createElement('div');
//          projectLinks.classList.add('project-links');

//         const demoLink = document.createElement('a');
//         demoLink.classList.add('project-link');
//         demoLink.href = projectData.demoLink;
//         demoLink.textContent = 'Demo';
//         demoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//         const repoLink = document.createElement('a');
//         repoLink.classList.add('project-link');
//         repoLink.href = projectData.repoLink;
//         repoLink.textContent = 'GitHub Repo';
//         repoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//          projectLinks.appendChild(demoLink);
//          projectLinks.appendChild(repoLink);

//          const techInfo = document.createElement('p');
//          techInfo.classList.add('project-tech-info');
//          techInfo.textContent = projectData.techInfo;

//          projectItem.appendChild(projectImage);
//          projectItem.appendChild(projectTitle);
//          projectItem.appendChild(projectLinks);
//          projectItem.appendChild(techInfo);

//          projectsList.appendChild(projectItem);
//      });
//  }

//  // Call the function to generate the projects list
//  generateProjectsList();
// }

// setHeader(document.querySelector('#header'))
// setProjects(document.querySelector('#projects'))
// setFooter(document.querySelector('#footer'))






import { setHeader } from './header';
import { setFooter } from './footer';

export function setProjectsPage(element) {
    element.innerHTML = `
        <div>
            <header class="header" id="header"></header>
            <main>
                <section class="projects component-box" id="projects">
                </section>
            </main>
            <footer class="footer" id="footer"></footer>
        </div>
    `;

    const header = document.querySelector('#header');
    const projects = document.querySelector('#projects');
    const footer = document.querySelector('#footer');

    setHeader(header);
    // You can add the content specific to the projects page here
    // For example, you can call a function to set the projects content
    setProjectsContent(projects);
    setFooter(footer);
}

function setProjectsContent(element) {
    element.innerHTML = `
        <div class="projects-container">
            <h2 class="heading">Projects</h2>
            <div id="projects-list" class="projects-list">
            </div>
        </div>
    `;

    // Add your logic to fetch and display projects, similar to projects.js
    // JavaScript for dynamically adding project information
    const projectsList = document.getElementById('projects-list');

    // Define an array of project details
    const projectsData = [
        {
            imageUrl: '/Advice-generator-app.jpg',
            title: 'Advice generator app',
            demoLink: 'https://advice-generator-app-ten-omega.vercel.app/',
            repoLink: 'https://github.com/Hamid997/Advice-generator-app',
            techInfo: 'Tech Stack: React, Axios, CSS and Vite',
        },
        {
            imageUrl: '/REST-Countries-API-with-color-theme-switcher.jpg',
            title: 'REST Countries API with color theme switcher',
            demoLink: 'https://rest-countries-api-with-color-theme-switcher-dun-six.vercel.app/',
            repoLink: 'https://github.com/Hamid997/REST-Countries-API-with-color-theme-switcher',
            techInfo: 'Tech Stack: Vite, React, CSS & JSON',
        },
        {
            imageUrl: '/IP-Address-Tracker.jpg',
            title: 'IP Address Tracker',
            demoLink: 'https://ip-address-tracker-dusky-six.vercel.app/',
            repoLink: 'https://github.com/Hamid997/IP-Address-Tracker',
            techInfo: 'Tech Stack: React, Axios, Leaflet js, Vite and CSS',
        },
        {
            imageUrl: '/URL-shortening-API-landing-page.jpg',
            title: 'URL shortening API landing page',
            demoLink: 'https://url-shortening-api-landing-page-theta.vercel.app/',
             repoLink: 'https://github.com/Hamid997/URL-shortening-API-landing-page',
             techInfo: 'Tech Stack: React, Vite and CSS',
        },
        {
             imageUrl: '/Insure-landing-page.jpg',
             title: 'Insure landing page',
             demoLink: 'https://hamid997.github.io/Insure-landing-page/',
             repoLink: 'https://github.com/Hamid997/Insure-landing-page',
             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
        },
        {
             imageUrl: '/Blogr-landing-page.jpg',
             title: 'Blogr landing page',
             demoLink: 'https://hamid997.github.io/Blogr-landing-page/',
             repoLink: 'https://github.com/Hamid997/Blogr-landing-page/',
             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
        },
        {
             imageUrl: '/Sunnyside-agency-landing-page.jpg',
             title: 'Sunnyside agency landing page',
             demoLink: 'https://hamid997.github.io/Sunnyside-agency-landing-page/',
             repoLink: 'https://github.com/Hamid997/Sunnyside-agency-landing-page',
             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
        },
        {
             imageUrl: '/Clipboard-landing-page.jpg',
             title: 'Clipboard landing page',
             demoLink: 'https://hamid997.github.io/Clipboard-landing-page/',
             repoLink: 'https://github.com/Hamid997/Clipboard-landing-page',
             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
        }
         // Add more project details as needed
     ];

    // Function to generate the projects list
    function generateProjectsList() {
        projectsData.forEach(projectData => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');

            const projectImage = document.createElement('img');
            projectImage.classList.add('project-image');
            projectImage.src = projectData.imageUrl;

            const projectTitle = document.createElement('h3');
            projectTitle.classList.add('project-title');
            projectTitle.textContent = projectData.title;

            const projectLinks = document.createElement('div');
            projectLinks.classList.add('project-links');

           const demoLink = document.createElement('a');
           demoLink.classList.add('project-link');
           demoLink.href = projectData.demoLink;
           demoLink.textContent = 'Demo';
           demoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

           const repoLink = document.createElement('a');
           repoLink.classList.add('project-link');
           repoLink.href = projectData.repoLink;
           repoLink.textContent = 'GitHub Repo';
           repoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

            projectLinks.appendChild(demoLink);
            projectLinks.appendChild(repoLink);

            const techInfo = document.createElement('p');
            techInfo.classList.add('project-tech-info');
            techInfo.textContent = projectData.techInfo;

            projectItem.appendChild(projectImage);
            projectItem.appendChild(projectTitle);
            projectItem.appendChild(projectLinks);
            projectItem.appendChild(techInfo);

            projectsList.appendChild(projectItem);
        });
    }

    // Call the function to generate the projects list
    generateProjectsList();
}

// Remove the duplicate export
// export { setProjectsPage };