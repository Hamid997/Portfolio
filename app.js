import './styles/styles.css'
import { setHeader } from './js/header'
import { setHero } from './js/hero'
import { setEducation } from './js/education'
import { setSkills } from './js/skills'
import { setCertifications } from './js/certifications'
import { setProjects } from './js/projects'
import { setContact } from './js/contact'
import { setFooter } from './js/footer'

document.querySelector('#app').innerHTML = `
  <div>
    <header class="header" id="header">
    </header>

    <section class="hero" id="hero">
    </section>

    <main>
      <section class="skills component-box" id="skills">
      </section>

      <section class="projects component-box" id="projects">
      </section>

      <section class="education component-box" id="education">
      </section>

      <section class="Accomplishment component-box" id="Certifications">
      </section>

      <section class="contact component-box" id="contact">
      </section>
    </main>

    <footer class="footer" id="footer">
    </footer>
  </div>
`

setHeader(document.querySelector('#header'))
setHero(document.querySelector('#hero'))
setEducation(document.querySelector('#education'))
setCertifications(document.querySelector('#Certifications'))
setSkills(document.querySelector('#skills'))
setProjects(document.querySelector('#projects'))
setContact(document.querySelector('#contact'))
setFooter(document.querySelector('#footer'))