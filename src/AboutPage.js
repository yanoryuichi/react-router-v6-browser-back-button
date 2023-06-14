import { useLocation, Link } from "react-router-dom";

const AboutPage = () => {
  console.log("Rendering AboutPage");

  const location = useLocation();

  return (
    <div>
      <h1>About Page</h1>
      <p>You came from: {location?.state?.from}</p>
      <hr />
      <p>
        <a href="/">Go to Home (A tag)</a>
      </p>
      <p>
        <Link to="/">Go to Home (Link component)</Link>
      </p>
    </div>
  );
};

export default AboutPage;
