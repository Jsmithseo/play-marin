import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"
import Timeline from "../components/timeline"
import MissionImg from "../images/IMG_0004.jpeg"
import ProblemImg from "../gallery-images/yUn2Cz+nSdGF5OkcREeMQA_thumb_36ff.jpg"
import SolutionImg from "../gallery-images/vSHWBX8iTjOVGTiaPAHy4Q_thumb_36a4.jpg"
import PartnersImg from "../gallery-images/4l5r2VD3SRS9AkQK55owWA_thumb_36fb.jpg"
import { Jumbotron, Button, Col, Container } from "react-bootstrap"
import Table from "react-bootstrap/Table"
import Link from "gatsby-link"

import Row from "react-bootstrap/Row"
const About = () => {
  const { paul, roxie, lawrance, board } = useStaticQuery(graphql`
    query {
      paul: file(relativePath: { eq: "paul.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      roxie: file(relativePath: { eq: "roxie.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lawrance: file(relativePath: { eq: "lawrance.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      board: file(relativePath: { eq: "board.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Header />
      <Jumbotron
        className="text-center"
        fluid
        style={{
          backgroundColor: "white",
          marginTop: `50px`,
          marginBottom: `50px`,
        }}
      >
        <Container>
          <p>ABOUT</p>
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
      <Row>
        <Col md={12} sm={12} lg={12} style={{ marginRight: "0px" }}>
          <div
            style={{
              backgroundImage: `url(${MissionImg})`,
              "-webkit-background-size": "cover",
              "-moz-background-size": "cover",
              "-o-background-size": "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              backgroundSize: "cover",
              width: "100%",
              backgroundPosition: "center center",
              color: "white",
            }}
          >
            <div
              style={{
                paddingTop: "10rem ",
                paddingBottom: "10rem",
                backgroundImage:
                  "linear-gradient(to right, rgba(85,142,222,0.2), rgb(101, 20, 175, 0.7))",
              }}
            >
              <Container>
                <h1 className="text-center">Our Mission</h1>
                <p>
                  Play Marin intentionally provides opportunities for children
                  of diverse ethnic and socioeconomic backgrounds in Southern
                  Marin to learn and grow together through play. We recognize
                  the need for stronger diversity and inclusion in Marin County,
                  and we believe that bringing together the unique experiences
                  of different cultures and socioeconomic backgrounds among us
                  serves to enhance our larger community. Being able to
                  understand and appreciate people from all walks of life is
                  vital to the advancement of our society, and we see play as
                  the vehicle to achieve this goal. In just eight years, we have
                  grown from one basketball team of nine players to reaching
                  over 300 kids annually through several team sports and many
                  other uplifting and enriching activities. Our work teaches
                  valuable skills, creates friendships, develops grit, brings
                  families together, and enhances well being and solidarity
                  among young people of Marin from all backgrounds, improving
                  their prospects for a successful future and benefiting the
                  overall health of our broader Marin community. Come play with
                  us.
                </p>
              </Container>
              <div></div>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginRight: "0px" }}>
        <Col
          sm={12}
          md={6}
          lg={6}
          style={{
            backgroundColor: "#992168",
            color: "white",
            padding: "5rem",
            paddingLeft: "3rem",
          }}
        >
          <Container>
            <h1>The Challenge</h1>
            <p>
              We operate in one of the wealthiest counties in the country, which
              is also the most racially disparate county in California. Our work
              addresses two fundamental challenges Marin youth face: Adequate
              access to extracurricular and athletic opportunity in Marin City.
              Lack of racial, ethnic, and socioeconomic diversity in the broader
              Marin community.
            </p>
          </Container>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={6}
          style={{
            backgroundImage: `url(${ProblemImg})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            color: "white",
            paddingRight: "0px",
            paddingLeft: "0px",
          }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(85,142,222,0.2), rgb(101, 20, 175, 0.7))",
              paddingBottom: "240px",
              height: "26rem",
            }}
          ></div>
        </Col>
      </Row>
      <Row>
        <Col
          sm={12}
          md={6}
          lg={6}
          style={{
            backgroundImage: `url(${SolutionImg})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            color: "white",
            paddingRight: "0px",
            paddingLeft: "0px",
          }}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(85,142,222,0.2), rgb(101, 20, 175, 0.7))",
              paddingBottom: "240px",
              height: "26rem",
            }}
          ></div>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={6}
          style={{
            backgroundColor: "#992168",
            color: "white",
            padding: "5rem",
            paddingLeft: "3rem",
          }}
        >
          <div>
            <h1>Our Solution</h1>
            <p>
              Everyone wins with Play Marin! Marin City youth have increased
              opportunities to participate in organized sports and other
              extracurricular activities. All participants benefit from learning
              and growing together through play with a more diverse peer group.
            </p>
          </div>
        </Col>
      </Row>
      <Container
        style={{
          margin: `0 auto`,
          // maxWidth: 1000,
          padding: `0 1rem`,
        }}
      >
        <h1 style={{ textAlign: "center", paddingTop: "40px" }}>Our Team</h1>
        <div
          style={{
            margin: "auto",
            backgroundImage: "linear-gradient(to right, #558EDE, #6514AF)",
            height: "10px",
            marginBottom: "40px",
            marginTop: "40px",
          }}
        ></div>
        <Row
          style={{
            margin: `0 auto`,
            paddingTop: `40px`,
            paddingBottom: `40px`,
          }}
        >
          <Col md={2} sm={12} xs={12}>
            <div>
              <Image
                fluid={paul.sharp.fluid}
                alt="paul"
                style={{
                  borderRadius: "100%",
                  height: "7rem",
                  width: "7rem",
                }}
              />
              <b>Play Marin Founder & CEO Paul Austin</b>
            </div>
          </Col>
          <Col md={10} sm={12} xs={12}>
            <div>
              <p>
                Play Marin Founder & CEO Paul Austin is a longtime Marin City
                resident who has been a youth advocate for the majority of his
                professional life. After serving for several years as Director
                of Recreation for Marin City Community Center, Tamalpais High
                graduate Mr. Austin, who studied Early Childhood Education at
                Texas Southern University and holds a Bachelor’s in Psychology
                from Dominican University in San Rafael, saw a need to create
                opportunities for Marin City youth to engage in organized
                athletics and other extracurricular activities. He founded Play
                Marin to meet that need, and to intentionally give kids of
                diverse ethnic and socioeconomic backgrounds from the broader
                Marin community the opportunity to play, learn, and grow
                together. Starting in 2012 with just one basketball team of nine
                players, Mr. Austin’s dedicated stewardship of Play Marin
                brought steady and expansive growth. The organization currently
                serves approximately 300 kids annually through multiple
                age-group teams and activities. Working full time in other
                professional roles while driving and managing this swift and
                substantial growth in Play Marin, from 2018-2020 Paul accepted
                the position of College Completion and Career Advisor for Bridge
                the Gap College Prep. Here he created college persistence and
                graduation plans for low-income students, working with them from
                high school through college graduation and beyond. He guided
                every aspect of the high school to college to graduation
                experience for first-generation college students; including
                identification and application, transitioning from high school,
                providing motivation and support for student personal health and
                academic performance, and coaching on the transition from
                college to career. In the summer of 2020, Paul began working
                full time as Chief Executive Officer of Play Marin.
                Additionally, Paul is the Community Liaison for Luminate Capital
                Partners, a LuluLemon Ambassador, and a board member of Extra
                Food. Married to Miller Creek Middle School Principal, Tenisha
                Tate, and the father of two, Paul Austin’s world is dedicated to
                the well-being of young people. He is a long-standing advocate
                for Marin youth, serving as their coach, counselor, and
                cheerleader, while constantly promoting the invaluable mission
                of bringing kids of diverse backgrounds together through play.
              </p>
            </div>
          </Col>
        </Row>
        <h1 style={{ textAlign: "center" }}>Board Of Directors</h1>
        <div
          style={{
            backgroundImage: "linear-gradient(to right, #558EDE, #6514AF)",
            height: "10px",
            paddingRight: "100px",
            paddingLeft: "100px",
          }}
        ></div>
        <Row
          style={{
            margin: `0 auto`,
            padding: `0 1rem`,
            paddingTop: `80px`,
          }}
        >
          <Col md={2} sm={12} xs={12}>
            <div>
              <Image
                fluid={board.sharp.fluid}
                alt="board chair"
                style={{ borderRadius: "50%", height: "7rem", width: "7rem" }}
              />
              <b>Bruce Edwards, Board Chair (pictured with wife Kirsten)</b>
            </div>
          </Col>
          <Col md={10}>
            <div>
              <p>
                Board Chair Bruce Edwards lives in Mill Valley with his wife
                Kirsten, and sons Dillon, JP, and Reed. With over 20 years of
                financial services experience, Bruce is a Family CFO for
                approximately 25 families. In these endeavors, Bruce assists his
                clients with tax-efficient charitable giving through a
                combination of donor-advised funds and foundations. A devoted
                family man, some of Bruce’s other passions include fly fishing
                throughout the world, surfing, and playing music with friends
                and family. His dedication to wilderness conservation and
                charitable youth development led Bruce to serve on the boards of
                the Henry’s Fork Foundation in Idaho, and Mt Carmel CYO
                basketball in Mill Valley.
              </p>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            margin: `0 auto`,
            padding: `0 1rem`,
            paddingTop: `40px`,
            paddingBottom: `40px`,
          }}
        >
          <Col md={2} sm={12} xs={12}>
            <Image
              fluid={lawrance.sharp.fluid}
              alt="Roxie"
              style={{ borderRadius: "50%", height: "7rem", width: "7rem" }}
            />
            <b>Lawrence P. Bancroft, Treasurer </b>
          </Col>
          <Col md={10} sm={12} xs={12}>
            <div>
              <p>
                President and CEO of Bivium Capital, Lawrence leads a seasoned
                and dedicated team of investment professionals with expertise
                across every asset class and type of investment. Prior to
                founding Bivium in 2002, Lawrence was an initial member of
                Goldman Sachs IMD’s external manager selection team, where he
                worked on developing all areas of its manager of managers
                business; and evaluated minority-owned investment companies as
                part of the firm’s Urban Investment Group for capital
                allocation. Previously the Board Chair for Big Brothers Big
                Sisters of the North Bay, Lawrence currently sits on the
                governance and finance committees for the Bay Area chapter of
                Big Brothers Big Sisters. He earned his B.S. from Cornell
                University’s School of Industrial and Labor Relations, and his
                M.P.A. from Cornell University’s School of Public Affairs.
                Lawrence lives in Tiburon with his wife and three kids.
              </p>
            </div>
          </Col>
        </Row>

        <Row
          style={{
            margin: `0 auto`,
            paddingTop: `40px`,
            paddingTop: `40px`,
            paddingBottom: `40px`,
          }}
        >
          <Col md={2} sm={12} xs={12}>
            <div>
              <Image
                fluid={roxie.sharp.fluid}
                alt="Roxie"
                style={{
                  borderRadius: "50%",
                  height: "7rem",
                  width: "7rem",
                  fontWeight: "bold",
                }}
              />
              <b>Roxie Baker, Secretary</b>
            </div>
          </Col>
          <Col md={10}>
            <div>
              <p>
                A former music industry executive with two decades in recording
                artist management, Roxie has worked with young people since she
                was a teenager— first as a conventional horseback riding
                instructor and later as a Certified Therapeutic Riding
                Instructor and program director. In this capacity, she worked
                directly with at-risk and special needs students ages 5-17 and
                served as designer, developer, and director of several
                therapeutic and educational programs on both coasts. The parent
                of an NCAA athlete, Roxie first learned about Play Marin when
                her daughter was a volunteer swim instructor for their summer
                camp program. Roxie has a B.A. in Psychology from SFSU and
                graduate studies in Health Education JFK University. Roxie lives
                in Sausalito with her husband John, Managing Director of an
                international environmental nonprofit, and daughter Ella,
                currently a Social Justice major at Occidental College.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col sm={12} md={12} lg={12}>
          <div
            style={{
              backgroundImage: `url(${PartnersImg})`,
              "-webkit-background-size": "cover",
              "-moz-background-size": "cover",
              "-o-background-size": "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              backgroundSize: "cover",
              width: "100%",
              backgroundPosition: "center center",
              color: "white",
            }}
          >
            <div
              style={{
                paddingTop: "10rem ",
                paddingBottom: "15rem",
                backgroundImage:
                  "linear-gradient(to right, rgba(85,142,222,0.2), rgb(101, 20, 175, 0.7))",
              }}
            >
              <Container>
                <h2 className="text-center">Our Partners</h2>
                <Table
                  style={{
                    color: "#fff",
                    fontSize: "25px",
                    Align: "center",
                  }}
                >
                  <tbody>
                    <tr>
                      <td>County Bears AAU Basketball</td>
                      <td>Dave Frommers Soccer</td>
                    </tr>
                    <tr>
                      <td>Good Tidings Foundation</td>
                      <td>Jennifer Azzi, Azzi Academy Camps</td>
                    </tr>
                    <tr>
                      <td>Marin City Community District</td>
                      <td>Next Level Flag Football</td>
                    </tr>
                    <tr>
                      <td>ProofLab</td>
                      <td>St Mary Star of the Sea </td>
                    </tr>
                    <tr>
                      <td>Southern Marin Aquatics</td>
                      <td>Southern Marin Lacrosses</td>
                    </tr>
                    <tr>
                      <td>Sports Basement</td>
                      <td>Trips4Kids </td>
                    </tr>
                    <tr>
                      <td>Warriors Community Foundation</td>
                      <td>
                        {" "}
                        <Link to="/contact">
                        <Button variant="outline-success">
                          Become a Partner
                        </Button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
            </div>
          </div>
        </Col>
      </Row>

      <Footer />
    </>
  )
}

export default About
