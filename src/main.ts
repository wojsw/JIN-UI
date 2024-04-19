import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

import "./index.scss"
import JinUi from '../build'
// import Button from './button'

createApp(App).use(JinUi).mount("#app")
