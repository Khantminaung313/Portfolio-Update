import dean from "../assets/Dean.pdf";
import address from "../assets/svg/about_icons/address.svg";
import calendar from "../assets/svg/about_icons/calendar-date.svg";
import degree from "../assets/svg/about_icons/degree.svg";
import github from "../assets/svg/about_icons/github.svg";
import language from "../assets/svg/about_icons/language.svg";
import linkedin from "../assets/svg/about_icons/linkedin.svg";
import mail from "../assets/svg/about_icons/mail.svg";
import phone from "../assets/svg/about_icons/phone.svg";
import ButtonDefault from "../components/ButtonDefault";
import aboutImage from "/src/assets/about-image.jpg";

const About = () => {
	return (
		<section
			id="about"
			className="panel w-screen lg:min-h-screen relative flex flex-col items-center justify-center bg-white py-8 lg:py-0"
		>
			<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
				<div className="hidden lg:flex items-start justify-center">
					<div id="about-image-wrapper" className="aspect-[5/7] lg:max-w-[250px] xl:max-w-[300px] relative z-0">
						<div className="overflow-hidden h-full w-full shadow">
							<img
								className="w-full h-full object-cover object-center"
								src={aboutImage}
								alt="Dean-image"
							/>
						</div>
					</div>
				</div>

				<div className="w-full h-full col-span-2 py-8 lg:py-0">
					<div className="mb-8">
						<p className="text-sm text-slate-600">
							Hello, thank you for visiting. I&apos;m
						</p>
						<h3 className="text-soft_blue text-2xl lg:text-4xl font-bold mb-4">
							DEAN
						</h3>
						<p className="text-justify w-full tracking-wide leading-6 sm:leading-8 text-sm lg:text-base">
							A full-stack web developer with experience as a web
							developer. In this role, I gained valuable insights
							into business logic and essential workflow
							processes, constantly seeking to expand my skills
							and knowledge. I am now eager to pursue new skills
							and challenges in the field.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 text-sm xl:text-base">
						<ul className="space-y-4">
							<li className="flex gap-2 items-center">
								<img className="size-6" src={calendar} alt="" />
								<span className="min-w-[90px] xl:min-w-[110px] overflow-hidden inline-block">
									Date of birth
								</span>
								<span>: May / 31 / 1999</span>
							</li>
							<li className="flex gap-2 items-center">
								<img className="size-6" src={degree} alt="" />
								<span className="min-w-[90px] xl:min-w-[110px] overflow-hidden inline-block">
									Degree
								</span>
								<span>: B.Sc (Physics)</span>
							</li>
							<li className="flex gap-2 items-center">
								<img className="size-6" src={language} alt="" />
								<span className="min-w-[90px] xl:min-w-[110px] overflow-hidden inline-block">
									Language
								</span>
								<span className="whitespace-pre-wrap">
									: Burmese, English (Pre-intermediate)
								</span>
							</li>
							<li className="flex gap-2 items-center">
								<img className="size-6" src={address} alt="" />
								<span className="min-w-[90px] xl:min-w-[110px] overflow-hidden inline-block">
									Address
								</span>
								<span>: Dagon Seikkan, Yangon</span>
							</li>
						</ul>
						<ul className="space-y-4">
							<li className="flex gap-2 items-center">
								<img className="size-6" src={phone} alt="" />
								<span className="min-w-[90px] xl:min-w-[110px] overflow-hidden inline-block">
									Phone
								</span>
								<span>
									:{" "}
									<a href="tel:++959 780591018">
										+959 780591018
									</a>
									/{" "}
									<a href="tel:++959 965814613">
										+959 965814613
									</a>
								</span>
							</li>
							<li className="flex gap-2 items-center">
								<img className="size-6" src={mail} alt="" />
								<span className="min-w-[90px] xl:min-w-[110px] overflow-hidden inline-block">
									Mail
								</span>
								<span className="break-all">
									:{" "}
									<a
										href="mailto:webdev.khantminaung@gmail.com"
										className="whitespace-break-spaces"
									>
										webdev.khantminaung@gmail.com
									</a>
								</span>
							</li>
							<li className="flex gap-2 items-center">
								<img className="size-6" src={github} alt="" />
								<span className="min-w-[90px] xl:min-w-[110px] overflow-hidden inline-block">
									GitHub
								</span>
								<span>
									:{" "}
									<a
										href="https://github.com/Khantminaung313"
										target="_blank"
									>
										Khant Min Aung
									</a>
								</span>
							</li>
							<li className="flex gap-2 items-center">
								<img className="size-6" src={linkedin} alt="" />
								<span className="min-w-[90px] xl:min-w-[110px] overflow-hidden inline-block">
									LinkedIn
								</span>
								<span>
									:{" "}
									<a
										href="https://www.linkedin.com/in/khant-min-aung-711a03254/"
										target="_blank"
									>
										Khant Min Aung
									</a>
								</span>
							</li>
						</ul>
					</div>
					<div className="mt-10 lg:mt-20">
						<ButtonDefault link={dean} text={"Download CV"} attr={{ download: "resume@dean" }} />
					</div>
				</div>
			</div>

			<br />
			<br />
		</section>
	);
};

export default About;
