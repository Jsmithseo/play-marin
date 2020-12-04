import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Banner = () => (
  <div
    style={{
      padding: `5px 10px 5px 10px`,
      backgroundImage: `linear-gradient(115deg, #007acc, #0062a3)`,
      color: `#ffffff`,
      margin: `auto`,
      display: `flex`,
    }}
  >
    <p
      style={{
        margin: `auto`,
        fontFamily: `avenir`,
      }}
    >
      We are offering complimentary dinners for family's affected by COVID-19.
    </p>
  </div>
)

export default Banner
