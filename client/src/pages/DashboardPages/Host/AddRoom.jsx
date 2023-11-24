import React, { useState } from 'react'
import AddRoomForm from '../../../components/Form/AddRoomForm'
import { uploadImage } from '../../../apis/Utils'
import useAuth from '../../../hooks/useAuth'

const AddRoom = () => {
  const [loading, setLoading] = useState(false)
  const [uploadButtonText, setuploadButtonText] = useState('Upload Image')
  const { user } = useAuth()
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const location = form.location.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const category = form.category.value;
    const title = form.title.value;
    const image = form.image.files[0];
    const price = form.price.value;
    const total_guest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const image_url = await uploadImage(image)
    const roomData = {
      location
      , category
      , title
      , price
      , total_guest
      , bedrooms
      , bathrooms
      , description
      , from
      , to
      , image: image_url?.data?.display_url
      , host: {
        name: user.displayName,
        email: user?.email,
        image: user?.photoURL
      }
    }

    console.table(roomData)

  }
  const handleDates = (ranges) => {
    setDates(ranges.selection)
  }
  const handleImageChange = (image) => {
    setuploadButtonText(image)
  }
  return (
    <div>
      <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} uploadButtonText={uploadButtonText} handleImageChange={handleImageChange} loading={loading}/>
    </div>
  )
}

export default AddRoom