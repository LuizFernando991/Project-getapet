import * as Styled from './styles'
import { useState, useEffect, useRef } from 'react'

import { IoCloseSharp } from 'react-icons/io5'


import EventEmitter from '../../helpers/EventEmmiter'



export const Message =()=>{

    const [ isActived, setIsActived ] = useState(false)
    const [ message, setMessage ] = useState('')
    const [ type, setType ] = useState('')
    const isMounted = useRef(true)


    useEffect(()=>{
        if(isMounted.current){
            EventEmitter.addListener('flash', ({message, type})=>{
                setIsActived(true)
                setMessage(message)
                setType(type)
                setTimeout(()=>{
                    setIsActived(false)
                }, 1800)
            })
        }
        return ()=> isMounted.current = false
        
    }, [])


    return(
        <>
            {isActived && 
                <Styled.Message isActived={isActived} type={type}>
                    {message}
                    <IoCloseSharp onClick={()=> setIsActived(false)} className='button'/>
                </Styled.Message>
            }
        
        </>
    )

}