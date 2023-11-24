import React, { useEffect, useState } from 'react'
import Card from './Card'
import Container from '../Shared/Container'
import { useSearchParams } from 'react-router-dom'
import Heading from '../Heading'
import Loader from '../Shared/Loader'
import { getAllRooms } from '../../apis/rooms'

const Rooms = () => {
  const [params, setparams] = useSearchParams()
  const category = params.get('category')
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllRooms()
      .then(data => {
        if (category) {
          const filtered = data.filter(room => room.category === category)
          setRooms(filtered)
        } else setRooms(data)
        setLoading(false)

      })
  }, [category])
  if (loading) {
    return <Loader> </Loader>
  }
  return (
    <Container>
      {
        rooms.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
            rooms.map(room => <Card key={room._id} room={room}></Card>)
          }
        </div> : <div className='h-[calc(100vh-300px)] flex items-center justify-center'>
          <Heading title='No Rooms Available In This Category!' subtitle='Please Select Other Categories' center={true}> </Heading>
        </div>
      }
    </Container>
  )
}

export default Rooms