import { useEffect, useState } from "react"
import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5'
import * as Styled from "./styles"

export const PetImages = ({pet})=>{

    
    const [ slider, setSlider ] = useState(0)
    const [ img, setImg ] = useState([])
    const [ mainImg, setMainImg ] = useState('')

    useEffect(()=>{
        if(pet){
            setImg(pet.images)
            setMainImg(pet.images[0])
        }
    }, [pet])
    

    const maxSlider = (img.length-3)*112

    const handleUpArrowClick = ()=>{
        if(slider > 0){
            setSlider(r => r-112)
        }

    }

    const handleDownArrowClick = ()=>{
        
        if(slider < maxSlider){
            setSlider(r => r+112)
        }
    }

    const handleOnPreviewImageClick = (img)=>{

        setMainImg(img)
    }
    
    return(
        <Styled.ImagesContainer>
            <Styled.PreviewImageContainer>
                { img.length > 3 ? <Styled.Arrows><IoChevronUpSharp onClick={handleUpArrowClick} /></Styled.Arrows> : ''}
                <Styled.Images>
                    <Styled.ImageSlider slider={slider}>
                        {img.length ? img.map((img, index)=> <img key={index} onClick={()=>handleOnPreviewImageClick(img)} src={`http://localhost:5000/images/pets/${img}`} alt={img} />) : ''}
                    </Styled.ImageSlider>
                </Styled.Images>
                { img.length > 3 ? <Styled.Arrows onClick={handleDownArrowClick} ><IoChevronDownSharp/></Styled.Arrows> : ''}
            </Styled.PreviewImageContainer>
            <Styled.MainImage>
                {img.length > 0 ? <img src={`http://localhost:5000/images/pets/${mainImg}`} alt={mainImg} /> : ''}
            </Styled.MainImage>
        </Styled.ImagesContainer>
    )

}