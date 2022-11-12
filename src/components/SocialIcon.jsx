import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SocialIcon = ({icon, press}) => {

    function openInNewTab(url) {
        console.log(url);
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return(
    <FontAwesomeIcon icon={icon} onClick={() => {openInNewTab(press)}}/>
    );

}

export default SocialIcon;