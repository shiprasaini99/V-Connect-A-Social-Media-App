import React from 'react'
import Home from './Home'
import Search from './Search'

const SidebarItems = () => {
  return (
    <>
      <Home/>
      <Search/>
      <Notifications />
	  <CreatePost />
	  <ProfileLink />
    </>
  )
}

export default SidebarItems
