import * as unsplashService from "../services/unsplash";
import * as userService from "../services/users";

export const FETCH_SAVED_PINS = "FETCH_SAVED_PINS";
export const SET_FEED = "SET_FEED";
export const SAVE_PIN = "SAVE_PIN";
export const DELETE_SAVED_PIN = "DELETE_SAVED_PIN";

export const getSavedPins =
  ({ userId, setAsFeed }) =>
  async (dispatch) => {
    const response = await userService.getProfile(userId);
    dispatch({
      type: FETCH_SAVED_PINS,
      photoUrls: response.data.savedPins,
    });
    if (setAsFeed) {
      dispatch({
        type: SET_FEED,
        photoUrls: response.data.savedPins,
      });
    }
  };

export const searchPins = (query) => async (dispatch) => {
  const response = await unsplashService.search({ query, per_page: 30 });
  const photoUrls = response.data.results.map((photo) => photo.urls.raw);
  dispatch({
    type: SET_FEED,
    photoUrls: photoUrls,
  });
};

export const getRandomPins = () => async (dispatch) => {
  const response = await unsplashService.random({ count: 30 });
  const photoUrls = response.data.map((photo) => photo.urls.raw);
  dispatch({
    type: SET_FEED,
    photoUrls: photoUrls,
  });
};

export const savePin =
  ({ userId, photoUrl }) =>
  async (dispatch) => {
    await userService.savePin({ userId, photoUrl });
    dispatch({
      type: SAVE_PIN,
      photoUrl: photoUrl,
    });
  };

export const deleteSavedPin =
  ({ userId, photoUrl }) =>
  async (dispatch) => {
    await userService.deleteSavedPin({ userId, photoUrl });
    dispatch({
      type: DELETE_SAVED_PIN,
      photoUrl: photoUrl,
    });
  };
