import EventEmitter from "../helpers/EventEmmiter"
 


export const useFlashMessage =()=>{

    

    const setFlashMessage =(msg, type)=>{

       EventEmitter.emit('flash', {
            message : msg,
            type : type,

        })
    }


    return [ setFlashMessage ]
}