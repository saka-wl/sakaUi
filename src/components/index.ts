
import Button from "./comp/Button.vue"

import type { App } from 'vue'

const components = [
  Button
]

export function install(app: App, options?: { injectComponents?: Array<string> }) {
  if (!options?.injectComponents) {
    components.forEach(component => {
      app.component(component.name || "", component)
    })
  } else {
    components.forEach(component => {
      if (options.injectComponents?.includes(component.name || "")) {
        app.component(component.name || "", component)
      }
    })
  }
}

export default {
  install
}

export {
  Button
}