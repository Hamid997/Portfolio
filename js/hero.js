 export function setHero(element) {
     element.innerHTML = `
     <div class="hero-block">
       <h1 class="greeting-text">Nice to meet you!</h1>
       <h1 class="greeting-text">I'm Abdelhamid Birouk 👋.</h1>
       <p class="greeting-text-p subTitle">
       I'm a Front-End Web Developer  passionate about building Web applications with JavaScript / React and a little experience in Back-End and Cloud Native Apps with GIS/Geology Background.
         </p>
       <div class="social-media-div">
         <a href="https://github.com/Hamid997" class="icon-button github" target="_blank" rel="noopener noreferrer">
           <i  class="fab fa-github"></i>
           <span></span>
         </a>
         <a href="https://www.linkedin.com/in/abdelhamid-birouk/" class="icon-button linkedin" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-linkedin-in"></i>
           <span></span>
         </a>
         <a href="mailto:hamid.birouk0597@gmail.com" class="icon-button google" target="_blank" rel="noopener noreferrer">
           <i class="fas fa-envelope"></i>
           <span></span>
         </a>
         <a href="https://www.facebook.com/AbdelhamidBirouk01" class="icon-button facebook" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-facebook-f"></i>
           <span></span>
         </a>
         <a href="https://stackoverflow.com/users/10805605/habi209718" class="icon-button stack-overflow" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-stack-overflow"></i>
           <span></span>
         </a>
         <a href="https://www.facebook.com/AbdelhamidBirouk01" class="icon-button youtube" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-youtube"></i>
            <span></span>
         </a>
         <a href="https://www.facebook.com/AbdelhamidBirouk01" class="icon-button twitter" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-square-x-twitter"></i>
            <span></span>
          </a>
          <a href="https://www.facebook.com/AbdelhamidBirouk01" class="icon-button instagram" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram"></i>
            <span></span>
          </a>
          <a href="https://www.frontendmentor.io/" target="_blank">
          <img src="/icon-frontend-mentor.svg" alt="FrontEnd mentor">
      </a>

       </div>
       <div class="button-greeting-div">
         <div><a class="contact-button" href="#contact">Contact me</a></div>
         <div><a class="resume-button"
             href="https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
             target="_blank">See my resume</a></div>
       </div>
     </div>
     `;
 }


      //  A passionate Full Stack Software Developer having an experience
      //    of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool
      //    libraries and frameworks.

      // <h1 class="greeting-text"> HI ALL, I'm Abdelhamid </h1>
      // <p class="greeting-text-p subTitle">
      // Abdelhamid Birouk , 26 ans, est un développeur React talentueux avec une solide formation universitaire en
      // sciences de la Terre et de l'Univers et des diplômes en SIG. Doté de certificats Coursera en développement
      // front-end et back-end, ainsi que d'une expérience des applications cloud natives, Abdelhamid recherche
      // activement un poste de développement front-end, avec une expertise particulière en React, afin d'exploiter
      // ses compétences et de contribuer à des projets de développement web innovants.
      //   </p>


// export function setHero(element) {
//   // Create the main hero div
//   const heroDiv = document.createElement('div');

//   // Create the greeting text
//   const greetingText = document.createElement('h1');
//   greetingText.classList.add('greeting-text');
//   greetingText.textContent = "Hi all, I'm Abdelhamid";

//   // Create the greeting paragraph
//   const greetingTextP = document.createElement('p');
//   greetingTextP.classList.add('greeting-text-p', 'subTitle');
//   greetingTextP.textContent = "A passionate Full Stack Software Developer having an experience " +
//       "of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool " +
//       "libraries and frameworks.";

//   // Create the social media links
//   const socialMediaDiv = document.createElement('div');
//   socialMediaDiv.classList.add('social-media-div');

//   const socialMediaLinks = [
//       { href: 'https://github.com/saadpasta', class: 'icon-button github', text: 'GitHub' },
//       { href: 'https://www.linkedin.com/in/saadpasta/', class: 'icon-button linkedin', text: 'LinkedIn' },
//       { href: 'mailto:saadpasta70@gmail.com', class: 'icon-button google', text: 'Email' },
//       { href: 'https://gitlab.com/saadpasta', class: 'icon-button gitlab', text: 'GitLab' },
//       { href: 'https://www.facebook.com/saad.pasta7', class: 'icon-button facebook', text: 'Facebook' },
//       { href: 'https://medium.com/@saadpasta', class: 'icon-button medium', text: 'Medium' },
//       { href: 'https://stackoverflow.com/users/10422806/saad-pasta', class: 'icon-button stack-overflow', text: 'Stack Overflow' }
//   ];

//   socialMediaLinks.forEach(link => {
//       const socialMediaLink = document.createElement('a');
//       socialMediaLink.href = link.href;
//       socialMediaLink.classList.add(link.class);
//       socialMediaLink.target = '_blank';
//       socialMediaLink.rel = 'noopener noreferrer';
//       socialMediaLink.textContent = link.text;

//       socialMediaDiv.appendChild(socialMediaLink);
//   });

//   // Create the buttons
//   const buttonGreetingDiv = document.createElement('div');
//   buttonGreetingDiv.classList.add('button-greeting-div');

//   const contactButtonDiv = document.createElement('div');
//   const contactButton = document.createElement('a');
//   contactButton.classList.add('main-button');
//   contactButton.href = '#contact';
//   contactButton.textContent = 'Contact me';
//   contactButtonDiv.appendChild(contactButton);

//   const resumeButtonDiv = document.createElement('div');
//   const resumeButton = document.createElement('a');
//   resumeButton.classList.add('main-button');
//   resumeButton.href = 'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing';
//   resumeButton.target = '_blank';
//   resumeButton.textContent = 'See my resume';
//   resumeButtonDiv.appendChild(resumeButton);

//   buttonGreetingDiv.appendChild(contactButtonDiv);
//   buttonGreetingDiv.appendChild(resumeButtonDiv);

//   // Append elements to the main hero div
//   heroDiv.appendChild(greetingText);
//   heroDiv.appendChild(greetingTextP);
//   heroDiv.appendChild(socialMediaDiv);
//   heroDiv.appendChild(buttonGreetingDiv);

//   // Append the main hero div to the provided element
//   element.appendChild(heroDiv);
// }

// Usage: Call setHero and pass in the element where you want to create the hero section.
// For example:
// setHero(document.getElementById('hero-container'));
