import React from 'react'
import { categories } from './CategoriesData'
import CategoriesBox from './CategoriesBox'
import Container from '../../Shared/Container'
import { useSearchParams } from 'react-router-dom'

const Categories = () => {
  const [params, setparams]=useSearchParams()
  const category=params.get('category')
  return (
    <Container>
      <div className='flex justify-center items-center gap-3 overflow-x-auto  py-2 mb-4 custome-scrollbar'>
        {categories.map(categori => <CategoriesBox key={categori.icon} label={categori.label} icon={categori.icon} selected={category=== categori.label}> </CategoriesBox>)}</div>
    </Container>
  )
}

export default Categories