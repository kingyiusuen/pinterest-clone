import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getSavedPins, getRandomPins } from "../actions/pin";
import NavBar from "../components/NavBar";
import PinGrid from "../components/PinGrid";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user.id;

  useEffect(() => {
    dispatch(getSavedPins({ userId, setAsFeed: false }));
    dispatch(getRandomPins());
  }, [dispatch, userId]);

  const { feed, saved } = useSelector((state) => state.pin);

  return (
    <div>
      <NavBar />
      <PinGrid userId={userId} photoUrls={feed} savedPins={saved} />
    </div>
  );
};

export default Home;
