import React from 'react';
import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsDribbble
} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://twitter.com/cxkeeley'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <a href='https://www.linkedin.com/in/darwin-keeley/'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://github.com/cxkeeley'>
          <BsGithub />
        </a>
      </div>
      <div>
        <BsDribbble />
      </div>
    </div>
  );
};

export default SocialMedia;
