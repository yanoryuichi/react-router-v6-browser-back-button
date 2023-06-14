import { useEffect } from "react";
import { useNavigate, useNavigationType, useLocation } from "react-router-dom";

const HomePage = () => {
  console.log("Rendering HomePage");

  const navigate = useNavigate();
  const navType = useNavigationType();
  const location = useLocation();

  useEffect(() => {
    if (navType === "POP" && location.key !== "default") {
      console.log("Back button was pressed");
    }
  }, [location, navType]);

  const goToAboutPage = () => {
    navigate("/about", { state: { from: "HomePage" } });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAboutPage}>Go to About Page</button>
    </div>
  );
};

export default HomePage;
