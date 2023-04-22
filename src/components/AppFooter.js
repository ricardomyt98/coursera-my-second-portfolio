import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div style={{ width: '100%', textAlign: 'center' }}>
        Rick
        <span className="ms-1">&copy; 2023</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
