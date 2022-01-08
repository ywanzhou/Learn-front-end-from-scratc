{
  /* <div class='info'>
  <ul>
    <li>一碗周</li>
    <li>前端造梦师</li>
    <li>不熬夜</li>
  </ul>
  <p>这是一段文字</p>
</div> */
}
const vNode = {
  type: 'div',
  props: {
    class: 'info',
  },
  children: [
    {
      type: 'ul',
      children: [
        { type: 'li', children: '一碗周' },
        { type: 'li', children: '前端造梦师' },
        { type: 'li', children: '不熬夜' },
      ],
    },
    { type: 'p', children: '这是一段文字' },
  ],
}
