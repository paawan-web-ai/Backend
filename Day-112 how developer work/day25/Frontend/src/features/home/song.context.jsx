import { useState } from "react";
import { createContext } from "react";

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
  const [song, setsong] = useState({
    url: "https://ik.imagekit.io/4gzxwrawt/cohort-2/moodify/songs/Khaamiyan_niyXrcE36",
    posterUrl:
      "https://ik.imagekit.io/4gzxwrawt/cohort-2/moodify/posters/Khaamiyan_TulVdKiaJ.jpeg",
    title: "Khaamiyan",
    mood: "happy",
  });

  const [loading, setloading] = useState(false);

  return (
    <SongContext.Provider value={{ song, setsong, loading, setloading }}>
      {children}
    </SongContext.Provider>
  );
};
