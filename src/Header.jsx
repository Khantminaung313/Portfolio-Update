import dean from "./assets/Dean.pdf";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full py-4 z-50 mx-auto bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md shadow-gray-600">
        <div className="flex justify-between gap-4 items-center container mx-auto">
            <nav className="flex items-center gap-4 text-white [&_a]:cursor-pointer [&_a]:font-bold">
                <a href="#" className="hover:underline">Home</a>
                <a href="#about" className="hover:underline">About</a>
                <a href="#services" className="hover:underline">Services</a>
                <a href="#portfolio" className="hover:underline">Portfolio</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </nav>
            <a href={dean} className="px-8 py-2 bg-soft_blue text-white text-sm cursor-pointer rounded-full border hover:bg-tint_blue transition-all duration-150" download>Download CV</a>
        </div>
    </div>
  )
}

export default Header