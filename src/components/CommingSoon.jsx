import Lottie from "lottie-react";
import commingSoon from "../assets/comming-soon.json";

const CommingSoon = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-[300px]">
			<Lottie
				className="size-[300px] lg:size-[400px]"
				animationData={commingSoon}
				loop={true}
			/>

			<p className="text-center text-slate-500 text-xs font-semibold leading-6">
				If you have any suggestion, <br /> I&apos;m{" "}
				<a href="/#contact" className="underline text-soft_blue">
					here
				</a>
			</p>
		</div>
	);
};

export default CommingSoon;
