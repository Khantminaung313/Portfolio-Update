import backend from '../assets/svg/service_icons/backend.svg';
import frontend from '../assets/svg/service_icons/frontend.svg';
import wordpress from '../assets/svg/service_icons/wordpress.svg';

const AutoScrolling = () => {
  
    return (
      <div id='icon-wrapper' className="scrolling-icons-container overflow-hidden">
        <div className="icons">
          <img src={wordpress} alt="" />
          <img src={backend} alt="" />
          <img src={frontend} alt="" />
          <img src={wordpress} alt="" />
          <img src={backend} alt="" />
          <img src={frontend} alt="" />
        </div>
        <div className="icons">
          <img src={wordpress} alt="" />
          <img src={backend} alt="" />
          <img src={frontend} alt="" />
          <img src={wordpress} alt="" />
          <img src={backend} alt="" />
          <img src={frontend} alt="" />
        </div>
      </div>
    );
}

export default AutoScrolling