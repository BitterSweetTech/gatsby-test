import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const TestPage = () => {
  return (
    <main style={pageStyles}>
      <title>Test Page</title>
      <h1 style={headingStyles}>test page</h1>
      <h4>Congratz</h4>
      <p style={paragraphStyles}>
        we have a winner.
        <br />
        <br />
        <p>
          {" "}
          Go big or
          <Link to="/"> Go home</Link>.
        </p>
      </p>
    </main>
  );
};

export default TestPage;
