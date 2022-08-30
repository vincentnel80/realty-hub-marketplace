/*import { useNavigate, useLocation } from 'react-router-dom'
import { getAuth, updateProfile } from 'firebase/auth'*/
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

import Navbar from '../navbar/Navbar'
import DrawerComp from '../drawercomp/DrawerComp'
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded'
//import DrawerComp from "./Drawer";

import './pageHeader.scss'

function PageHeader() {
  /* new menu */
  const [value, setValue] = useState()
  const theme = useTheme()
  console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  console.log(isMatch)
  /* end new menu */
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
    <>
      <AppBar sx={{ background: '#e60598' }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: 'scale(2)' }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>
                Realty Hub
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: 'auto' }}
                indicatorColor="secondary"
                textColor="inherit"
                value={0}
                onChange={(e, value) => setValue(value)}
              >
                <Navbar />
              </Tabs>

              {isUserAuthed !== null ? (
                <Button
                  sx={{ marginLeft: 'auto' }}
                  type="button"
                  color="secondary"
                  variant="contained"
                  onClick={onLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  sx={{ marginLeft: 'auto' }}
                  type="button"
                  color="primary"
                  variant="contained"
                  onClick={onLogin}
                >
                  Login
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default PageHeader
