import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import contact from "../assets/Animation - 1730349963080.json";
import send from "../assets/send.svg";

const Contact = ({openPopup}) => {
	const form = useRef();
	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const validationForm = () => {
		let formErrors = {};
		if (!formData.user_name) formErrors.user_name = "Name is required";
		if (!formData.user_email) {
			formErrors.user_email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
			formErrors.user_email = "Email address is invalid";
		}
		if (!formData.message) formErrors.message = "Message is required";
		setErrors(formErrors);
		return Object.keys(formErrors).length === 0;
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (!validationForm()) return;
		setIsLoading(true);
		emailjs
			.sendForm("service_snxthb1", "template_o5y2oj3", form.current, {
				publicKey: "PVxiSQyXukYexUUV2",
			})
			.then(
				() => {
					openPopup();
					setFormData({
						user_name: "",
						user_email: "",
						message: "",
					});
					setErrors({});
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			).finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<section id="contact" className="relative bg-white py-8">
			<div>
				<h1 id="section-title" className="section-title">
					Contact <span>Me</span>
				</h1>
				<p className="intro">
					Have a project in mind or any questions? Use the form below to get in touch—I look forward to connecting with you!
				</p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
				<div className="w-full h-full hidden lg:block">
					<div className="contact-icon-wrapper md:size-[300px] lg:size-[500px] ml-auto">
						<Lottie
							className="w-full h-full"
							animationData={contact}
							loop={true}
						/>
					</div>
				</div>
				<div>
					<div className="w-[90%] mx-auto lg:me-auto sm:max-w-[500px] shadow-lg border p-6 rounded">
						<h3 className="text-xl lg:text-2xl mb-4 font-bold text-soft_blue text-center">
							Get in Touch
						</h3>
						<form ref={form} id="contact-form" onSubmit={sendEmail}>
							<div className="mb-4">
								<label htmlFor="user_name">Name</label>
								<input
									id="user_name"
									type="text"
									name="user_name"
									value={formData.user_name}
									onChange={handleChangeInput}
									placeholder="Your name"
								/>
								{errors.message && (
									<p className="text-sm text-red-700">
										{errors.user_name}
									</p>
								)}
							</div>
							<div className="mb-4">
								<label htmlFor="user_email">Email</label>
								<input
									id="user_email"
									type="email"
									name="user_email"
									value={formData.user_email}
									onChange={handleChangeInput}
									placeholder="Enter your email to get a reply"
								/>
								{errors.message && (
									<p className="text-sm text-red-700">
										{errors.user_email}
									</p>
								)}
							</div>
							<div className="mb-4">
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									id="message"
									value={formData.message}
									onChange={handleChangeInput}
									className="w-full h-[80px]"
								></textarea>
								{errors.message && (
									<p className="text-sm text-red-700">
										{errors.message}
									</p>
								)}
							</div>

							<button
							type="submit"
							className="flex items-center justify-center gap-2 px-3 lg:px-4 py-1 lg:py-1.5 rounded-sm bg-soft_blue text-white hover:bg-blue-500 transition-all duration-150 ease-linear"
							disabled={isLoading}
						>
							{isLoading ? (
								<span>Sending...</span>
							) : (
								<>
									<span>Send</span>
									<img
										className="size-5"
										src={send}
										alt="send-icon"
									/>
								</>
							)}
						</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

Contact.propTypes = {
	openPopup: PropTypes.func.isRequired
}

export default Contact;
