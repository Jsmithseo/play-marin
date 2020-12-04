import React from "react"
import PropTypes from "prop-types"
import Header from "./header"

const LayoutTwo = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

LayoutTwo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutTwo
