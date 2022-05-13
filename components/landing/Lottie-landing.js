import Lottie from 'react-lottie';
import jsonLottie from '../../public/lotties/landing.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jsonLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function LottieLanding(props) {
      return (  
<Lottie options={defaultOptions}  />
      );
  }
  
  export default LottieLanding; 