

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full py-4 z-50 mx-auto bg-gradient-to-t from-purple to-soft_blue">
        <div className="flex justify-between gap-4 items-center container mx-auto">
            <nav className="flex items-center gap-4 text-white [&_a]:cursor-pointer [&_a]:font-bold">
                <a href="#hero" className="hover:text-soft_blue hover:underline">Home</a>
                <a href="#about" className="hover:text-soft_blue hover:underline">About</a>
                <a href="#services" className="hover:text-soft_blue hover:underline">Services</a>
                <a href="#skills" className="hover:text-soft_blue hover:underline">Skills</a>
                <a href="#contact" className="hover:text-soft_blue hover:underline">Contact</a>
            </nav>
            <a href="" className="px-8 py-2 bg-soft_blue text-white text-sm cursor-pointer rounded" download>Download CV</a>
        </div>
    </div>
  )
}

export default Header