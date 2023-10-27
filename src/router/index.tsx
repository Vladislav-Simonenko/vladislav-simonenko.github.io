import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footer, Header, Landing } from "@organism/index";
import {
  AboutTemplate,
  Advantages,
  ContactsTemplate,
  Homepage,
  Portfolio,
  Products,
  ServicesAbout,
} from "@templates/index";
import { Technology } from "@templates/Technology";
import { useResize } from "@utils/hooks";

function Router() {
  const { isScreenXxl } = useResize();

  return (
    <BrowserRouter basename="/">
      <>
        <Header />
        <div style={isScreenXxl ? stylesContainer : stylesContainer2}>
          <Routes>
            <Route path="/docs" element={<Landing />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutTemplate />} />
            <Route path="/service" element={<ServicesAbout />} />
            <Route path="/contacts" element={<ContactsTemplate />} />
            <Route path="/advantages" element={<Advantages />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/products" element={<Products />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* <Route path="/products" element={<ContactsTemplate />} /> */}
          </Routes>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default Router;

const stylesContainer = {
  margin: "100px 200px 0 200px",
  flex: "1 1 auto",
};

const stylesContainer2 = {
  margin: "100px 50px 0 10px",
  flex: "1 1 auto",
};
