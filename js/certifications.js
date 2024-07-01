// export function setAccomplishment(element) {
//     element.innerHTML = `
//     <div class="accomplishment-container">
//         <h2 class="heading">Accomplishments</h2>
//         <div id="accomplishment-list" class="accomplishment-list">
//         </div>
//         <button id="show-more-button" class="show-more-button">Show More</button>
//     </div>
//     `;

//     // JavaScript for dynamically adding education information
//     const accomplishmentList = document.getElementById('accomplishment-list');
//     const showMoreButton = document.getElementById('show-more-button');

//     // Define an array of education details
//     const accomplishmentData = [
//         {
//             university: 'Meta - Coursera',
//             certification: "Meta Front-End Developer Professional Certificate",
//             date: 'Jan - Jun 2023',
//             info: 'Some information about the certification.'
//         },
//         {
//             university: 'IBM - Coursera',
//             certification: 'IBM Applied DevOps Engineering Professional Certificate',
//             date: 'Feb - May 2023',
//             info: 'Some information about the certification.'
//         },
//         {
//             university: 'IBM - Coursera',
//             certification: 'IBM Back-End Development Professional Certificate',
//             date: 'Jan - May 2023',
//             info: 'Some information about the certification.'
//         },
//         {
//             university: 'IBM - Coursera',
//             certification: 'IBM Full Stack Software Developer Professional Certificate',
//             date: 'Jan - May 2023',
//             info: 'Some information about the certification.'
//         },
//         // Add more education details as needed
//         {
//             university: 'IBM - Coursera',
//             certification: "Cloud Application Development Foundations Specialization",
//             date: 'Sep - Nov 2022',
//             info: 'Some information about the certification.'
//         },
//         {
//             university: 'The Hong Kong University of Science and Technology - Coursera',
//             certification: 'Full-Stack Web Development with React Specialization',
//             date: 'Jun - Aug 2022',
//             info: 'Some information about the certification.'
//         },
//         {
//             university: 'University of Michigan - Coursera',
//             certification: 'Web Applications for Everybody Specialization',
//             date: 'May 2020 - May 2022',
//             info: 'Some information about the certification.'
//         },
//         {
//             university: 'University of Michigan - Coursera',
//             certification: 'Web Design for Everybody Specialization',
//             date: 'Sep 2019 - May 2022',
//             info: 'Some information about the certification.'
//         },
//         {
//             university: 'Linkedin Learning',
//             certification: 'Become a Software Developer',
//             date: 'Oct 2020 - Feb 2021',
//             info: 'Some information about the certification.'
//         },
//     ];

//     // Function to generate the accomplishment list

//     function generateAccomplishmentList() {
//         const accomplishmentItems = accomplishmentData.map(edu => {
//             const accomplishmentItem = document.createElement('div');
//             accomplishmentItem.classList.add('accomplishment-item');

//             const certificationName = document.createElement('h3');
//             certificationName.textContent = edu.certification;

//             const universityName = document.createElement('p');
//             universityName.textContent = edu.university;

//             const date = document.createElement('p');
//             date.textContent = `Date: ${edu.date}`;

//             const certificationInfo = document.createElement('p');
//             certificationInfo.classList.add('certification-accomplishment');
//             certificationInfo.textContent = edu.info;

//             accomplishmentItem.appendChild(certificationName);
//             accomplishmentItem.appendChild(universityName);
//             accomplishmentItem.appendChild(date);
//             accomplishmentItem.appendChild(certificationInfo);

//             return accomplishmentItem;
//         });

//         // Initially, show only the first 4 items
//         accomplishmentList.append(...accomplishmentItems.slice(0, 3));

//         // Handle the "Show More" button click
//         let showingMore = false;
//         showMoreButton.addEventListener('click', () => {
//             if (!showingMore) {
//                 // Show all items if not currently showing more
//                 accomplishmentList.append(...accomplishmentItems.slice(3));
//                 showMoreButton.textContent = 'Show Less';
//             } else {
//                 // Show only the first 4 items if currently showing more
//                 accomplishmentList.innerHTML = '';
//                 accomplishmentList.append(...accomplishmentItems.slice(0, 3));
//                 showMoreButton.textContent = 'Show More';
//             }
//             showingMore = !showingMore;
//         });
//     }

//     // Call the function to generate the education list
//     generateAccomplishmentList();
// }


export function setCertifications(element) {
    element.innerHTML = `
    <div class="accomplishment-container">
        <h2 class="heading">Licenses & Certifications</h2>
        <div id="accomplishment-list" class="accomplishment-list"></div>
        <button id="show-more-button" class="show-more-button">Show More</button>
    </div>
    `;

    // JavaScript for dynamically adding education information
    const accomplishmentList = document.getElementById('accomplishment-list');
    const showMoreButton = document.getElementById('show-more-button');

    const accomplishmentData = [
        {
            university: 'Meta - Coursera',
            certification: "Meta Back-End Developer Professional Certificate",
            date: 'Oct 2023 - Mar 2024',
            description: 'Launch your career as a back-end developer. Build job-ready skills for an in-demand career and earn a credential from Meta. No degree or prior experience required to get started.',
            pdfLink: 'https://www.coursera.org/account/accomplishments/specialization/certificate/99KEVTSF8392' // Replace with the actual PDF URL
        },
        {
            university: 'Meta - Coursera',
            certification: "Meta Front-End Developer Professional Certificate",
            date: 'Jan - Jun 2023',
            description: 'Launch your career as a front-end developer. Build job-ready skills for an in-demand career and earn a credential from Meta. No degree or prior experience required to get started.',
            pdfLink: 'https://www.coursera.org/account/accomplishments/specialization/certificate/LSCE772G5KT6' // Replace with the actual PDF URL
        },
        {
            university: 'IBM - Coursera',
            certification: 'IBM Applied DevOps Engineering Professional Certificate',
            date: 'Feb - May 2023',
            description: 'Advance your career to high demand field of DevOps. Build on your software development skills with the latest DevOps concepts, tools, and technologies to get job ready in less than 3 months.',
            pdfLink: 'https://www.coursera.org/account/accomplishments/specialization/certificate/PC4PUJUACY7Q' // Replace with the actual PDF URL
        },
        {
            university: 'IBM - Coursera',
            certification: 'IBM Back-End Development Professional Certificate',
            date: 'Jan - May 2023',
            description: 'Prepare for a career as a back-end developer.. Gain the in-demand skills and hands-on experience to get job-ready in less than 6 months.',
            pdfLink: 'https://www.coursera.org/account/accomplishments/specialization/certificate/FXDSUSYAZX6S' // Replace with the actual PDF URL
        },
        {
            university: 'IBM - Coursera',
            certification: 'IBM Full Stack Software Developer Professional Certificate',
            date: 'Jan - May 2023',
            description: 'Prepare for a career as a full stack developer. Gain the in-demand skills and hands-on experience to get job-ready in less than 4 months. No prior experience required.',
            pdfLink: 'https://www.coursera.org/account/accomplishments/specialization/certificate/3FJK7QQS3MKY' // Replace with the actual PDF URL
        },
        // Add more education details as needed
        {
            university: 'IBM - Coursera',
            certification: "Cloud Application Development Foundations Specialization",
            date: 'Sep - Nov 2022',
            description: 'Kickstart Your Career as a Cloud Native Developer. Learn the foundational front-end and back-end skills for developing and deploying applications on Cloud.',
            pdfLink: 'https://www.coursera.org/account/accomplishments/specialization/certificate/H29ZCRTAHKQ5' // Replace with the actual PDF URL
        },
        {
            university: 'The Hong Kong University of Science and Technology - Coursera',
            certification: 'Full-Stack Web Development with React Specialization',
            date: 'Jun - Aug 2022',
            description: 'Build Complete Web and Hybrid Mobile Solutions. Master front-end web, hybrid mobile app and server-side development in three comprehensive courses.',
            pdfLink: 'https://www.coursera.org/account/accomplishments/specialization/certificate/M8YTQ5A7LCZ7' // Replace with the actual PDF URL
        },
        {
            university: 'University of Michigan - Coursera',
            certification: 'Web Applications for Everybody Specialization',
            date: 'May 2020 - May 2022',
            description: 'Build dynamic database-backed web sites.. Use PHP, MySQL, jQuery, and Handlebars to build web and database applications.',
            pdfLink: 'https://www.coursera.org/account/accomplishments/specialization/certificate/XN8B3DCCPLUB' // Replace with the actual PDF URL
        },
        {
            university: 'University of Michigan - Coursera',
            certification: 'Web Design for Everybody Specialization',
            date: 'Sep 2019 - May 2022',
            description: 'Learn to Design and Create Websites. Build a responsive and accessible web portfolio using HTML5, CSS3, and JavaScript',
            pdfLink: 'https://www.coursera.org/account/accomplishments/specialization/certificate/LQRAAA9XU5LB' // Replace with the actual PDF URL
        },
        {
            university: 'Linkedin Learning',
            certification: 'Become a Software Developer',
            date: 'Oct 2020 - Feb 2021',
            description: 'Get an introduction to the programming skills needed for a career as a software developer. This learning path provides a broad perspective on core technologies for web development, software development, and databases. It introduces common tools and the bigger picture of how development careers work.',
            pdfLink: 'https://www.linkedin.com/learning/certificates/33779fd63aa3cdf3cb5ef885252821d4d9dcb90418480f7fe1726b2fd97ff4b3?trk=backfilled_certificate' // Replace with the actual PDF URL
        },
    ];
    
    function generateCertificationsList() {
        const accomplishmentItems = accomplishmentData.map(accomplishment => {
            const accomplishmentItem = document.createElement('div');
            accomplishmentItem.classList.add('accomplishment-item');
    
            const certificationName = document.createElement('h3');
            certificationName.textContent = accomplishment.certification;
    
            const universityName = document.createElement('p');
            universityName.textContent = accomplishment.university;
    
            const date = document.createElement('p');
            date.textContent = `Date: ${accomplishment.date}`;
    
            const description = document.createElement('p');
            description.textContent = `Description: ${accomplishment.description}`;
    
            const pdfLink = document.createElement('a');
            pdfLink.textContent = 'Show Certification  '; // Text for the PDF download link
            pdfLink.href = accomplishment.pdfLink; // Link to the PDF file
            pdfLink.setAttribute('target', '_blank'); // Open the link in a new tab
    
            // Add a Font Awesome icon to the link
            const pdfIcon = document.createElement('i');
            pdfIcon.classList.add('fa-solid', 'fa-up-right-from-square');
            pdfLink.append(pdfIcon); // Prepend the icon to the link
    
            accomplishmentItem.appendChild(certificationName);
            accomplishmentItem.appendChild(universityName);
            accomplishmentItem.appendChild(date);
            accomplishmentItem.appendChild(description);
            accomplishmentItem.appendChild(pdfLink);
    
            return accomplishmentItem;
        });
    
        // Initially, show only the first 3 items
        accomplishmentList.append(...accomplishmentItems.slice(0, 2));
    
        // Handle the "Show More" button click
        let showingMore = false;
        showMoreButton.addEventListener('click', () => {
            if (!showingMore) {
                // Show all items if not currently showing more
                accomplishmentList.append(...accomplishmentItems.slice(2));
                showMoreButton.textContent = 'Show Less';
            } else {
                // Show only the first 3 items if currently showing more
                accomplishmentList.innerHTML = '';
                accomplishmentList.append(...accomplishmentItems.slice(0, 2));
                showMoreButton.textContent = 'Show More';
            }
            showingMore = !showingMore;
        });
    }
    
    // Call the function to generate the accomplishment list
    generateCertificationsList();
}