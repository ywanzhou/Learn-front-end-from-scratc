import './module.css'
export default () => {
  // 创建一个DOM元素
  const element = document.createElement('h2')

  element.textContent = 'Hello 一碗周'
  element.classList.add('title')
  element.addEventListener('click', () => {
    alert('Hello webpack')
  })

  return element
}
