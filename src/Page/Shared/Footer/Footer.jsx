import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="footer footer-center p-10 bg-base-300 text-base-content grid grid-cols-3 ">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className=" p-4 bg-base-300 text-base-content text-center">
                <div>
                    <p>Copyright © 2023 - All right reserved by Fahim</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;