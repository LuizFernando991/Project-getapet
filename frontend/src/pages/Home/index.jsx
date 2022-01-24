import { useState, useEffect, useRef } from 'react'
import * as Styled from './styles'
import { IoChevronForwardSharp, IoChevronBackSharp } from 'react-icons/io5'
import { usePet } from '../../hooks/usePet'
import { PetCardHome } from '../../components/PetCardHome'
import { Pagination } from '../../components/Pagination'

export const Home = ()=> {

  const [ slider, setSlider ] = useState(0)
  const [ page, setPage ] = useState(1)
  const [ newPets, setNewPets ] = useState('')
  const [ allPets, setAllPets ] = useState([])
  const [ numberOfPages, setNumberOfPages ] = useState(0)
  const isMounted = useRef(true)

  const { getNewPets, getAllPets } = usePet()

  useEffect(()=>{
    getNewPets().then((res)=>{ 
      if(isMounted.current){
        setNewPets(res)
      }
    })
    
    return ()=>{isMounted.current=false}
  }, [getNewPets])

  useEffect(()=>{
    isMounted.current=true
    getAllPets(page).then((res)=> {
      if(isMounted.current){
        setAllPets(res.pets)
        setNumberOfPages(res.numberOfPages)
      }
    })
    return ()=>{isMounted.current=false}
  }, [page, getAllPets])

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

  if(allPets.length > 0){
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
      <Styled.H1>Nossos Pets</Styled.H1>
      <Styled.AllPetsContainer>
        { allPets.map(pet => <PetCardHome key={pet._id} pet={pet}/>)}
      </Styled.AllPetsContainer>
      <Pagination numberOfPages={numberOfPages} page={page} setPage={setPage} />
      </>
      
    )
  }else{
    return <Styled.NoPets><h1>Ainda não temos pets cadastrados :( </h1></Styled.NoPets>
  }

}


