import createTitle from './module.js'
import './main.css'
import logo from './logo.png'
const title = createTitle()
document.body.append(title)
// 在body中插入图片
const img = new Image()
img.src = logo
document.body.append(img)
