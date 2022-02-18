import React, { useEffect, useState} from "react";

import ProfileForm from "../components/ProfileForm";
import BackDropSpinner from "../../shared/UIElements/BackDropSpinner";

//For Update
import sendHttpRequest from "../../utils/sendHttpRequest";

const Profile = () => {
  const [loadedUser, setLoadedUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // FETCH CURRENT USER DATA TO FULFILL INPUTS
  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem("userData"));

    const fetchUserData = async () => {
      const responseData = await sendHttpRequest(
        `${process.env.REACT_APP_URL_API}/auth-user/user-info`,
        "GET",
        null,
        { Authorization: "Bearer " + token }
      );
      setLoadedUser({
        firstName: responseData.firstName,
        lastName: responseData.lastName,
        email: responseData.email,
        phoneNumber: responseData.phoneNumber,
        street: responseData.address.street,
        postalCode: responseData.address.postalCode,
        city: responseData.address.city,
      });
    };
    setIsLoading(false);
    fetchUserData().catch(err => {
      alert(err.message)
    });
  }, []);

  return (
    <>
      {isLoading && <BackDropSpinner />}
      {loadedUser && <ProfileForm preloadedValues={loadedUser} />}
    </>
  );
};

export default Profile;
