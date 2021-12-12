import * as Styled from './styles'
import { useState, useEffect } from 'react'

import { IoCloseSharp } from 'react-icons/io5'


import EventEmitter from '../../helpers/EventEmmiter'



export const Message =()=>{

    const [ isActived, setIsActived ] = useState(false)
    const [ message, setMessage ] = useState('')
    const [ type, setType ] = useState('')

    useEffect(()=>{

        EventEmitter.addListener('flash', ({message, type})=>{
            setIsActived(true)
            setMessage(message)
            setType(type)
            
            setTimeout(()=>{
                setIsActived(false)
            }, 5000)

        })

        return ()=>{EventEmitter.removeLister('flash')}
    }, [])

    return(
        <Styled.Message isActived={isActived} type={type}>
            {message}
            <IoCloseSharp onClick={()=> setIsActived(false)} className='button'/>
        </Styled.Message>
    )

}