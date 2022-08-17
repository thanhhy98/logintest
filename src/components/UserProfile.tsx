import { styled } from "@mui/material/styles";
import { ReactComponent as EmailSVG } from "../svg/email.svg";
import { ReactComponent as ProfileSVG } from "../svg/profile.svg";
import { ReactComponent as PhoneSVG } from "../svg/phone.svg";

const UserProfile = () => {
  return (
    <Root>
      <StyledAvatar>
        <img src={"/images/default-user.jpg"} alt="default" />
      </StyledAvatar>
      <InfoContainer>
        <OneInfo>
          <StyledInfoWrapper>
            <ProfileSVG />
            <StyledInfo>Full Name</StyledInfo>
          </StyledInfoWrapper>
          <StyledContent>Nguyen Minh Thanh</StyledContent>
        </OneInfo>
        <OneInfo>
          <StyledInfoWrapper>
            <EmailSVG />
            <StyledInfo>Email Address</StyledInfo>
          </StyledInfoWrapper>
          <StyledContent>thanhnm9999@gmail.com.vn</StyledContent>
        </OneInfo>
        <OneInfo>
          <StyledInfoWrapper>
            <PhoneSVG />
            <StyledInfo>Phone</StyledInfo>
          </StyledInfoWrapper>
          <StyledContent>(+81) 993939399</StyledContent>
        </OneInfo>
      </InfoContainer>
    </Root>
  );
};

const Root = styled("div")(({ theme }) => ({
  margin: "20px 50px",
  display: "flex",
  justifyContent: "center",
  gap: 50,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
const OneInfo = styled("div")(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.primary.light}`,
}));
const InfoContainer = styled("div")({
  margin: "10px 0",
  flex: "1",
  display: "flex",
  flexDirection: "column",
  gap: 30,
});
const StyledInfo = styled("div")(({ theme }) => ({
  fontWeight: 600,
  fontSize: 20,
  color: theme.palette.primary.dark,
}));
const StyledContent = styled("div")(({ theme }) => ({
  fontWeight: 400,
  fontSize: 20,
  color: theme.palette.primary.main,
  marginBottom: 5,
}));
const StyledAvatar = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.common.black}`,
  borderRadius: "50%",
  width: 200,
  height: 200,
  padding: 3,
  "& img": {
    width: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    height: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    "& img": {
      height: "100%",
    },
    margin: "auto",
  },
}));

const StyledInfoWrapper = styled("div")({
  display: "flex",
  alignItems: "end",
  gap: 10,
});
export default UserProfile;
