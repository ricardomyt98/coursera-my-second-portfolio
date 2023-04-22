import React, { createContext, useRef } from 'react'
import PropTypes from 'prop-types'

export const PageRefContext = createContext()

export const PageRefProvider = ({ children }) => {
  const projectRef = useRef()
  const contactRef = useRef()

  return (
    <PageRefContext.Provider
      value={{
        projectRef,
        contactRef,
      }}
    >
      {children}
    </PageRefContext.Provider>
  )
}

PageRefProvider.propTypes = {
  children: PropTypes.node,
}
