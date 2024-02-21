import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h
} from "snabbdom";

const patch = init([
  
  classModule,
  propsModule, 
  styleModule, 
  eventListenersModule 
]);


  export default function element(tagName,content='',id,onClick) {
    
    const onCreate = (vnode) => {
      console.log('Component created:', vnode);
    }
    
    const onUpdate = (oldVnode, vnode) => {
      console.log('Component updated:', vnode);
    }
    
    const onDestroy = (vnode) => {
      console.log('Component destroyed:', vnode);
    }

    const properties = {  
      on: {
        click: (e) => onClick ? onClick(e) : null
      },
      hook: {
        create: onCreate,
        update: onUpdate,
        destroy: onDestroy
      },
      style: { fontStyle: 'italic' } }
        
      const newnode =  h(`${tagName}#${id}`, properties, `${content}`);
      var oldVnode = document.getElementById(`${id}`)
      patch(oldVnode,newnode)

  }
