import Lottie from 'react-lottie';
import jsonLottie from '../../public/lotties/IVA_cobrado.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jsonLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function LottieIVACobrado(props) {
      return (  
<Lottie options={defaultOptions}  />
      );
  }
  
  export default LottieIVACobrado; 