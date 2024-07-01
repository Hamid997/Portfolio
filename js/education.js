// export function setEducation(element) {
//     element.innerHTML = `
//     <div class="education-container">
//         <h2 class="education-heading">Education</h2>
//         <div id="education-list">
//             <!-- Education details will be dynamically added here using JavaScript -->
//         </div>
//     </div>
//     `;

//             // JavaScript for dynamically adding education information
//             const educationList = document.getElementById('education-list');

//             // Define an array of education details
//             const educationData = [
//                 { university: 'University Name 1', certification: 'Certification Name 1', date: 'May 20XX', info: 'Some information about the certification.' },
//                 { university: 'University Name 2', certification: 'Certification Name 2', date: 'June 20XX', info: 'Some information about the certification.' },
//                 // Add more education details as needed
//             ];
    
//             // Function to generate the education list
//             function generateEducationList() {
//                 educationData.forEach(edu => {
//                     const educationItem = document.createElement('div');
//                     educationItem.classList.add('education-item');
    
//                     const universityName = document.createElement('h3');
//                     universityName.textContent = edu.university;
    
//                     const certificationName = document.createElement('p');
//                     certificationName.textContent = edu.certification;
    
//                     const date = document.createElement('p');
//                     date.textContent = `Date: ${edu.date}`;
    
//                     const certificationInfo = document.createElement('p');
//                     certificationInfo.classList.add('certification-info');
//                     certificationInfo.textContent = edu.info;
    
//                     educationItem.appendChild(universityName);
//                     educationItem.appendChild(certificationName);
//                     educationItem.appendChild(date);
//                     educationItem.appendChild(certificationInfo);
    
//                     educationList.appendChild(educationItem);
//                 });
//             }
    
//             // Call the function to generate the education list
//             generateEducationList();
// }

export function setEducation(element) {
    element.innerHTML = `
    <div class="education-container">
        <h2 class="heading">Education</h2>
        <div id="education-list" class="education-list">
        </div>
    </div>
    `;

    // JavaScript for dynamically adding education information
    const educationList = document.getElementById('education-list');

    // Define an array of education details
    const educationData = [
        {
            university: 'Université Ibn Zohr, Agadir',
            certification: "Licence d'études fondamentales, Sciences de la Terre et de l’Univers",
            date: 'Sep 2016 - Jun 2017',
            info: 'Some information about the certification.'
        },
        {
            university: 'Université Ibn Zohr, Agadir ',
            certification: 'Diplôme DEUG, Sciences de la Terre et de l’Univers',
            date: 'Sep 2014 - Jun 2017',
            info: 'Some information about the certification.'
        },
        {
            university: 'Lycée Anoual, Agadir',
            certification: 'Baccalauréat, Sciences de la Vie et de la Terre (SVT)',
            date: 'Sep 2013 - Jun 2014',
            info: 'Some information about the certification.'
        },
        // Add more education details as needed
    ];

    function generateEducationList() {
        const educationItems = educationData.map(edu => {
            const educationItem = document.createElement('div');
            educationItem.classList.add('education-item');

            const certificationName = document.createElement('h3');
            certificationName.textContent = edu.certification;

            const universityName = document.createElement('p');
            universityName.textContent = edu.university;

            const date = document.createElement('p');
            date.textContent = `Date: ${edu.date}`;

            const certificationInfo = document.createElement('p');
            certificationInfo.classList.add('certification-info');
            certificationInfo.textContent = edu.info;

            educationItem.appendChild(certificationName);
            educationItem.appendChild(universityName);
            educationItem.appendChild(date);
            educationItem.appendChild(certificationInfo);

            return educationItem;
        });

        educationList.append(...educationItems);
    }

    // Call the function to generate the education list
    generateEducationList();
}