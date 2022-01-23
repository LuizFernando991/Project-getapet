import { useState, useEffect, useRef } from 'react'
import * as Styled from './styles'
import { IoChevronForwardSharp, IoChevronBackSharp } from 'react-icons/io5'
import { usePet } from '../../hooks/usePet'
import { PetCardHome } from '../../components/PetCardHome'

export const Home = ()=> {

  const [ slider, setSlider ] = useState(0)
  const [ page, setPage ] = useState(1)
  const [ newPets, setNewPets ] = useState('')
  const [ allPets, setAllPets ] = useState([])
  const isMounted = useRef(true)

  const { getNewPets, getAllPets } = usePet()

  useEffect(()=>{
    getNewPets().then((res)=>{ 
      if(isMounted.current){
        setNewPets(res)
      }
    })
    getAllPets(page).then((res)=> {
      if(isMounted.current){
        setAllPets(res)
      }
    })
    return ()=>{isMounted.current=false}
  }, [getNewPets, getAllPets, page])

  const handleOnRightClick = ()=>{
    if(slider < 600*(newPets.length-1)){
      setSlider( slider+600)
    }
  }

  const handleOnLeftClick = ()=>{

    if(slider > 0){
      setSlider( slider-600)
    }
  }


  return(
    <>
    <Styled.Container>
      <Styled.SliderContainer slider={slider}>
        { newPets.length > 0 ? 
        newPets.map( pet => <Styled.NewPetContainer img={`url(http://localhost:5000/images/pets/${pet.images[0]})`} key={pet._id}><h1>{pet.name}, {pet.age} {pet.age > 1 ? 'anos' : 'ano'}</h1></Styled.NewPetContainer>) 
        :
        <p>Não há pets</p>
        
        }
      </Styled.SliderContainer>
      <IoChevronForwardSharp onClick={handleOnRightClick} className='right-arrow'/>
      <IoChevronBackSharp onClick={handleOnLeftClick} className='left-arrow'/>
    </Styled.Container>
    <Styled.AllPetsContainer>
      <h1>Nossos Pets</h1>
      { allPets.map(pet => <PetCardHome key={pet._id} pet={pet}/>)}
    </Styled.AllPetsContainer>
    </>
    
  )

}


