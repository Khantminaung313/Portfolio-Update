import dean from "./assets/Dean.pdf";
import ButtonDefault from "./components/ButtonDefault";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full py-4 z-50 mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md shadow-gray-700">
        <div className="flex justify-between gap-4 items-center container mx-auto">
            <nav className="flex items-center gap-4 text-white [&_a]:cursor-pointer [&_a]:font-bold">
                <a href="#" className="hover:underline">Home</a>
                <a href="#about" className="hover:underline">About</a>
                <a href="#services" className="hover:underline">Services</a>
                <a href="#portfolio" className="hover:underline">Portfolio</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </nav>
            <ButtonDefault text="Download CV" link={dean} attr={{download:"dean@resume"}}/>
        </div>
    </div>
  )
}

export default Header