


export  default (function(){
        let state
    function useState(intialvalue){
         state = state||intialvalue

        function setState(newstate,component){
            state = newstate
            render(component)

        }
        return[state,setState]
    }

     
    function render(component){
       const a = component()
        a.show()
       
    }
     
   

    return{useState,render}

})()