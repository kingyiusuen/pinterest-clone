import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getSavedPins } from "../actions/pin";
import NavBar from "../components/NavBar";
import PinGrid from "../components/PinGrid";
import ProfileHeader from "../components/ProfileHeader";

const Profile = () => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);

  useEffect(() => {
    dispatch(getSavedPins(session.user.id));
  }, [dispatch, session.user.id]);

  const savedPins = useSelector((state) => state.pin.saved);

  return (
    <div>
      <NavBar />
      <ProfileHeader user={session.user} />
      <PinGrid photoUrls={savedPins} savedPins={savedPins} />
    </div>
  );
};

export default Profile;
