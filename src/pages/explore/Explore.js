import { Link } from 'react-router-dom'
import Slider from '../../components/slider/Slider'
import './explore.scss'
import rentCategoryImage from '../../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../../assets/jpg/sellCategoryImage.jpg'

function Explore() {
  return (
    <main id="explore" className="explore">
      <p className="pageHeader">Explore</p>
      <Slider />

      <p className="exploreCategoryHeading">Categories</p>
      <div className="exploreCategories">
        <Link to="/category/rent">
          <img
            src={rentCategoryImage}
            alt="rent"
            className="exploreCategoryImg"
          />
          <p className="exploreCategoryName">Places for rent</p>
        </Link>
        <Link to="/category/sale">
          <img
            src={sellCategoryImage}
            alt="sell"
            className="exploreCategoryImg"
          />
          <p className="exploreCategoryName">Places for sale</p>
        </Link>
      </div>
    </main>
  )
}

export default Explore
