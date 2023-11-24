import React from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from 'query-string';


const CategoriesBox = ({label, icon:Icon, selected}) => {
  const navigate = useNavigate();
  const [params, setparams]=useSearchParams()
  const handleClick=()=>{
    let currectQuery={}
    if(params){
      currectQuery= queryString.parse(params.toString())
      const updataQuery={...currectQuery, category: label}
      const url= queryString.stringifyUrl({
        url: '/',
        query: updataQuery,
      })
      navigate(url)
    }
  }
  params.get('category')
  return (
    <div onClick={handleClick} className={`flex flex-col cursor-pointer gap-2 p-3 items-center ${selected? 'border-b-2 border-black text-neutral-800':'text-neutral-500 border-b-2'}`}>
        <Icon size={26}> </Icon>
        <h1 className='text-sm font-medium'>{label}</h1>

    </div>
  )
}

export default CategoriesBox