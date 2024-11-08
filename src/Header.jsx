import { useEffect, useRef, useState } from "react";
import dean from "./assets/Dean.pdf";
import ButtonDefault from "./components/ButtonDefault";

const Header = () => {
	const [menu, setMenu] = useState(false);
	const menuRef = useRef(null);
	const navRef = useRef(null);

  const [activeLink, setActiveLink] = useState('#');

  const handleScroll = () => {
    const sections = [
      { id: '#', offsetTop: 0 },
      { id: '#about', offsetTop: document.getElementById('about').offsetTop },
      { id: '#services', offsetTop: document.getElementById('services').offsetTop },
      { id: '#portfolio', offsetTop: document.getElementById('portfolio').offsetTop },
      { id: '#contact', offsetTop: document.getElementById('contact').offsetTop },
    ];

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const currentSection = sections.reduce((current, section) => {
      return scrollPosition >= section.offsetTop ? section : current;
    }, sections[0]);

    setActiveLink(currentSection.id);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

	const showMenu = () => {
		setMenu(true);
	};

	const closeMenu = () => {
		setMenu(false);
	};

	// Handle Clicking at outside
	useEffect(() => {
		const updateClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setMenu(false);
			}
		};

		window.addEventListener("mousedown", updateClickOutside);

		return () => {
			window.removeEventListener("mousedown", updateClickOutside);
		};
	}, []);

	// Handle scroll to hide menu
	useEffect(() => {
		const handleScroll = () => {
			setMenu(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	//Handle navbar animation
	useEffect(() => {
		const handleScroll = () => {
			const navBar = navRef.current;
			const scrollPosition = window.scrollY;
			if (scrollPosition > 100) {
				navBar.classList.add("full-width-nav");
			} else {
				navBar.classList.remove("full-width-nav");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.addEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				ref={navRef}
        id="navbar"
				className="
        fixed hidden w-[98%] lg:block top-4 left-1/2 -translate-x-1/2 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 lg:py-2 xl:py-4 z-40 rounded bg-gradient-to-t from-soft_blue to-white from-10% to-10% shadow-lg shadow-slate-300 transition-all duration-300 ease-in"
			>
				<div className="flex justify-between gap-4 items-center container mx-auto">
					<nav className="flex items-center gap-4 text-soft_blue [&_a]:cursor-pointer [&_a]:font-bold">
						<a href="#" className={`${activeLink === '#' ? 'border-b-2 border-soft_blue' : ''} hover:border-b-2 border-soft_blue`}>
							Home
						</a>
						<a href="#about" className={`${activeLink === '#about' ? 'border-b-2 border-soft_blue' : ''} hover:border-b-2 border-soft_blue`}>
							About
						</a>
						<a href="#services" className={`${activeLink === '#services' ? 'border-b-2 border-soft_blue' : ''} hover:border-b-2 border-soft_blue`}>
							Services
						</a>
						<a href="#portfolio" className={`${activeLink === '#portfolio' ? 'border-b-2 border-soft_blue' : ''} hover:border-b-2 border-soft_blue`}>
							Portfolio
						</a>
						<a href="#contact" className={`${activeLink === '#contact' ? 'border-b-2 border-soft_blue' : ''} hover:border-b-2 border-soft_blue`}>
							Contact
						</a>
					</nav>
					<ButtonDefault link={dean} text={"Get Resume"} attr={{ download: "resume@dean" }} />
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				ref={menuRef}
				className={`fixed w-full h-auto left-0 top-0 z-40 bg-white rounded-br rounded-bl lg:hidden shadow-lg text-soft_blue overflow-hidden transition-all duration-300 ease-linear origin-top ${
					menu ? "scale-y-100" : "scale-y-0"
				}`}
			>
				<ul className="pt-16 pb-2 text-center divide-y divide-slate-200">
					<li className={`mobile-menu-item ${activeLink === '#' ? 'text-purple' : ''}`}>
						<a onClick={() => closeMenu()} href="#">
							Home
						</a>
					</li>
					<li className={`mobile-menu-item ${activeLink === '#about' ? 'text-purple' : ''}`}>
						<a onClick={() => closeMenu()} href="#about">
							About
						</a>
					</li>
					<li className={`mobile-menu-item ${activeLink === '#services' ? 'text-purple' : ''}`}>
						<a onClick={() => closeMenu()} href="#services">
							Services
						</a>
					</li>
					<li className={`mobile-menu-item ${activeLink === '#portfolio' ? 'text-purple' : ''}`}>
						<a onClick={() => closeMenu()} href="#portfolio">
							Portfolio
						</a>
					</li>
					<li className={`mobile-menu-item ${activeLink === '#contact' ? 'text-purple' : ''}`}>
						<a onClick={() => closeMenu()} href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</div>

			{/* Toggle Button */}
			<button
				className={`p-1 lg:hidden bg-soft_blue rounded fixed border right-4 top-4 inline-block text-white z-40 shadow ${
					menu ? "inline-block" : "hidden"
				}`}
				onClick={() => closeMenu()}
			>
				<svg
					className="size-6 inline-block"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						strokeLinecap="round"
						strokeLinejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<path
							d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
							fill="#ffffff"
						></path>{" "}
					</g>
				</svg>
			</button>
			<button
				className={`p-1 lg:hidden bg-soft_blue rounded fixed border right-4 top-4 inline-block text-white z-40 shadow ${
					menu ? "hidden" : "inline-block"
				}`}
				onClick={() => showMenu()}
			>
				<svg
					className="size-6"
					fill="#ffffff"
					height="200px"
					width="200px"
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 1792 1792"
					xmlSpace="preserve"
				>
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						strokeLinecap="round"
						strokeLinejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<title>fiction</title>{" "}
						<path d="M1673.9,1363.2L1673.9,1363.2c0,52.3-42.4,94.3-94.3,94.3H212.7c-52.3,0-94.3-42.4-94.3-94.3l0,0 c0-52.3,42.4-94.3,94.3-94.3h1366.8C1631.5,1268.5,1673.9,1310.9,1673.9,1363.2z"></path>{" "}
						<path d="M1673.9,895.6L1673.9,895.6c0,52.3-42.4,94.3-94.3,94.3H213c-52.3,0-94.3-42.4-94.3-94.3l0,0c0-52.3,42.4-94.3,94.3-94.3 h1366.6C1631.5,800.8,1673.9,843.2,1673.9,895.6z"></path>{" "}
						<path d="M1673.9,427.9L1673.9,427.9c0,52.3-42.4,94.3-94.3,94.3H212.7c-52.3,0-94.3-42.4-94.3-94.3l0,0c0-52.3,42.4-94.3,94.3-94.3 h1366.8C1631.5,333.2,1673.9,375.6,1673.9,427.9z"></path>{" "}
					</g>
				</svg>
			</button>
		</>
	);
};

export default Header;
