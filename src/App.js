import "./App.css";
import InstructorTag from "./components/InstructorTag";
import instructorData from "./instructorData";
import { AppWrapper } from "./components/styles";

export const InstructorList = () => {
  const instructors = instructorData.map((oneInstructor) => (
    <InstructorTag
      key={oneInstructor.id}
      name={oneInstructor.name}
      github={oneInstructor.github}
      emoji={oneInstructor.emoji}
      description={oneInstructor.description}
    />
  ));

  return <div>{instructors}</div>;
};

const App = () => {
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      <InstructorList />
    </AppWrapper>
  );
};

export default App;
