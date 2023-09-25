import Categories from '../components/Categories'
import Listings from '../components/Listings'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'

const Home = () => {
  return (
    <>
    <Navbar />
    <Slide />
    <Categories />
    <Listings />
    </>
  )
}

export default Home