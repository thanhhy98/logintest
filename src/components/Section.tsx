import { styled } from "@mui/material/styles";

interface ISection {
  name: string;
}
const Section = ({ name }: ISection) => {
  return (
    <>
      <StyledName>{name}</StyledName>
      <StyledHr />
    </>
  );
};

const StyledName = styled("div")(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: 27,
  fontWeight: 600,
  marginBottom: 5,
}));

const StyledHr = styled("hr")(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  height: 4,
  width: "30%",
  border: 0,
  margin: 0,
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
}));

export default Section;
