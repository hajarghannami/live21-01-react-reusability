import { TagWrapper, Emoji, Name, GoToGithub } from "./styles";

const InstructorTag = (props) => {
  return (
    <TagWrapper onClick={() => window.open(`${props.github}`)}>
      <Emoji>{props.emoji}</Emoji>
      <Name>{props.name}</Name>
      <GoToGithub>{props.description}</GoToGithub>
    </TagWrapper>
  );
};

export default InstructorTag;
