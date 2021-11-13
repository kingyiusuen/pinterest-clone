import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSavedPins, searchPins } from "../actions/pin";
import NavBar from "../components/NavBar";
import PinGrid from "../components/PinGrid";

const Search = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const session = useSelector((state) => state.session);

  useEffect(() => {
    dispatch(getSavedPins(session.user.id));
    dispatch(searchPins(params.query));
  }, [dispatch, params.query, session.user.id]);

  const photoUrls = useSelector((state) => state.pin.display);
  const savedPins = useSelector((state) => state.pin.saved);

  return (
    <div>
      <NavBar query={params.query} />
      <PinGrid photoUrls={photoUrls} savedPins={savedPins} />
    </div>
  );
};

export default Search;
