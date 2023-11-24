import { useLoaderData } from "react-router-dom"
import Container from "../Shared/Container"
import Header from "./Header"
import RoomInfo from "./roomInfo"
import RoomReservation from "./RoomReservation"

const RoomDetails = () => {
  const room=useLoaderData()
  return (
    <Container>
        <div className="max-w-screen-lg mx-auto">
        <Header roomData={room}> </Header>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-10 mt-10">
            <RoomInfo roomData={room}/>
           <RoomReservation roomData={room}> </RoomReservation>
        </div>
        </div>
    </Container>
  )
}
export default RoomDetails