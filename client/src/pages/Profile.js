import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getSavedPins } from "../actions/pin";
import NavBar from "../components/NavBar";
import PinGrid from "../components/PinGrid";
import ProfileHeader from "../components/ProfileHeader";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user.id;

  useEffect(() => {
    dispatch(getSavedPins({ userId, setAsFeed: true }));
  }, [dispatch, userId]);

  const { feed, saved } = useSelector((state) => state.pin);

  return (
    <div>
      <NavBar />
      <ProfileHeader user={user} />
      <PinGrid userId={userId} photoUrls={feed} savedPins={saved} />
    </div>
  );
};

export default Profile;
