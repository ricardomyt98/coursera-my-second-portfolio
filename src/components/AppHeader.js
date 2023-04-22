import React, { useContext } from 'react'
import { CContainer, CHeader, CHeaderNav, CNavLink, CNavItem, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilEnvelopeOpen,
  cibGithub,
  cibLinkedin,
  cibStackoverflow,
  cibYoutube,
} from '@coreui/icons'
import { PageRefContext } from 'src/contexts/PageRefContext'

const AppHeader = () => {
  const { projectRef } = useContext(PageRefContext)
  const { contactRef } = useContext(PageRefContext)

  const goToProject = () => projectRef.current?.scrollIntoView({ behavior: 'smooth' })
  const goToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink href="https://gmail.com/">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://github.com/">
              <CIcon icon={cibGithub} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://www.linkedin.com/">
              <CIcon icon={cibLinkedin} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://stackoverflow.com/">
              <CIcon icon={cibStackoverflow} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://www.youtube.com/">
              <CIcon icon={cibYoutube} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CButton
              style={{
                background: 'none',
                border: 'none',
                color: 'black',
              }}
              onClick={() => {
                goToProject()
              }}
            >
              Projects
            </CButton>
          </CNavItem>
          <CNavItem>
            <CButton
              style={{
                background: 'none',
                border: 'none',
                color: 'black',
              }}
              onClick={() => {
                goToContact()
              }}
            >
              Contact Me
            </CButton>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
