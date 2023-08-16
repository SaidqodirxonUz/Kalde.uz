// import "./about.scss";
import Navbar from "../../components/navbar/navbar";
import Contact from "../../components/contact/contact";

const ContactUs = () => {
  return (
    <div className="container-fluid">
      {/* <Sidebar className="sidebar" /> */}
      <Navbar />
      <div className="showcase"></div>
      <Contact />
    </div>
  );
};

export default ContactUs;
