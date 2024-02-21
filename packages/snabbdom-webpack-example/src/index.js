
import element from "./element"
import updateState from "./updatestate"
import useEffect from "./useEffect"




const onClick =() => {console.log("div clicked")
 } 



element('div','Click counter','test',onClick)




const effectMethod = useEffect
const stateMethod = updateState

function wrapper(){ 
  let [state,setState] = stateMethod.useState(1)
const  click=()=> setState(state+1,wrapper)
//   effectMethod.effect(() => {
//   console.log('Component mounted or updated')
//   return ()=>{console.log('cleanup')}
// }, [state]);

  return{
    
    show:()=> {
            element('h1',state,'test2',click)
            element('button','Click','test3',click)
        },
   
  }
}

const rendered = stateMethod.render(wrapper)

