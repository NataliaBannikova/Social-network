import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.jpeg";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large != null ? profile.photos.large : userPhoto} className={s.userPhoto} />
        { isOwner && <input type={"file"} onChange={onMainPhotoSelected} /> }
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

        <div>Full name: {profile.fullName}</div>
        <div>About me: {profile.aboutMe}</div>
       <div>
        <div>Contacts:</div>
          <div>Facebook: {profile.contacts.facebook}</div>
          <div>Vk: {profile.contacts.vk}</div>
          <div>github: {profile.contacts.github}</div>
       </div>

       <div>Looking for a job: {profile.lookingForAJob 
       ? <span className={s.imgTrueSmile}><img src="data:image/png;base64,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" /></span> 
       : <span className={s.imgTrueSmile}><img src="https://e7.pngegg.com/pngimages/348/95/png-clipart-computer-icons-jinan-licheng-hongjialou-elementary-school-speech-smile-information-sad-icon-face-computer-program.png" /></span> }</div>
      </div>

    </div>
  );
};

export default ProfileInfo;
