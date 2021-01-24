import "./App.css";
import InstructorTag from "./components/InstructorTag";
import { AppWrapper } from "./components/styles";

const App = () => {
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      <InstructorTag />
    </AppWrapper>
  );
};

export default App;
