import React from 'react'


const Sidebar = () => {
  
  return (
    <div class="ui raised segments pushable">
  <div class="ui inverted vertical labeled icon ui overlay left thin sidebar menu">
    <a class="item">Home</a>
    <a class="item">Games</a>
    <a class="item">Channels</a>
  </div>
  <div class="ui secondary segment">
    <h3 class="ui header">Clickable area</h3>
    <p>When you will click there, the sidebar will be closed.</p>
  </div>
  <div class="ui segment">
    <h3 class="ui header">Application Content</h3>
    <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" />
  </div>
</div>
  )
}

export default Sidebar