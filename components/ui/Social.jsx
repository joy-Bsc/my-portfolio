import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Social = ({ containerStyles, iconStyles }) => {
  const socials = [
    { icon: <FaGithub />, link: 'https://github.com/joy-Bsc' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/joy-dhar/' },
    { icon: <FaTwitter />, link: 'https://twitter.com/' },
    { icon: <FaFacebook />, link: 'https://facebook.com/Iamjoydhar' }
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.link} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;