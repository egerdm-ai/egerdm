import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reco from "../../Assets/Projects/reco.png";
import llm from "../../Assets/Projects/llm.png";
import sd from "../../Assets/Projects/sd.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sd}
              isBlog={false}
              title="SelfieDreams"
              description="I explored the potential of image generation models, specifically stable diffusion. I fine-tuned these models to train on personal images, generating personalized 2D images. These were then converted into 3D models for use in AR and VR environments, pushing the boundaries of generative AI and personalization."
              ghLink="https://github.com/egerdm-ai/selfiedreams_streamlit"
              path="/sdproject"
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={llm}
              isBlog={false}
              title="Ask Your Documents"
              description="I harnessed the power of OpenAI models and other language model technologies to build an innovative platform for text generation. This project involved complex tasks such as facilitating multi-document conversations, finding news about AI, and generating new articles based on recent news using language model technologies."
              ghLink="https://github.com/egerdm-ai/Langchain_Multiple_PDF_w_GDrive"
              path=""
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reco}
              isBlog={false}
              title="Special For You Recommendations"
              description="Designed and implemented a highly personalized product recommendation system, contributing to a significant 120% increase in the conversion rate. This project demonstrated the ability to leverage machine learning for enhancing business outcomes."
              ghLink=""
              path=""
                 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
