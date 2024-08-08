import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Offer.css";

function AutoLayoutExample() {
  return (
    <div className="Offer">
      <Row className="Row">
        <Col className="Col">
          2X24 RESPONSE GUARANTEE When you see a pest, you need service right
          away — 365 days a year. We’ll respond to your request within 2 hours
          and, if needed, have someone on-site at your facility within 24 hours
          — guaranteed.
        </Col>
        <Col className="Col">
          360° SATISFACTION GUARANTEE 60 days’ complimentary service if you’re
          not satisfied with the way we begin our service. 60 days’
          complimentary service if you’re not satisfied at any time thereafter.
          60 days’ complimentary service by another provider if you’re still not
          satisfied.
        </Col>
        <Col className="Col">
          360° SATISFACTION GUARANTEE 60 days’ complimentary service if you’re
          not satisfied with the way we begin our service. 60 days’
          complimentary service if you’re not satisfied at any time thereafter.
          60 days’ complimentary service by another provider if you’re still not
          satisfied.
        </Col>
      </Row>
    </div>
  );
}

export default AutoLayoutExample;
