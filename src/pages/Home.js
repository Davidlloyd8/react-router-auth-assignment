import Navigation from "../components/Navigation";
import "../css/home.css";
import UsersList from "../components/UsersList";
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navigation />
      <div className="hero-section"></div>
      <UsersList />
      <Footer />
    </>
  );
}
export default Home;
