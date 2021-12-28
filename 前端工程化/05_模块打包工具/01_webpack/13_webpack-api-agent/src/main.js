import createHeading from './heading.js'
import './main.css'
import logo from './logo.png'

const heading = createHeading()

document.body.append(heading)

const img = new Image()
img.src = logo

document.body.append(img)
