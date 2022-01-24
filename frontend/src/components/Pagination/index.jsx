import { IoArrowForwardSharp, IoArrowBackSharp } from 'react-icons/io5'
import * as Styled from './styles'


export const Pagination = ({numberOfPages, page, setPage})=>{

    const maxButtons = 3
    const maxLeftButtons = (maxButtons-1)/2
    const firstButton = Math.max(page - maxLeftButtons, 1)


    const handleLeftArrowClick = ()=>{
        if(page > 1){
            setPage(page-1)
        }
    }
    const handleRightArrowClick = ()=>{
        if(page < numberOfPages){
            setPage(page+1)
        }
    }

    return(
        <Styled.Ul>
            <li className='arrows'><button onClick={handleLeftArrowClick}><IoArrowBackSharp/></button></li>
            {Array.from({ length : maxButtons })
                .map((_, index)=> index+firstButton <= numberOfPages ? <li  key={index}><button className={index+firstButton === page ? 'selected' : ''} onClick={()=>setPage(index+firstButton)}>{index+firstButton}</button></li> : ''
            )}
            <li className='arrows'><button onClick={handleRightArrowClick}><IoArrowForwardSharp/></button></li>
        </Styled.Ul>
    )
}