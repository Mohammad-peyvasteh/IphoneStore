import React from 'react';
import { AiFillInstagram, AiOutlineTwitter,AiOutlineCopyrightCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 MohammadPeyvasteh All rights reserverd<AiOutlineCopyrightCircle/></p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
