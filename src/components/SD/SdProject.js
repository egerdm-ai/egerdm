import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import StreamlitComponent from './StreamlitComponent';

function SdProject() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container className="st">
      <h1 className="project-heading">
          <strong className="purple">SelfieDreams</strong>  Streamlit App
        </h1>
      <StreamlitComponent />
      </Container>
    </Container>
  );
}

export default SdProject;
