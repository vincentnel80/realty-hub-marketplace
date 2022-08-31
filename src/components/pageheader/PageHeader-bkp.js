/*import { useNavigate, useLocation } from 'react-router-dom'
import { getAuth, updateProfile } from 'firebase/auth'*/

import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

import Navbar from '../navbar/Navbar'
import Button from '@mui/material/Button'
import './pageHeader.scss'

function PageHeader() {
  const auth = getAuth()
  let isUserAuthed = auth.currentUser

  //const displayName = isUserAuthed.displayName
  const navigate = useNavigate()
  const onLogout = () => {
    auth.signOut()
    //navigate('/')
    window.location.reload('/') // force a reload, is there a better way?
  }

  const onLogin = () => {
    // auth.signIn()
    navigate('/sign-in')
  }

  console.log(auth, 'auth')
  //console.log(auth.currentUser.displayName,"auth email")

  return (
    <header className="profileHeader">
      {/*header title should go on page*/}
      {/*replace booli logo*/}
      <div class="LC98E">
        <a href="/" class="undefined" aria-label="Förstasidan">
          <svg
            width="80"
            height="28"
            viewBox="0 0 80 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M79.5554 1.33912L75.7957 18.8415L71.1814 17.8762L74.9577 0.388672L79.5554 1.33912ZM78.468 24.8338C78.468 26.5503 77.0695 27.8375 75.3761 27.8375C73.6834 27.8375 72.3006 26.5503 72.3006 24.8338C72.3006 23.1172 73.6677 21.8292 75.3761 21.8292C77.0852 21.8292 78.468 23.1172 78.468 24.8338Z"
              fill="#FF620F"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M67.9359 4.44708C67.9359 5.70163 66.8495 6.78741 65.5345 6.78741C64.177 6.78741 63.1481 5.70163 63.1481 4.44708C63.1481 3.17774 64.177 2.14874 65.5345 2.14874C66.8495 2.14874 67.9359 3.17774 67.9359 4.44708ZM59.9811 25.6879H56.0976V2.23943H59.9811V25.6879ZM67.4849 25.6879H63.6015V8.96721H67.4849V25.6879ZM45.4665 22.8222C42.8878 22.8222 40.8372 20.8451 40.8372 17.2736C40.8372 13.8101 42.8878 11.8797 45.4665 11.8797C48.0768 11.8797 50.0958 13.8101 50.0958 17.2736C50.0958 20.8451 48.0768 22.8222 45.4665 22.8222ZM45.4665 8.58423C40.5889 8.58423 36.8757 12.0018 36.8757 17.2736C36.8757 22.6223 40.5889 26.1169 45.4665 26.1169C50.3441 26.1169 54.0565 22.6223 54.0565 17.2736C54.0565 12.0018 50.3441 8.58423 45.4665 8.58423ZM27.1293 22.8222C24.5505 22.8222 22.5 20.8451 22.5 17.2736C22.5 13.8101 24.5505 11.8797 27.1293 11.8797C29.7395 11.8797 31.7586 13.8101 31.7586 17.2736C31.7586 20.8451 29.7395 22.8222 27.1293 22.8222ZM27.1293 8.58423C22.2516 8.58423 18.5392 12.0018 18.5392 17.2736C18.5392 22.6223 22.2516 26.1169 27.1293 26.1169C32.0069 26.1169 35.7201 22.6223 35.7201 17.2736C35.7201 12.0018 32.0069 8.58423 27.1293 8.58423ZM3.91503 17.2588C3.91503 20.5698 5.84101 22.7911 8.66809 22.7911C11.4952 22.7911 13.4527 20.4765 13.4527 17.2588C13.4527 14.0403 11.4644 11.91 8.66809 11.91C5.87175 11.91 3.91503 14.1936 3.91503 17.2588ZM4.38095 11.1742C5.35931 9.74856 7.06849 8.53834 9.58496 8.53834C13.7483 8.53834 17.4142 11.8486 17.4142 17.2588C17.4142 22.669 13.7791 26.1169 9.58496 26.1169C7.08347 26.1169 5.3128 24.8452 4.38095 23.481H3.88349V25.6883H0V2.23912H3.88349V11.1742H4.38095Z"
              fill="black"
              fill-opacity="0.9"
            ></path>
          </svg>
        </a>
      </div>
      <Navbar />
      {/* <h2>{isUserAuthed !== null ? "it is not null: user is authed" : " it is null: user not authed"}</h2>*/}
      <div>
        {isUserAuthed !== null && (
          <span>Welcome: {isUserAuthed.displayName}</span>
        )}

        {isUserAuthed !== null ? (
          <Button
            type="button"
            color="secondary"
            variant="contained"
            className="logOut"
            onClick={onLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            type="button"
            color="primary"
            variant="contained"
            className="logOut"
            onClick={onLogin}
          >
            Login
          </Button>
        )}
      </div>

      {/* <button type='button' className='logOut' onClick={onLogout}>
      Logout
    </button> */}
    </header>
  )
}

export default PageHeader
