import Image from 'next/image';
import logoBlack from '../../public/assets/logo_tuContapp.svg'

function LogoBlack() {
    return ( 
        <>
            <Image id="logo-tuContapp" src={logoBlack} alt= "Logo tuContapp"  width="300" height="300" />
        </>
     );
}

export default LogoBlack;