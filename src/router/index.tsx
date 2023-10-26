import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Footer, Header, Landing } from "@organism/index";
import {
  AboutTemplate,
  Advantages,
  ContactsTemplate,
  Homepage,
  ServicesAbout,
} from "@templates/index";
import { Technology } from "@templates/Technology";

function Router() {
  return (
    <BrowserRouter basename="/">
      <>
        <Header />
        <Routes>
          <Route path="/docs" element={<Landing />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutTemplate />} />
          <Route path="/service" element={<ServicesAbout />} />
          <Route path="/contacts" element={<ContactsTemplate />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/technology" element={<Technology />} />
          {/* <Route path="/products" element={<ContactsTemplate />} /> */}
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default Router;
