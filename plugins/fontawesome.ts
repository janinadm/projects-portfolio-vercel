import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSun, faMoon, faBell, faTimes } from '@fortawesome/free-solid-svg-icons'
import { defineNuxtPlugin } from '#app'

library.add(faGithub, faLinkedin, faWhatsapp, faGoogle, faEnvelope, faSun, faMoon, faBell, faTimes)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
