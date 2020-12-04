import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import Hero from "../components/hero.js"
import Timeline from "../components/timeline"
import Homepagethreeup from "../components/homepagethreeup"
import Media from "react-media"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import "../components/hero.module.css"
import Video from "../components/video"

function IndexPage() {
  const opts = {
    height: "450px",
    width: "auto",
  }


  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Header />
      <Hero />

      <Container
        fluid
        style={{
          paddingTop: "0px",
        }}
      >
        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          >
    <Video
        videoSrcURL="https://www.youtube.com/embed/-1nxi2Q76MI"      />
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              backgroundColor: "#992168",
              color: "white",
              paddingTop: "50px",
              paddingLeft: "50px",
              marginBottom: "5px",
            }}
          >
            <h1>Everyone wins with PLAY MARIN</h1>
            <p>
              PLAY MARIN envisions Marin as an integrated and unified community.
              The lessons learned through the play and experiences we provide
              instill valuable skills, create friendships, and enhance well
              being and solidarity among the young people of Marin, improving
              their prospects for a successful future and benefiting the health
              of our broader Marin community.
            </p>
            <Link to="/about">
              <button
                style={{
                  width: "15rem",
                  height: "2.5rem",
                  color: "#992168",
                  borderColor: "#992168",
                }}
              >
                Learn More
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row
          style={{
            color: "black",

            paddingTop: `50px`,
            paddingBottom: `50px`,
          }}
        >
          <Col md={12} className="text-center">
            <p
              className="text-center"
              style={{
                fontSize: "30px",
              }}
            >
              <Container>
                "It's important that children spread amongst the many small
                towns in Marin have the opportunity to learn about others, not
                by competing against them, but instead through the lens of
                playing with them."
              </Container>
            </p>
            <p
              style={{
                fontSize: "10px",
                marginBottom: "0",
                fontSize: "15px",
              }}
            >
              Paul Austin
            </p>
            <p style={{ fontSize: "10px" }}>Founder, PLAY MARIN</p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row
          style={{
            backgroundImage: "linear-gradient(#89D4CF, #734AE8)",

            paddingTop: `60px`,
            paddingBottom: `60px`,
          }}
        >
          <Container>
            <Col className="text-center">
              <h2
                style={{
                  color: `#fff`,
                }}
              >
                Play and diversity are essential for a 21st-century education
              </h2>
            </Col>
          </Container>
          <Col lg={12} md={12}>
            <Homepagethreeup />
          </Col>
        </Row>
      </Container>
      <Container>
        <center>
          <Media query="(min-width: 717px)" render={() => <Timeline />} />
        </center>
      </Container>

      <Footer />
    </>
  )
}

export default IndexPage
