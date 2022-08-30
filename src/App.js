import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import PrivateRoute from './components/PrivateRoute'
//import Navbar from './components/Navbar'
import { PageHeader, PageFooter, PrivateRoute } from './components' // trick way to reduc

import Explore from './pages/explore/Explore'
import Offers from './pages/offers/Offers'
import Category from './pages/category/Category'
import Profile from './pages/profile/Profile'
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signup/SignUp'
import ForgotPassword from './pages/forgotpassword/ForgotPassword'
import CreateListing from './pages/createlisting/CreateListing'
import EditListing from './pages/editlisting/EditListing'
import Listing from './pages/listing/Listing'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
      <Router>
        <PageHeader />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/edit-listing/:listingId" element={<EditListing />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path="/contact/:landlordId" element={<Contact />} />
        </Routes>
        <PageFooter />
      </Router>

      <ToastContainer />
    </>
  )
}

export default App
