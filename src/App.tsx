import "./App.css";
import { Root } from "./App.style";
import BookingTable from "./components/BookingTable";
import Section from "./components/Section";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <Root>
      <Section name={"User Profile"} />
      <UserProfile />
      <Section name={"Booking History"} />
      <BookingTable />
    </Root>
  );
}
export default App;
