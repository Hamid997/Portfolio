// export function setProjects(element) {
//     element.innerHTML = `
//     <div class="projects-container">
//         <h2 class="projects-heading">Projects</h2>
//         <div id="projects-list">
//             <!-- Project details will be dynamically added here using JavaScript -->
//         </div>
//     </div>
//     `;

//     // JavaScript for dynamically adding project information
//     const projectsList = document.getElementById('projects-list');

//     // Define an array of project details
//     const projectsData = [
//         {
//             imageUrl: 'project1.jpg',
//             title: 'Project 1',
//             demoLink: 'https://example.com/project1',
//             repoLink: 'https://github.com/user/project1',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: 'project2.jpg',
//             title: 'Project 2',
//             demoLink: 'https://example.com/project2',
//             repoLink: 'https://github.com/user/project2',
//             techInfo: 'Tech Stack: React, Node.js, Express',
//         },
//         // Add more project details as needed
//     ];

//     // Function to generate the projects list
//     function generateProjectsList() {
//         projectsData.forEach(projectData => {
//             const projectItem = document.createElement('div');
//             projectItem.classList.add('project-item');

//             const projectImage = document.createElement('img');
//             projectImage.classList.add('project-image');
//             projectImage.src = projectData.imageUrl;

//             const projectTitle = document.createElement('h3');
//             projectTitle.classList.add('project-title');
//             projectTitle.textContent = projectData.title;

//             const projectLinks = document.createElement('div');
//             projectLinks.classList.add('project-links');

//             const demoLink = document.createElement('a');
//             demoLink.classList.add('project-link');
//             demoLink.href = projectData.demoLink;
//             demoLink.textContent = 'Demo';

//             const repoLink = document.createElement('a');
//             repoLink.classList.add('project-link');
//             repoLink.href = projectData.repoLink;
//             repoLink.textContent = 'GitHub Repo';

//             projectLinks.appendChild(demoLink);
//             projectLinks.appendChild(repoLink);

//             const techInfo = document.createElement('p');
//             techInfo.classList.add('project-tech-info');
//             techInfo.textContent = projectData.techInfo;

//             projectItem.appendChild(projectImage);
//             projectItem.appendChild(projectTitle);
//             projectItem.appendChild(projectLinks);
//             projectItem.appendChild(techInfo);

//             projectsList.appendChild(projectItem);
//         });
//     }

//     // Call the function to generate the projects list
//     generateProjectsList();
// }









// export function setProjects(element) {
//     element.innerHTML = `
//     <div class="projects-container">
//         <h2 class="projects-heading">Projects</h2>
//         <div id="projects-list" class="projects-list" >
//         </div>
//         <button id="show-more-button" class="show-more-button">Show More</button>
//     </div>
//     `;

//     // JavaScript for dynamically adding project information
//     const projectsList = document.getElementById('projects-list');
//     const showMoreButton = document.getElementById('show-more-button');

//     // Define an array of project details
//     const projectsData = [
//         {
//             imageUrl: '/Advice-generator-app.jpg',
//             title: 'Advice generator app',
//             demoLink: 'https://advice-generator-app-ten-omega.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/Advice-generator-app',
//             techInfo: 'Tech Stack: React, Axios, CSS and Vite',
//         },
//         {
//             imageUrl: '/REST-Countries-API-with-color-theme-switcher.jpg',
//             title: 'REST Countries API with color theme switcher',
//             demoLink: 'https://rest-countries-api-with-color-theme-switcher-dun-six.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/REST-Countries-API-with-color-theme-switcher',
//             techInfo: 'Tech Stack: Vite, React, CSS & JSON',
//         },
//         {
//             imageUrl: '/IP-Address-Tracker.jpg',
//             title: 'IP Address Tracker',
//             demoLink: 'https://ip-address-tracker-dusky-six.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/IP-Address-Tracker',
//             techInfo: 'Tech Stack: React, Axios, Leaflet js, Vite and CSS',
//         },
//         {
//             imageUrl: '/URL-shortening-API-landing-page.jpg',
//             title: 'URL shortening API landing page',
//             demoLink: 'https://url-shortening-api-landing-page-theta.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/URL-shortening-API-landing-page',
//             techInfo: 'Tech Stack: React, Vite and CSS',
//         },
//         {
//             imageUrl: '/Insure-landing-page.jpg',
//             title: 'Insure landing page',
//             demoLink: 'https://hamid997.github.io/Insure-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Insure-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Blogr-landing-page.jpg',
//             title: 'Blogr landing page',
//             demoLink: 'https://hamid997.github.io/Blogr-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Blogr-landing-page/',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Sunnyside-agency-landing-page.jpg',
//             title: 'Sunnyside agency landing page',
//             demoLink: 'https://hamid997.github.io/Sunnyside-agency-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Sunnyside-agency-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Clipboard-landing-page.jpg',
//             title: 'Clipboard landing page',
//             demoLink: 'https://hamid997.github.io/Clipboard-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Clipboard-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         }
//         // Add more project details as needed
//     ];

//     // Function to generate the projects list
//     function generateProjectsList() {
//         const projectItems = projectsData.map(projectData => {
//             const projectItem = document.createElement('div');
//             projectItem.classList.add('project-item');

//             const projectImage = document.createElement('img');
//             projectImage.classList.add('project-image');
//             projectImage.src = projectData.imageUrl;

//             const projectTitle = document.createElement('h3');
//             projectTitle.classList.add('project-title');
//             projectTitle.textContent = projectData.title;

//             const projectLinks = document.createElement('div');
//             projectLinks.classList.add('project-links');

//             const demoLink = document.createElement('a');
//             demoLink.classList.add('project-link');
//             demoLink.href = projectData.demoLink;
//             demoLink.textContent = 'Demo';
//             demoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//             const repoLink = document.createElement('a');
//             repoLink.classList.add('project-link');
//             repoLink.href = projectData.repoLink;
//             repoLink.textContent = 'GitHub Repo';
//             repoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//             projectLinks.appendChild(demoLink);
//             projectLinks.appendChild(repoLink);

//             const techInfo = document.createElement('p');
//             techInfo.classList.add('project-tech-info');
//             techInfo.textContent = projectData.techInfo;

//             projectItem.appendChild(projectImage);
//             projectItem.appendChild(projectTitle);
//             projectItem.appendChild(projectLinks);
//             projectItem.appendChild(techInfo);

//             return projectItem;
//         });

//         // Initially, show only the first 4 items
//         projectsList.append(...projectItems.slice(0, 4));

//         // Handle the "Show More" button click
//         let showingMore = false;
//         showMoreButton.addEventListener('click', () => {
//             if (!showingMore) {
//                 // Show all items if not currently showing more
//                 projectsList.append(...projectItems.slice(4));
//                 showMoreButton.textContent = 'Show Less';
//             } else {
//                 // Show only the first 4 items if currently showing more
//                 projectsList.innerHTML = '';
//                 projectsList.append(...projectItems.slice(0, 4));
//                 showMoreButton.textContent = 'Show More';
//             }
//             showingMore = !showingMore;
//         });
//     }

//     // Call the function to generate the projects list
//     generateProjectsList();
// }







// export function setProjects(element) {
//     element.innerHTML = `
//     <div class="projects-container">
//         <h2 class="projects-heading">Projects</h2>
//         <div id="projects-list" class="projects-list">
//         </div>
//         <button id="show-more-button" class="show-more-button">Show More</button>
//     </div>
//     `;

//     const projectsList = document.getElementById('projects-list');
//     const showMoreButton = document.getElementById('show-more-button');

//     // Define an array of project details
//     const projectsData = [
//         {
//             imageUrl: '/Advice-generator-app.jpg',
//             title: 'Advice generator app',
//             demoLink: 'https://advice-generator-app-ten-omega.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/Advice-generator-app',
//             techInfo: 'Tech Stack: React, Axios, CSS and Vite',
//         },
//         {
//             imageUrl: '/REST-Countries-API-with-color-theme-switcher.jpg',
//             title: 'REST Countries API with color theme switcher',
//             demoLink: 'https://rest-countries-api-with-color-theme-switcher-dun-six.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/REST-Countries-API-with-color-theme-switcher',
//             techInfo: 'Tech Stack: Vite, React, CSS & JSON',
//         },
//         {
//             imageUrl: '/IP-Address-Tracker.jpg',
//             title: 'IP Address Tracker',
//             demoLink: 'https://ip-address-tracker-dusky-six.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/IP-Address-Tracker',
//             techInfo: 'Tech Stack: React, Axios, Leaflet js, Vite and CSS',
//         },
//         {
//             imageUrl: '/URL-shortening-API-landing-page.jpg',
//             title: 'URL shortening API landing page',
//             demoLink: 'https://url-shortening-api-landing-page-theta.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/URL-shortening-API-landing-page',
//             techInfo: 'Tech Stack: React, Vite and CSS',
//         },
//         {
//             imageUrl: '/Insure-landing-page.jpg',
//             title: 'Insure landing page',
//             demoLink: 'https://hamid997.github.io/Insure-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Insure-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Blogr-landing-page.jpg',
//             title: 'Blogr landing page',
//             demoLink: 'https://hamid997.github.io/Blogr-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Blogr-landing-page/',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Sunnyside-agency-landing-page.jpg',
//             title: 'Sunnyside agency landing page',
//             demoLink: 'https://hamid997.github.io/Sunnyside-agency-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Sunnyside-agency-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Clipboard-landing-page.jpg',
//             title: 'Clipboard landing page',
//             demoLink: 'https://hamid997.github.io/Clipboard-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Clipboard-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         }
//         // Add more project details as needed
//     ];

//     // Function to generate the projects list
//     function generateProjectsList() {
//         const projectItems = projectsData.map(projectData => {
//             const projectItem = document.createElement('div');
//             projectItem.classList.add('project-item');

//             const projectImage = document.createElement('img');
//             projectImage.classList.add('project-image');
//             projectImage.src = projectData.imageUrl;

//             const projectTitle = document.createElement('h3');
//             projectTitle.classList.add('project-title');
//             projectTitle.textContent = projectData.title;

//             const projectLinks = document.createElement('div');
//             projectLinks.classList.add('project-links');

//             const demoLink = document.createElement('a');
//             demoLink.classList.add('project-link');
//             demoLink.href = projectData.demoLink;
//             demoLink.textContent = 'Demo';
//             demoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//             const repoLink = document.createElement('a');
//             repoLink.classList.add('project-link');
//             repoLink.href = projectData.repoLink;
//             repoLink.textContent = 'GitHub Repo';
//             repoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//             projectLinks.appendChild(demoLink);
//             projectLinks.appendChild(repoLink);

//             const techInfo = document.createElement('p');
//             techInfo.classList.add('project-tech-info');
//             techInfo.textContent = projectData.techInfo;

//             projectItem.appendChild(projectImage);
//             projectItem.appendChild(projectTitle);
//             projectItem.appendChild(projectLinks);
//             projectItem.appendChild(techInfo);

//             return projectItem;
//         });

//         // Initially, show only the first 4 items
//         projectsList.append(...projectItems.slice(0, 4));

//          // Handle the "Show More" button click
//          let showingMore = false;
//          showMoreButton.addEventListener('click', () => {
//              if (!showingMore) {
//                  // Show all items if not currently showing more
//                 projectsList.append(...projectItems.slice(4));
//                 showMoreButton.textContent = 'Show Less';
//              } else {
//                  // Show only the first 4 items if currently showing more
//                 projectsList.innerHTML = '';
//                 projectsList.append(...projectItems.slice(0, 4));
//                 showMoreButton.textContent = 'Show More';
//             }
//             showingMore = !showingMore;
//         });
//     }

//     // Call the function to generate the projects list
//     generateProjectsList();
// }


// export function setProjects(element) {
//     element.innerHTML = `
//     <div class="projects-container">
//         <h2 class="projects-heading">Projects</h2>
//         <div id="projects-list" class="projects-list">
//         </div>
//         <button id="show-more-button" class="show-more-button">Show More</button>
//     </div>
//     `;

//     const projectsList = document.getElementById('projects-list');
//     const showMoreButton = document.getElementById('show-more-button');

//     const projectsData = [
//         {
//             imageUrl: '/Advice-generator-app.jpg',
//             title: 'Advice generator app',
//             demoLink: 'https://advice-generator-app-ten-omega.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/Advice-generator-app',
//             techInfo: 'Tech Stack: React, Axios, CSS and Vite',
//         },
//         {
//             imageUrl: '/REST-Countries-API-with-color-theme-switcher.jpg',
//             title: 'REST Countries API with color theme switcher',
//             demoLink: 'https://rest-countries-api-with-color-theme-switcher-dun-six.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/REST-Countries-API-with-color-theme-switcher',
//             techInfo: 'Tech Stack: Vite, React, CSS & JSON',
//         },
//         {
//             imageUrl: '/IP-Address-Tracker.jpg',
//             title: 'IP Address Tracker',
//             demoLink: 'https://ip-address-tracker-dusky-six.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/IP-Address-Tracker',
//             techInfo: 'Tech Stack: React, Axios, Leaflet js, Vite and CSS',
//         },
//         {
//             imageUrl: '/URL-shortening-API-landing-page.jpg',
//             title: 'URL shortening API landing page',
//             demoLink: 'https://url-shortening-api-landing-page-theta.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/URL-shortening-API-landing-page',
//             techInfo: 'Tech Stack: React, Vite and CSS',
//         },
//         {
//             imageUrl: '/Insure-landing-page.jpg',
//             title: 'Insure landing page',
//             demoLink: 'https://hamid997.github.io/Insure-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Insure-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Blogr-landing-page.jpg',
//             title: 'Blogr landing page',
//             demoLink: 'https://hamid997.github.io/Blogr-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Blogr-landing-page/',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Sunnyside-agency-landing-page.jpg',
//             title: 'Sunnyside agency landing page',
//             demoLink: 'https://hamid997.github.io/Sunnyside-agency-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Sunnyside-agency-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Clipboard-landing-page.jpg',
//             title: 'Clipboard landing page',
//             demoLink: 'https://hamid997.github.io/Clipboard-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Clipboard-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         }
//         // Add more project details as needed
//     ];

//     let showingMore = false;
//     let displayedItems = 4;

//     function generateProjectsList() {
//         const projectItems = projectsData.map(projectData => {
//             const projectItem = document.createElement('div');
//             projectItem.classList.add('project-item');

//             const projectImage = document.createElement('img');
//             projectImage.classList.add('project-image');
//             projectImage.src = projectData.imageUrl;

//             const projectTitle = document.createElement('h3');
//             projectTitle.classList.add('project-title');
//             projectTitle.textContent = projectData.title;

//             const projectLinks = document.createElement('div');
//             projectLinks.classList.add('project-links');

//             const demoLink = document.createElement('a');
//             demoLink.classList.add('project-link');
//             demoLink.href = projectData.demoLink;
//             demoLink.textContent = 'Demo';
//             demoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//             const repoLink = document.createElement('a');
//             repoLink.classList.add('project-link');
//             repoLink.href = projectData.repoLink;
//             repoLink.textContent = 'GitHub Repo';
//             repoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//             projectLinks.appendChild(demoLink);
//             projectLinks.appendChild(repoLink);

//             const techInfo = document.createElement('p');
//             techInfo.classList.add('project-tech-info');
//             techInfo.textContent = projectData.techInfo;

//             projectItem.appendChild(projectImage);
//             projectItem.appendChild(projectTitle);
//             projectItem.appendChild(projectLinks);
//             projectItem.appendChild(techInfo);

//             return projectItem;
//         });

//         projectsList.innerHTML = ''; // Clear the list

//         for (let i = 0; i < displayedItems; i++) {
//             if (projectItems[i]) {
//                 projectsList.appendChild(projectItems[i]);
//             }
//         }

//         // Toggle the "Show More" button visibility
//         if (displayedItems < projectsData.length) {
//             showMoreButton.style.display = 'block';
//         } else {
//             showMoreButton.style.display = 'none';
//         }

//         showMoreButton.textContent = showingMore ? 'Show Less' : 'Show More';
//     }

//     showMoreButton.addEventListener('click', () => {

//         if (showingMore) {
//             displayedItems = 4;
//         } else {
//             displayedItems = projectsData.length;
//         }

//         generateProjectsList();
//     });

//     generateProjectsList();
// }


// export function setProjects(element) {
//     element.innerHTML = `
//     <div class="projects-container">
//         <h2 class="projects-heading">Projects</h2>
//         <div id="projects-list" class="projects-list">
//         </div>
//         <button id="show-more-button" class="show-more-button">Show More</button>
//     </div>
//     `;

//     const projectsList = document.getElementById('projects-list');
//     const showMoreButton = document.getElementById('show-more-button');

//     // Define an array of project details
//     const projectsData = [
//         {
//             imageUrl: '/Advice-generator-app.jpg',
//             title: 'Advice generator app',
//             demoLink: 'https://advice-generator-app-ten-omega.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/Advice-generator-app',
//             techInfo: 'Tech Stack: React, Axios, CSS and Vite',
//         },
//         {
//             imageUrl: '/REST-Countries-API-with-color-theme-switcher.jpg',
//             title: 'REST Countries API with color theme switcher',
//             demoLink: 'https://rest-countries-api-with-color-theme-switcher-dun-six.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/REST-Countries-API-with-color-theme-switcher',
//             techInfo: 'Tech Stack: Vite, React, CSS & JSON',
//         },
//         {
//             imageUrl: '/IP-Address-Tracker.jpg',
//             title: 'IP Address Tracker',
//             demoLink: 'https://ip-address-tracker-dusky-six.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/IP-Address-Tracker',
//             techInfo: 'Tech Stack: React, Axios, Leaflet js, Vite and CSS',
//         },
//         {
//             imageUrl: '/URL-shortening-API-landing-page.jpg',
//             title: 'URL shortening API landing page',
//             demoLink: 'https://url-shortening-api-landing-page-theta.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/URL-shortening-API-landing-page',
//             techInfo: 'Tech Stack: React, Vite and CSS',
//         },
//         {
//             imageUrl: '/Insure-landing-page.jpg',
//             title: 'Insure landing page',
//             demoLink: 'https://hamid997.github.io/Insure-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Insure-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Blogr-landing-page.jpg',
//             title: 'Blogr landing page',
//             demoLink: 'https://hamid997.github.io/Blogr-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Blogr-landing-page/',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Sunnyside-agency-landing-page.jpg',
//             title: 'Sunnyside agency landing page',
//             demoLink: 'https://hamid997.github.io/Sunnyside-agency-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Sunnyside-agency-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         },
//         {
//             imageUrl: '/Clipboard-landing-page.jpg',
//             title: 'Clipboard landing page',
//             demoLink: 'https://hamid997.github.io/Clipboard-landing-page/',
//             repoLink: 'https://github.com/Hamid997/Clipboard-landing-page',
//             techInfo: 'Tech Stack: HTML, CSS, JavaScript',
//         }
//         // Add more project details as needed
//     ];

//     // Function to generate the projects list
//     function generateProjectsList() {
//         const projectItems = projectsData.map(projectData => {
//             // ... (your existing code to create project items)
//             const projectItem = document.createElement('div');
//             projectItem.classList.add('project-item');

//             const projectImage = document.createElement('img');
//             projectImage.classList.add('project-image');
//             projectImage.src = projectData.imageUrl;

//             const projectTitle = document.createElement('h3');
//             projectTitle.classList.add('project-title');
//             projectTitle.textContent = projectData.title;

//             const projectLinks = document.createElement('div');
//             projectLinks.classList.add('project-links');

//             const demoLink = document.createElement('a');
//             demoLink.classList.add('project-link');
//             demoLink.href = projectData.demoLink;
//             demoLink.textContent = 'Demo';
//             demoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//             const repoLink = document.createElement('a');
//             repoLink.classList.add('project-link');
//             repoLink.href = projectData.repoLink;
//             repoLink.textContent = 'GitHub Repo';
//             repoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//             projectLinks.appendChild(demoLink);
//             projectLinks.appendChild(repoLink);

//             const techInfo = document.createElement('p');
//             techInfo.classList.add('project-tech-info');
//             techInfo.textContent = projectData.techInfo;

//             projectItem.appendChild(projectImage);
//             projectItem.appendChild(projectTitle);
//             projectItem.appendChild(projectLinks);
//             projectItem.appendChild(techInfo);

//             return projectItem;
//         });

//         // Function to show the projects
//         function showProjects(startIndex, endIndex) {
//             // Clear the existing projects in the list
//             projectsList.innerHTML = '';

//             // Append the specified range of project items
//             projectItems.slice(startIndex, endIndex).forEach(projectItem => {
//                 projectsList.appendChild(projectItem);
//             });
//         }

//         // Variables to track the current range of projects displayed
//         let startIndex = 0;
//         let endIndex = 4;

//         // Show the initial projects
//         showProjects(startIndex, endIndex);

//         // Handle the "Show More" button click
//         showMoreButton.addEventListener('click', () => {
//             startIndex += 4;
//             endIndex += 4;

//             if (startIndex >= projectItems.length) {
//                 // If there are no more items to show, hide the button
//                 showMoreButton.style.display = 'none';
//             }

//             // Show the next set of projects
//             showProjects(startIndex, endIndex);
//         });
//     }

//     // Call the function to generate the projects list
//     generateProjectsList();
// }




// import { setProjectsPage } from './projects_page';

// export function setProjects(element) {
//      element.innerHTML = `
//      <div class="projects-container">
//          <h2 class="heading">Projects</h2>
//          <div id="projects-list" class="projects-list">
//          </div>
//          <a href="/projects_page" class="show-more-button project-button">Show More Projects</a>
//      </div>
//     `;

//     // JavaScript for dynamically adding project information
//     const projectsList = document.getElementById('projects-list');

//     // Define an array of project details
//     const projectsData = [
//         {
//             imageUrl: '/Advice-generator-app.jpg',
//             title: 'Advice generator app',
//             demoLink: 'https://advice-generator-app-ten-omega.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/Advice-generator-app',
//             techInfo: 'Tech Stack: React, Axios, CSS and Vite',
//         },
//         {
//             imageUrl: '/REST-Countries-API-with-color-theme-switcher.jpg',
//             title: 'REST Countries API with color theme switcher',
//             demoLink: 'https://rest-countries-api-with-color-theme-switcher-dun-six.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/REST-Countries-API-with-color-theme-switcher',
//             techInfo: 'Tech Stack: Vite, React, CSS & JSON',
//         },
//         {
//             imageUrl: '/IP-Address-Tracker.jpg',
//             title: 'IP Address Tracker',
//             demoLink: 'https://ip-address-tracker-dusky-six.vercel.app/',
//             repoLink: 'https://github.com/Hamid997/IP-Address-Tracker',
//             techInfo: 'Tech Stack: React, Axios, Leaflet js, Vite and CSS',
//         },
//         {
//             imageUrl: '/URL-shortening-API-landing-page.jpg',
//             title: 'URL shortening API landing page',
//             demoLink: 'https://url-shortening-api-landing-page-theta.vercel.app/',
//              repoLink: 'https://github.com/Hamid997/URL-shortening-API-landing-page',
//              techInfo: 'Tech Stack: React, Vite and CSS',
//         }
//      ];

//     // Function to generate the projects list
//     function generateProjectsList() {
//         projectsData.forEach(projectData => {
//             const projectItem = document.createElement('div');
//             projectItem.classList.add('project-item');

//             const projectImage = document.createElement('img');
//             projectImage.classList.add('project-image');
//             projectImage.src = projectData.imageUrl;

//             const projectTitle = document.createElement('h3');
//             projectTitle.classList.add('project-title');
//             projectTitle.textContent = projectData.title;

//             const projectLinks = document.createElement('div');
//             projectLinks.classList.add('project-links');

//            const demoLink = document.createElement('a');
//            demoLink.classList.add('project-link');
//            demoLink.href = projectData.demoLink;
//            demoLink.textContent = 'Demo';
//            demoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//            const repoLink = document.createElement('a');
//            repoLink.classList.add('project-link');
//            repoLink.href = projectData.repoLink;
//            repoLink.textContent = 'GitHub Repo';
//            repoLink.setAttribute('target', '_blank'); // Add target="_blank" to open in a new tab

//             projectLinks.appendChild(demoLink);
//             projectLinks.appendChild(repoLink);

//             const techInfo = document.createElement('p');
//             techInfo.classList.add('project-tech-info');
//             techInfo.textContent = projectData.techInfo;

//             projectItem.appendChild(projectImage);
//             projectItem.appendChild(projectTitle);
//             projectItem.appendChild(projectLinks);
//             projectItem.appendChild(techInfo);

//             projectsList.appendChild(projectItem);
//         });
//     }

//     // Call the function to generate the projects list
//     generateProjectsList();

//     // Simple router logic
//     document.addEventListener('click', (event) => {
//         if (event.target.classList.contains('project-button')) {
//             event.preventDefault();
//             navigateToProjectsPage();
//         }
//     });

//     function navigateToProjectsPage() {
//         const app = document.querySelector('#app');
//         app.innerHTML = '';
//         setProjectsPage(app);
//     }
// }



export function setProjects(element) {
     element.innerHTML = `
     <div class="projects-container">
         <h2 class="heading">Projects</h2>
         <div id="projects-list" class="projects-list"></div>
         <button id="show-more-button" class="show-more-button project-button">Show More</button>
     </div>
    `;

    // JavaScript for dynamically adding project information
    const projectsList = document.getElementById('projects-list');
    const showMoreButton = document.getElementById('show-more-button');


    // Define an array of project details
    const projectsData = [
        {
            imageUrl: '/IP-Address-Tracker.jpg',
            title: 'IP Address Tracker',
            demoLink: 'https://ip-address-tracker-dusky-six.vercel.app/',
            repoLink: 'https://github.com/Hamid997/IP-Address-Tracker',
            techInfo: 'Tech Stack: React, Axios, Leaflet js, Vite and CSS',
        },
        {
            imageUrl: '/REST-Countries-API-with-color-theme-switcher.jpg',
            title: 'REST Countries API with color theme switcher',
            demoLink: 'https://rest-countries-api-with-color-theme-switcher-dun-six.vercel.app/',
            repoLink: 'https://github.com/Hamid997/REST-Countries-API-with-color-theme-switcher',
            techInfo: 'Tech Stack: Vite, React, CSS & JSON',
        },
        {
            imageUrl: '/Advice-generator-app.jpg',
            title: 'Advice generator app',
            demoLink: 'https://advice-generator-app-ten-omega.vercel.app/',
            repoLink: 'https://github.com/Hamid997/Advice-generator-app',
            techInfo: 'Tech Stack: React, Axios, CSS and Vite',
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
     ];

    // Function to generate the projects list
     function generateProjectsList() {
         const projectItems = projectsData.map(projectData => {
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

             return projectItem;
         });

         // Initially, show only the first 4 items
         projectsList.append(...projectItems.slice(0, 2));

         // Handle the "Show More" button click
         let showingMore = false;
         showMoreButton.addEventListener('click', () => {
             if (!showingMore) {
                 // Show all items if not currently showing more
                 projectsList.append(...projectItems.slice(2));
                 showMoreButton.textContent = 'Show Less';
             } else {
                 // Show only the first 4 items if currently showing more
                 projectsList.innerHTML = '';
                 projectsList.append(...projectItems.slice(0, 2));
                 showMoreButton.textContent = 'Show More';
             }
             showingMore = !showingMore;
         });
     }

    // Call the function to generate the projects list
    generateProjectsList();

}