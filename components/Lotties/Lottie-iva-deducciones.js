import Lottie from 'react-lottie';
import jsonLottie from '../../public/lotties/IVA_deducciones.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jsonLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function LottieIVADeducciones(props) {
      return (  
<Lottie options={defaultOptions}  />
      );
  }
  
  export default LottieIVADeducciones; 