/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const temaPrincipal = {
  dark: true,
  colors: {
    primary: 'linear-gradient(90deg, rgba(247,100,247,1) 0%, rgba(255,133,245,1) 38%, rgba(235,183,232,1) 100%)',
    secondary: '#9C27b0',
    accent: '#9C27b0',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  }
}



export default createVuetify({
  theme: {
    temaPrincipal
  },
})
