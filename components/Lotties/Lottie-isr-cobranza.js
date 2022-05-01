import Lottie from 'react-lottie';
import jsonLottie from '../../public/lotties/ISR_cobranza.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jsonLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function LottieISRCobranza(props) {
      return (  
<Lottie options={defaultOptions}  />
      );
  }
  
  export default LottieISRCobranza; 