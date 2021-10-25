import React, { useState, useEffect, useContext } from 'react';
import authService from '../../services/auth.service';
import { AuthContext } from '../../context/auth.context';

function ProfilePage() {
  const [username, setUsername] = useState('');
  const [campus, setCampus] = useState('');
  const [course, setCourse] = useState('');
  const [image, setImage] = useState('');

  const { logOutUser } = useContext(AuthContext);

  useEffect(() => {
    authService
      .getUser()
      .then((data) => {
        const { user } = data;
        setUsername(user.username);
        setCampus(user.campus);
        setCourse(user.course);
        setImage(user.image);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append('profileImage', e.target.files[0]);

    authService
      .uploadPhoto(uploadData)
      .then((response) => {
        // console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        const uploadedImageUrl = response.secure_url;
        return authService.editUser(uploadedImageUrl);
      })
      .then((data) => {
        setImage(data.user.image);
      })
      .then(() => {})
      .catch((err) => console.log('Error while uploading the file: ', err));
  };

  return (
    <div className="ProfilePage">
      <div className="Panel">
        <div>
          <h1>Profile</h1>
          <p>Username</p>
          <p>{username}</p>

          <p>Campus</p>
          <p>{campus}</p>

          <p>Course</p>
          <p>{course}</p>

          <button onClick={logOutUser}>Logout</button>
        </div>

        <div>
          <img src={image} alt="user profile" />
          <br />
          <input type="file" onChange={handleFileUpload} />
          <p>
            The user is able to upload a new profile photo, using NodeJS and
            Multer uploader.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
