import emailjs from "@emailjs/browser";
import { useRef } from "react";
import contact from "../assets/contact-img.svg";
import send from "../assets/send.svg";
const Contact = ({ openPopup }) => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_snxthb1", "template_o5y2oj3", form.current, {
				publicKey: "PVxiSQyXukYexUUV2",
			})
			.then(
				() => {
					openPopup()
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<section id="contact" className="min-h-screen relative">
			<div>
				<h1 className="text-center text-4xl font-anton tracking-wide py-8">
					Contact <span className="text-purple">Me</span>
				</h1>
				<p className="text-slate-600 max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] mx-auto text-center mb-8">
					If you have any question? feel free to ask me by
				</p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div className="w-[90%] mx-auto sm:max-w-[500px] shadow-lg border self-center p-6">
					<h3 className="text-xl mb-4 font-bold text-soft_blue text-center">
						Contact Form
					</h3>
					<form ref={form} id="contact-form" onSubmit={sendEmail}>
						<div className="mb-4">
							<label htmlFor="user_name">Your Name</label>
							<input
								id="user_name"
								type="text"
								name="user_name"
								placeholder="Enter your name"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="user_email">Your Email</label>
							<input
								id="user_email"
								type="email"
								name="user_email"
								placeholder="Enter your email"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="organization">Organization</label>
							<input
								id="organization"
								type="text"
								name="organization"
								placeholder="Enter your organization"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="subject">Subject</label>
							<input
								id="subject"
								type="text"
								name="subject"
								placeholder="Enter Subject"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								className="w-full h-[80px]"
							></textarea>
						</div>

						<button
							type="submit"
							className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-sm bg-soft_blue text-white hover:px-6 transition-all duration-150 ease-linear"
						>
							<span>Send</span>
							<img
								className="size-5"
								src={send}
								alt="send-icon"
							/>
						</button>
					</form>
				</div>

				<div className="w-full hidden lg:block">
					<img
						className="w-full h-full"
						src={contact}
						alt="contact-icon"
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;
