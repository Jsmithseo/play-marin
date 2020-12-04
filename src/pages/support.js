import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap"
import SolutionImg from "../images/BLNBQ+5bQbyTCJwY5hrYxA_thumb_2d16.jpg"
import SolutionImgTwo from "../images/9B1A4863.jpeg"
import { ExternalLink } from "react-external-link"
import ButtonGroup from "react-bootstrap/ButtonGroup"

const Support = () => {
  return (
    <>
      <Header />

      <Jumbotron
        className="text-center"
        fluid
        style={{
          backgroundColor: "white",
          marginTop: `50px`,
          marginBottom: `50x`,
        }}
      >
        <Container>
          <p>Support</p>
          <h1>PLAY MARIN</h1>
          <div
            style={{
              margin: "auto",
              backgroundImage: "linear-gradient(to right, #558EDE, #6514AF)",
              height: "10px",
            }}
          ></div>
        </Container>
      </Jumbotron>
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
              backgroundImage: `url(${SolutionImgTwo})`,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              color: "white",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          ></Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              backgroundColor: "#992168",
              color: "white",
              width: "50%",
              padding: "4rem",
            }}
          >
            <p>
              In just 8 years, Play Marin has grown from one basketball team of
              9 players to reaching over 300 kids annually through a variety of
              team sports and other educational and enriching activities, all
              while promoting diversity and solidarity among the young people of
              Marin County.
            </p>
            <p>
              We need you. You can help solve the play and diversity challenge
              in Marin County. Give a gift that promotes a more inclusive and
              equitable Marin community by making a donation that provides
              athletic and extracurricular activities for Marin City Youth while
              creating a more diverse peer group for participating young people
              across Marin County.
            </p>
          </Col>
        </Row>
      </Container>
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
              backgroundColor: "#992168",
              color: "white",
              width: "50%",
              padding: "4rem",
            }}
          >
            <p>
              Please consider supporting Play Marin’s work by making an online
              donation today. Our secure donation payment portal is coming soon!
              In the meantime, please use our links below, or contact us for
              other payment options.
            </p>
            <ButtonGroup
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <ExternalLink href="https://secure.lglforms.com/form_engine/s/DyJ9AqAOL3OOLxrGV7s-mg">
                <button
                  style={{
                    width: "15rem",
                    height: "2.5rem",
                  }}
                >
                  Donate Today!
                </button>
              </ExternalLink>

            </ButtonGroup>

            <p style={{ paddingTop: "50px" }}>
              All donations are tax-deductible to the extent allowed by law. Our
              US Tax identification number is 83-1737141
            </p>
            <p>
              For other donation inquiries please send us a note to
              donate@playmarin.org or call (415) 686-5045.
            </p>
            <p>
              If you would like to send a gift via check, please mail to our
              address: <br />
              Play Marin, PO Box 530, Sausalito, California 94965 <br />
              Thank you for supporting the Play Marin Movement!
            </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            style={{
              paddingRight: "0px",
              paddingLeft: "0px",
              backgroundImage: `url(${SolutionImg})`,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              color: "white",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          ></Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Support
