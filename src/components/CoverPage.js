import React from 'react'
import { CContainer, CImage } from '@coreui/react'

const CoverPage = () => {
  return (
    <>
      <CContainer style={{}}>
        <div
          className="p-5 mb-2 bg-primary text-white"
          style={{ textAlign: 'center', height: '1000px' }}
        >
          <div style={{ paddingTop: '200px', paddingBottom: '150px' }}>
            <CImage
              src={require('../assets/images/avatars/avatar.png')}
              style={{ borderRadius: '50%', width: '200px', height: '200px' }}
            />
            <h4 style={{ marginTop: '30px', marginBottom: '25px' }}>Hello, I am Rick!</h4>
            <h1>A front-end developer specializing in React</h1>
          </div>
        </div>
      </CContainer>
    </>
  )
}

export default CoverPage
