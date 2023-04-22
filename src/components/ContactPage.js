import React, { useContext } from 'react'
import {
  CButton,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
} from '@coreui/react'
import { PageRefContext } from 'src/contexts/PageRefContext'

const ContactPage = () => {
  const { contactRef } = useContext(PageRefContext)

  return (
    <>
      <CContainer ref={contactRef}>
        <div className="p-5 mb-2 bg-warning text-white" style={{ height: '1000px' }}>
          <div
            style={{
              padding: '100px',
            }}
          >
            <CFormLabel htmlFor="contactFormId" style={{ fontSize: '40px' }}>
              Contact Me
            </CFormLabel>
            <CForm id="contactFormId">
              <div className="mb-3">
                <CFormLabel htmlFor="contactFormName">Name</CFormLabel>
                <CFormInput type="text" id="contactFormName" aria-describedby="emailHelp" />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="contactFormEmail">Email address</CFormLabel>
                <CFormInput type="email" id="contactFormEmail" aria-describedby="emailHelp" />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="contactFormEnquiry">Type of enquiry</CFormLabel>
                <CFormSelect
                  id="contactFormEnquiry"
                  aria-label="Default select example"
                  options={[
                    'Open this select menu',
                    { label: 'One', value: '1' },
                    { label: 'Two', value: '2' },
                    { label: 'Three', value: '3', disabled: true },
                  ]}
                />
              </div>

              <div className="mb-3">
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  label="Your message"
                  rows={10}
                  text="Must be 8-20 words long."
                />
              </div>

              <div className="mb-3">
                <CButton type="submit" color="primary">
                  Submit
                </CButton>
              </div>
            </CForm>
          </div>
        </div>
      </CContainer>
    </>
  )
}

export default ContactPage
