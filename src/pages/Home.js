import Navigation from "../components/Navigation";
import "../css/home.css";
import UsersList from "../components/UsersList";

function Home() {
  return (
    <>
      <Navigation />
      <div className="hero-section"></div>
      <UsersList />
    </>
  );
}
export default Home;
