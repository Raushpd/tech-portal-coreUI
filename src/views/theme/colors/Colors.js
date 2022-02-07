import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCardFooter,
  CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CForm,
  CDropdownMenu,
  CDropdownItem,
  CDropdown,
  CDropdownToggle,
  CCardTitle,
  CCollapse,
} from '@coreui/react'
const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-medium-emphasis">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-medium-emphasis">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Colors = () => {
  const [visibleCompany, setVisibleCompany] = useState(false)
  const [visibleUser, setVisibleUser] = useState(false)
  const [visibleCrop, setVisibleCrop] = useState(false)
  const [visibleMachine, setVisibleMachine] = useState(false)
  const [visibleVariety, setVisibleVariety] = useState(false)
  const [visibleMode, setVisibleMode] = useState(false)
  const [visibleRelease, setVisibleRelease] = useState(false)
  const [visiblePurpose, setVisiblePurpose] = useState(false)
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CForm className="row g-3">
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <CDropdown>
                <CCol>
                  <CCardTitle>Select Company</CCardTitle>
                  <CDropdownToggle color="secondary" size="lg">
                    Company
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another action</CDropdownItem>
                    <CDropdownItem>Something else here</CDropdownItem>
                  </CDropdownMenu>
                  <CButton size="lg" onClick={() => setVisibleCompany(!visibleCompany)}>
                    Add
                  </CButton>
                  <CCollapse visible={visibleCompany}>
                    <CCard className="mt-1">
                      <CCardBody>
                        <CInputGroup className="mb-1">
                          <CFormInput
                            placeholder="Company's Name"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <CButton
                            type="button"
                            color="secondary"
                            variant="outline"
                            id="button-addon2"
                            size="xs"
                          >
                            Add New Company
                          </CButton>
                        </CInputGroup>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CDropdown>
              <CDropdown>
                <CCol>
                  <CCardTitle>Select User</CCardTitle>
                  <CDropdownToggle color="secondary" size="lg">
                    User
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another action</CDropdownItem>
                    <CDropdownItem>Something else here</CDropdownItem>
                  </CDropdownMenu>
                  <CButton size="lg" onClick={() => setVisibleUser(!visibleUser)}>
                    Add
                  </CButton>
                  <CCollapse visible={visibleUser}>
                    <CCard className="mt-1">
                      <CCardBody>
                        <CInputGroup className="mb-1">
                          <CFormInput
                            placeholder="User's Name"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <CButton
                            type="button"
                            color="secondary"
                            variant="outline"
                            id="button-addon2"
                          >
                            Add New User
                          </CButton>
                        </CInputGroup>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CDropdown>

              <CDropdown>
                <CCol>
                  <CCardTitle>Select Crop</CCardTitle>
                  <CDropdownToggle color="secondary" size="lg">
                    Crop
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another action</CDropdownItem>
                    <CDropdownItem>Something else here</CDropdownItem>
                  </CDropdownMenu>
                  <CButton size="lg" onClick={() => setVisibleCrop(!visibleCrop)}>
                    Add
                  </CButton>
                  <CCollapse visible={visibleCrop}>
                    <CCard className="mt-1">
                      <CCardBody>
                        <CInputGroup className="mb-1">
                          <CFormInput
                            placeholder="Crop's Name"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <CButton
                            type="button"
                            color="secondary"
                            variant="outline"
                            id="button-addon2"
                          >
                            Add New Crop
                          </CButton>
                        </CInputGroup>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CDropdown>

              <CDropdown>
                <CCol>
                  <CCardTitle>Select Variety</CCardTitle>
                  <CDropdownToggle color="secondary" size="lg">
                    Variety
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another action</CDropdownItem>
                    <CDropdownItem>Something else here</CDropdownItem>
                  </CDropdownMenu>
                  <CButton size="lg" onClick={() => setVisibleVariety(!visibleVariety)}>
                    Add
                  </CButton>
                  <CCollapse visible={visibleVariety}>
                    <CCard className="mt-1">
                      <CCardBody>
                        <CInputGroup className="mb-1">
                          <CFormInput
                            placeholder="Variety's Name"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <CButton
                            type="button"
                            color="secondary"
                            variant="outline"
                            id="button-addon2"
                          >
                            Add New Variety
                          </CButton>
                        </CInputGroup>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CDropdown>
            </div>
            <CCol xs={12}></CCol>
            <CCol xs={12}></CCol>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <CDropdown>
                <CCol>
                  <CCardTitle>Select Machine</CCardTitle>
                  <CDropdownToggle color="secondary" size="lg">
                    Machine
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another action</CDropdownItem>
                    <CDropdownItem>Something else here</CDropdownItem>
                  </CDropdownMenu>
                  <CButton size="lg" onClick={() => setVisibleMachine(!visibleMachine)}>
                    Add
                  </CButton>
                  <CCollapse visible={visibleMachine}>
                    <CCard className="mt-1">
                      <CCardBody>
                        <CInputGroup className="mb-1">
                          <CFormInput
                            placeholder="Machine's Name"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <CButton
                            type="button"
                            color="secondary"
                            variant="outline"
                            id="button-addon2"
                          >
                            Add New Machine
                          </CButton>
                        </CInputGroup>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CDropdown>
              <CDropdown>
                <CCol>
                  <CCardTitle>Select Mode</CCardTitle>
                  <CDropdownToggle color="secondary" size="lg">
                    Mode
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another action</CDropdownItem>
                    <CDropdownItem>Something else here</CDropdownItem>
                  </CDropdownMenu>
                  <CButton size="lg" onClick={() => setVisibleMode(!visibleMode)}>
                    Add
                  </CButton>
                  <CCollapse visible={visibleMode}>
                    <CCard className="mt-1">
                      <CCardBody>
                        <CInputGroup className="mb-1">
                          <CFormInput
                            placeholder="Mode"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <CButton
                            type="button"
                            color="secondary"
                            variant="outline"
                            id="button-addon2"
                          >
                            Add New Mode
                          </CButton>
                        </CInputGroup>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CDropdown>
              <CDropdown>
                <CCol>
                  <CCardTitle>Select Relaese Type</CCardTitle>
                  <CDropdownToggle color="secondary" size="lg">
                    Relaese Type
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another action</CDropdownItem>
                    <CDropdownItem>Something else here</CDropdownItem>
                  </CDropdownMenu>
                  <CButton size="lg" onClick={() => setVisibleRelease(!visibleRelease)}>
                    Add
                  </CButton>
                  <CCollapse visible={visibleRelease}>
                    <CCard className="mt-1">
                      <CCardBody>
                        <CInputGroup className="mb-1">
                          <CFormInput
                            placeholder="Relaese Type"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <CButton
                            type="button"
                            color="secondary"
                            variant="outline"
                            id="button-addon2"
                          >
                            Add New Relaese Type
                          </CButton>
                        </CInputGroup>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CDropdown>
              <CDropdown>
                <CCol>
                  <CCardTitle>Select Purpose</CCardTitle>
                  <CDropdownToggle color="secondary" size="lg">
                    Purpose
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem>Another action</CDropdownItem>
                    <CDropdownItem>Something else here</CDropdownItem>
                  </CDropdownMenu>
                  <CButton size="lg" onClick={() => setVisiblePurpose(!visiblePurpose)}>
                    Add
                  </CButton>
                  <CCollapse visible={visiblePurpose}>
                    <CCard className="mt-1">
                      <CCardBody>
                        <CInputGroup className="mb-1">
                          <CFormInput
                            placeholder="Purpose"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <CButton
                            type="button"
                            color="secondary"
                            variant="outline"
                            id="button-addon2"
                          >
                            Add New Purpose
                          </CButton>
                        </CInputGroup>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                </CCol>
              </CDropdown>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
      {/* <CCard className="mb-4">
        <CCardHeader>
          Theme colors
          <DocsLink href="https://coreui.io/docs/utilities/colors/" />
        </CCardHeader>
        <CCardBody>
          <CRow>
            <ThemeColor className="bg-primary">
              <h6>Brand Primary Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-secondary">
              <h6>Brand Secondary Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-success">
              <h6>Brand Success Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-danger">
              <h6>Brand Danger Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-warning">
              <h6>Brand Warning Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-info">
              <h6>Brand Info Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-light">
              <h6>Brand Light Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-dark">
              <h6>Brand Dark Color</h6>
            </ThemeColor>
          </CRow>
        </CCardBody>
      </CCard> */}
    </>
  )
}

export default Colors
