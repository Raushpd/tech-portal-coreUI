import React from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

function Test() {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Theme colors
          <DocsLink href="https://coreui.io/docs/utilities/colors/" />
        </CCardHeader>
        <CCardBody>
          <h1>hii</h1>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Test
