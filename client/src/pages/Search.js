import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSavedPins, searchPins } from "../actions/pin";
import NavBar from "../components/NavBar";
import PinGrid from "../components/PinGrid";

const Search = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector((state) => state.session.user);
  const userId = user.id;

  useEffect(() => {
    dispatch(getSavedPins({ userId: userId, useAsFeed: false }));
    dispatch(searchPins(params.query));
  }, [dispatch, params.query, userId]);

  const { feed, saved } = useSelector((state) => state.pin);

  return (
    <div>
      <NavBar query={params.query} />
      <PinGrid userId={userId} photoUrls={feed} savedPins={saved} />
    </div>
  );
};

export default Search;
