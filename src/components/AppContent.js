import React from 'react'
import CoverPage from './CoverPage'
import ProjectPage from './ProjectPage'
import ContactPage from './ContactPage'

const AppContent = () => {
  return (
    <>
      <CoverPage />
      <ProjectPage />
      <ContactPage />
    </>
  )
}

export default React.memo(AppContent)
