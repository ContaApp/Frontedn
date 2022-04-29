import Lottie from 'react-lottie';
import jsonLottie from '../../public/lotties/IVA_retenido.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jsonLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function LottieIVARetenido(props) {
      return (  
<Lottie options={defaultOptions}  />
      );
  }
  
  export default LottieIVARetenido; 