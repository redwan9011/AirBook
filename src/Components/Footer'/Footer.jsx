import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="pb-10 bg-blue-600">
            <footer className="footer p-10  text-white mt-10">
  <nav>
    <h6 className="font-semibold text-lg">Address</h6> 
   <p>House 75 -Ka, Main road Dhaka 1216</p>
   <span className="flex items-center gap-1"> < FaMapMarkerAlt></FaMapMarkerAlt> View on Map </span>
  </nav> 
  <nav className="font-serif text-lg">
   
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Stories</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Airlines</a>
    <a className="link link-hover">Testimonials</a>
  </nav> 
  <nav className="font-serif text-lg">
  <a className="link link-hover">Join us</a>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Support</a>
  </nav> 
  <nav className="font-serif text-lg">
  <a className="link link-hover">Contact</a>
    <a className="link link-hover">+8802152454</a>
    <a className="link link-hover">+8802145245</a>
    <a className="link link-hover">+8805455854</a>
    <a className="link link-hover">info@airbook.com</a>
    
  </nav> 
  
</footer>
<div className="divider bg-white h-[1px]"></div>

        </div>
    );
};

export default Footer;