import Lottie from "lottie-react";
import PropTypes from "prop-types";
import thankyou from "../assets/thank-you.json";

const ThankYou = ({popup, onClick}) => {
  return (
    <div
        className={`fixed w-screen h-screen left-0 top-0 z-50 bg-black/30 flex items-center justify-center transition-all duration-300 ease-linear ${
          popup ? "scale-100" : "scale-0"
        }`}
      >
        <div
          className={`w-[90%] max-w-[400px] h-[400px] bg-white rounded flex flex-col items-center justify-center relative shadow-lg border `}
        >
          <div className="text-center">
            <h2 className="text-soft_blue text-2xl font-bold">
              <em>Thank You!</em>
            </h2>
            <p className="text-xs text-slate-600">
              Your message has been <br /> successfully sent.
            </p>
          </div>
          <div className="w-[200px] overflow-hidden">
            <Lottie animationData={thankyou} loop={true} />
          </div>
          <button
            onClick={onClick}
            className="absolute -top-3 -right-2 content-center px-4 py-2 shadow bg-white text-red-700 rounded-full border"
          >
            x
          </button>
        </div>
      </div>
  )
}

ThankYou.propTypes = {
    popup: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ThankYou