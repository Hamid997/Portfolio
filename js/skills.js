export function setSkills(element) {
    element.innerHTML = `
    <div class="skills-container">
        <h2 class="heading">Developer Skills</h2>
        <div id="skills-list" class="skills-list">
        </div>
    </div>
    `;

    // Move your JavaScript code here or wrap it in a DOMContentLoaded event listener
    const skillsList = document.getElementById('skills-list');
    const skillsData = [
        { skill: 'HTML',        rating: '⭐⭐⭐⭐⭐' },
        { skill: 'CSS',         rating: '⭐⭐⭐⭐⭐' },
        { skill: 'Bootstrap',   rating: '⭐⭐⭐⭐⭐' },
        { skill: 'JavaScript',  rating: '⭐⭐⭐⭐⭐' },
        { skill: 'PHP',         rating: '⭐⭐⭐⭐⭐' },
        { skill: 'SQL/MySQL',   rating: '⭐⭐⭐⭐⭐' },
        { skill: 'jQuery',      rating: '⭐⭐⭐⭐⭐' },
        { skill: 'Node.js',     rating: '⭐⭐⭐⭐⭐' },
        { skill: 'Express.js',  rating: '⭐⭐⭐⭐⭐' },
        { skill: 'React',       rating: '⭐⭐⭐⭐⭐' },
        { skill: 'Vue',         rating: '⭐⭐⭐⭐⭐' },
        { skill: 'MongoDB',     rating: '⭐⭐⭐⭐⭐' },
        { skill: 'Python',      rating: '⭐⭐⭐⭐⭐' },
        { skill: 'Django',      rating: '⭐⭐⭐⭐⭐' },
        { skill: 'Flask',       rating: '⭐⭐⭐⭐⭐' },
        // Add more skills and descriptions as needed
    ];

    function generateSkillsList() {
        const skillItems = skillsData.map(skillData => {
            const skillItem = document.createElement('div');
            skillItem.classList.add('skill-item');

            const skillName = document.createElement('h3');
            skillName.textContent = skillData.skill;

            const skillRating = document.createElement('p');
            skillRating.classList.add('skill-description');
            skillRating.textContent = skillData.rating;

            skillItem.appendChild(skillName);
            skillItem.appendChild(skillRating);

            return skillItem;
        });

        skillsList.append(...skillItems);
    }

    // Call the function to generate the skills list
    generateSkillsList();
}
