import Rooms from '../../components/Rooms/Rooms'
import Categories from "../../components/Rooms/Categorys/Categories"
import { useLoaderData } from "react-router-dom"
const Home = () => {
  return (
    <>
      <Categories></Categories>
      <Rooms> </Rooms>
    </>
  )
}
export default Home
