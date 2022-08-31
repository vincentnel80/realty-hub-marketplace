import { useState, useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { toast } from 'react-toastify'

import { Button } from '@mui/material'
import TextareaAutosize from '@mui/base/TextareaAutosize'

//import './Contact.scss'

function Contact() {
  const [message, setMessage] = useState('')
  const [landlord, setLandlord] = useState(null)
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useParams()

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, 'users', params.landlordId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setLandlord(docSnap.data())
      } else {
        toast.error('Could not get landlord data')
      }
    }

    getLandlord()
  }, [params.landlordId])

  const onChange = (e) => setMessage(e.target.value)

  return (
    <>
      {landlord !== null && (
        <main id="contactLandlord" className="pageContainer">
          <div className="contactLandlord">
            <p className="landlordName">Contact {landlord?.name}</p>
          </div>

          <form className="messageForm">
            <div className="messageDiv">
              <label htmlFor="message" className="messageLabel">
                Message
              </label>
              <TextareaAutosize
                name="message"
                id="message"
                className="textarea"
                style={{ minHeight: 80 }}
                value={message}
                onChange={onChange}
              ></TextareaAutosize>
            </div>

            <a
              href={`mailto:${landlord.email}?Subject=${searchParams.get(
                'listingName'
              )}&body=${message}`}
            >
              <Button
                sx={{ marginLeft: 'auto' }}
                type="button"
                color="primary"
                variant="contained"
              >
                Send Message
              </Button>
            </a>
          </form>
        </main>
      )}
    </>
  )
}

export default Contact
