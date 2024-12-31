import { Image } from 'react-bootstrap';
import './ProfilePic.scss';

const ProfilePicture = ({ src, alt}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image 
        src={src} 
        alt={alt} 
        className='profile-picture'
      />
    </div>
  );
};

export default ProfilePicture;
