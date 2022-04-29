import Lottie from 'react-lottie';
import jsonLottie from '../../public/lotties/IVA_Acreditable.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jsonLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function LottieIVAAcreditable(props) {
      return (  
<Lottie options={defaultOptions}  />
      );
  }
  
  export default LottieIVAAcreditable; 