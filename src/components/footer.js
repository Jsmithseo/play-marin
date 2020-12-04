import React from "react"
import styled from "@emotion/styled"
import Logo from "../images/play_logo_WHT.svg"
import { Container, Row, Col } from "react-bootstrap"
import Newsletter from "./newsletter.js"
import { Jumbotron, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./form.module.css"
import { Link } from "gatsby"
import { ExternalLink } from "react-external-link"
import { SocialIcon } from "react-social-icons"
import ButtonGroup from "react-bootstrap/ButtonGroup"

const Footer = () => {
  const StyledLink = styled(Link)`
    padding-left: 20px;
    display: flex;
    cursor: pointer;
    text-decoration: none;
    margin-right: 20px;
    border-bottom-width: 5px;
    position: relatve;
    font-family: avenir;
    color: #fff;
  `
  const activeStyle = {
    color: `#0B7BFF`,
  }
  return (
    <>
      <Jumbotron
        fluid
        style={{
          marginBottom: `0px`,
          paddingTop: `50px`,
          paddingBottom: `50px`,
          backgroundImage: "linear-gradient(#558EDE, #6514AF)",
        }}
      >
        <Container>
          <Row>
            <Col
              md={4}
              sm={12}
              style={{
                color: "white",
                fontFamily: "avenir",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h5>Select An Amount:</h5>
              <ButtonGroup
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >

                <ExternalLink href="https://secure.lglforms.com/form_engine/s/DyJ9AqAOL3OOLxrGV7s-mg">
                  <Button
                    variant="success"
                    style={{
                      width: "8rem",
                      height: "2.5rem",
                      marginTop: "10px",
                    }}
                  >
                  Donate
                  </Button>
                </ExternalLink>
              </ButtonGroup>
              <p
                style={{
                  paddingTop: "50px",
                }}
              >
                Your support helps PLAY MARIN close the actiivty gap in Marin
                City and provides a more diverse peer group for over 300 kids
                annually throughout Sourthern Marin
              </p>
            </Col>
            <Col md={4} sm={12} style={{ color: "white" }}>
              <h3>Follow PLAY MARIN</h3>
              <div style={{ display: "flex", paddingTop: "10px" }}>
                <SocialIcon
                  url="https://www.instagram.com/play.marin/"
                  network="instagram"
                  bgColor="#fff"
                  style={{ height: 40, width: 40 }}
                />
                <br />
                <SocialIcon
                  url="https://www.facebook.com/playmarin.org/"
                  network="facebook"
                  bgColor="#fff"
                  style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                  url="https://twitter.com/playmarin"
                  network="twitter"
                  bgColor="#fff"
                  style={{ height: 40, width: 40 }}
                />
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontFamily: "avenir",
                }}
              ></div>
              <div>
                <Newsletter />
              </div>
            </Col>

            <Col md={4} sm={12} style={{ color: "white" }}>
              <div>
                <img
                  width={175}
                  src={Logo}
                  style={{
                    color: "white",
                    fontSize: "12px",
                    paddingLeft: "20px",
                    fontFamily: "avenir",
                  }}
                />
                <div style={{}}>
                  <StyledLink to="/" activeStyle={activeStyle}>
                    Home
                  </StyledLink>
                  <StyledLink to="/programs" activeStyle={activeStyle}>
                    Programs
                  </StyledLink>
                  <StyledLink to="/support" activeStyle={activeStyle}>
                    Support
                  </StyledLink>
                  <StyledLink to="/about" activeStyle={activeStyle}>
                    About
                  </StyledLink>
                  <StyledLink to="/support" activeStyle={activeStyle}>
                    Contact us
                  </StyledLink>
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: "12px",
                    paddingTop: "20px",
                    paddingLeft: "20px",
                    width: "300px",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: "white",
                      fontSize: "12px",
                      fontFamily: "avenir",
                    }}
                  >
                    Copyright &#169; {new Date().getFullYear()} PLAY MARIN, a
                    California public benefit coporation. All rights reserved
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Footer
