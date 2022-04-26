import Image from 'next/image';
import logoWhite from '../../public/assets/logo_tuContapp-white.svg'

function LogoWhite() {
    return ( 
        <>
            <Image id="logo-tuContapp" src={logoWhite} alt= "Logo tuContapp"  width="212.97" height="69.85"  />
        </>
     );
}

export default LogoWhite;