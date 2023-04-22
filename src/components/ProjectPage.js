import React, { useContext } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CFormLabel,
  CImage,
  CRow,
} from '@coreui/react'
import { PageRefContext } from 'src/contexts/PageRefContext'

const ProjectPage = () => {
  const { projectRef } = useContext(PageRefContext)

  return (
    <>
      <CContainer ref={projectRef}>
        <div className="p-5 mb-2 bg-success">
          <CFormLabel htmlFor="projectContent" style={{ fontSize: '40px', color: 'white' }}>
            Projects
          </CFormLabel>
          <div id="projectContent" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
            <CRow>
              <CCol sm={6}>
                <CCard>
                  <CCardBody>
                    <CImage
                      src={require('../assets/images/project/a.jpg')}
                      style={{ width: '100%', height: '350px' }}
                    />
                    <CCardTitle>Special title treatment</CCardTitle>
                    <CCardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CCardText>
                    <CButton href="#">Go somewhere</CButton>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol sm={6}>
                <CCard>
                  <CCardBody>
                    <CImage
                      src={require('../assets/images/project/b.jpg')}
                      style={{ width: '100%', height: '350px' }}
                    />
                    <CCardTitle>Special title treatment</CCardTitle>
                    <CCardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CCardText>
                    <CButton href="#">Go somewhere</CButton>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol sm={6}>
                <CCard>
                  <CCardBody>
                    <CImage
                      src={require('../assets/images/project/c.png')}
                      style={{ width: '100%', height: '250px' }}
                    />
                    <CCardTitle>Special title treatment</CCardTitle>
                    <CCardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CCardText>
                    <CButton href="#">Go somewhere</CButton>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol sm={6}>
                <CCard>
                  <CCardBody>
                    <CImage
                      src={require('../assets/images/project/d.png')}
                      style={{ width: '100%', height: '250px' }}
                    />
                    <CCardTitle>Special title treatment</CCardTitle>
                    <CCardText>
                      With supporting text below as a natural lead-in to additional content.
                    </CCardText>
                    <CButton href="#">Go somewhere</CButton>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </div>
        </div>
      </CContainer>
      {/* <CContainer sm>
        <div className="p-5 mb-2 bg-success text-white">
        <CRow>
        <CCol sm={6}>
        <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={require('../assets/images/react.jpg')} />
        <CCardBody>
        <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol sm={6}>
              <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src={require('../assets/images/react.jpg')} />
                <CCardBody>
                  <CCardTitle>Card title</CCardTitle>
                  <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the
                    card content.
                  </CCardText>
                  <CButton href="#">Go somewhere</CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>
      </CContainer> */}
    </>
  )
}

export default ProjectPage
