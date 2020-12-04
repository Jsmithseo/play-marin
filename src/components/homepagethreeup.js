import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers } from "@fortawesome/free-solid-svg-icons"
import { faRunning } from "@fortawesome/free-solid-svg-icons"
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Homepagethreeup = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm>
            <div>
              <center>
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{
                    fontSize: `75px`,
                    marginTop: `20px`,
                    paddingBottom: `20px`,
                    color: `#fff`,
                  }}
                />
              </center>
              <p
                style={{
                  fontSize: `16px`,
                  fontFamily: `avenir`,
                  color: `#fff`,
                }}
              >
                Extracurricular activities develop essential skills, such as
                teamwork, responsibility, grit, endurance, and a sense of
                culture and community (NCES)
              </p>
            </div>
          </Col>
          <Col sm>
            <div>
              <center>
                <FontAwesomeIcon
                  icon={faRunning}
                  style={{
                    fontSize: `75px`,
                    marginTop: `20px`,
                    paddingBottom: `20px`,
                    color: `#fff`,
                  }}
                />
              </center>
              <p
                style={{
                  fontSize: `16px`,
                  fontFamily: `avenir`,
                  color: `#fff`,
                }}
              >
                Play, such as sports, has a positive correlation on student
                attendance, GPA, and test scores (NCES)
              </p>
            </div>
          </Col>
          <Col sm>
            <div>
              <center>
                <FontAwesomeIcon
                  icon={faBusinessTime}
                  style={{
                    fontSize: `75px`,
                    marginTop: `20px`,
                    paddingBottom: `20px`,
                    color: `#8c8c8c`,
                    color: `#fff`,
                  }}
                />
              </center>
              <p
                style={{
                  fontSize: `16px`,
                  fontFamily: `avenir`,
                  color: `#fff`,
                }}
              >
                Society is becoming increasingly diverse. Employers hire those
                who can work with colleagues and customers from diverse cultural
                backgrounds
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Homepagethreeup
