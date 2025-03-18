import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import "./components/Main/Main.css";
import "./components/MainContent/MainContent.css";
function Home() {
  return (
    <>
      <Main></Main>
      <MainContent></MainContent>
    </>
  );
}

export default Home;
