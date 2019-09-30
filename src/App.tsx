import React from "react";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";

const App: React.FC = () => {
  return (
    <div data-testid="main">
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </div>
  );
};

export default App;
