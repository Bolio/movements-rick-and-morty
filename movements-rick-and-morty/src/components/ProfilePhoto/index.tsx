import styled from "styled-components";

const ProfilePhotoWrappperStyled = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: purple;
  right: 36px;
  position: absolute;
`;

const ProfilePhotoImgStyled = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  /* background-color: purple; */
`;

const ProfilePhoto = ({ src }) => {
  return (
    <ProfilePhotoWrappperStyled>
      <ProfilePhotoImgStyled src={src} alt="profile-photo" />
    </ProfilePhotoWrappperStyled>
  );
};

export default ProfilePhoto;
