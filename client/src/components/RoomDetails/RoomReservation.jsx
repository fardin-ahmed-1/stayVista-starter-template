import React, { useState } from 'react'
import Button from '../Button/Button'
import Calender from './Calender'
import { formatDistance } from 'date-fns'
const RoomReservation = ({ roomData }) => {

    var result = parseInt(formatDistance(
      new Date(roomData?.to),
      new Date(roomData?.from)
    ))
  const totalPrice = result * roomData?.price

const [value, setValue] = useState([{
  startDate: new Date(roomData?.from),
  endDate: new Date(roomData?.to),
  key: 'selection'
}])
  return (
    <div className='bg-white rounded-xl border-[1px] col-span-3 border-neutral-200 overflow-hidden'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {roomData.price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <div className='flex justify-center'>
        <Calender value={value} />
      </div>
      <hr />
      <div className='p-4'>
        <Button label='Reserve' />
      </div>
      <hr />
      <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {totalPrice}</div>

      </div>
    </div>
  )
}
export default RoomReservation