import React, { useRef } from "react";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANG, USER_AVATAR } from "../utils/Constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptValue = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: USER_AVATAR,
          })
        );
        navigate("/Browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when components unmount
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/Error");
      });
  };
  const handleGptSearch = () => {
    //toglle GPT search
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };
  return (
    <div className="absolute md:fixed w-screen px-8 py-2 bg-gradient-to-b from-gray-800 md:from-black flex flex-col md:flex-row items-center justify-between transition-colors duration-300 bg-transparent z-50">
      <img className="w-32 md:w-44 m-2 p-2" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center">
          <button
            className="p-2 mx-2 cursor-pointer rounded-sm bg-white"
            onClick={handleGptSearch}
          >
            {gptValue ? "HomePage" : "GPT Search"}
          </button>
          {gptValue && (
            <select
              className="px-4 py-2 mx-2 cursor-pointer rounded-sm bg-white"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <div className="p-2 mx-2 rounded-sm bg-green-200 hidden md:flex">
            {user?.displayName}
          </div>
          <button
            className="p-2 mx-2 cursor-pointer rounded-sm w-32 bg-red-500"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
