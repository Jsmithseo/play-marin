import React from "react"
import styled from "styled-components"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Logo from "../images/playMarinLogo.png"
import { Link } from "gatsby"
import "./hero.module.css"
import Navbar from "react-bootstrap/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import { ExternalLink } from "react-external-link"

const Header = () => {
  const activeStyle = {
    color: `#598BDD`,
    // color: `#0B7BFF`,
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        style={{
          padding: "0 0!important",
        }}
      >
        <Navbar.Brand>
          <img
            to="/"
            width={100}
            height={42}
            src={Logo}
            className="work"
            style={{
              marginBottom: "0px",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{
            backgroundColor: "white",
          }}
        >
          <Nav className="mr-auto">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            <Link className="link" to="/programs">
              Programs
            </Link>
            <Link className="link" to="/support">
              Support
            </Link>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </Nav>
          <ExternalLink href="https://secure.lglforms.com/form_engine/s/DyJ9AqAOL3OOLxrGV7s-mg">
          <Button variant="outline-success">Donate Today!</Button>
          </ExternalLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}



export default Header