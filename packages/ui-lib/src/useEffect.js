

export  default (function(){
    let mounted = false

 function effect (callback,dep){
    if(!mounted){
       
        callback()
        mounted = true
    }
    else(
      
        dep.forEach(element => callback())

    )
    
 }

 
 


return{effect}

})()