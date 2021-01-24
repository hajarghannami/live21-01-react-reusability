import instructorData from "../instructorData";
import styled from "styled-components";
import { TagWrapper, Emoji, Name, GoToGithub } from "./styles";

const InstructorTag = () => {
  const instructorTag = instructorData.map((instructor) => {
    return (
      <TagWrapper onClick={() => window.open(`{instructor.github}`)}>
        <Emoji>{instructor.emoji}</Emoji>
        <Name>{instructor.name}</Name>
        <GoToGithub>{instructor.description}</GoToGithub>
      </TagWrapper>
    );
  });
  return instructorTag;
};

export default InstructorTag;
