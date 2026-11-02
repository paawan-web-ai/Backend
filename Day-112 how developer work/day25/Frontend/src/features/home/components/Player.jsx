import { useEffect, useRef, useState } from "react";
import { useSong } from "../hooks/useSong";
import "../styles/player.scss";

const formatTime = (time) => {
  if (!Number.isFinite(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Player = () => {
  const { song } = useSong();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    audio.load();
    setCurrentTime(0);
    setIsPlaying(false);
  }, [song?.url]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const seek = (seconds) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(
      Math.max(audio.currentTime + seconds, 0),
      audio.duration || Infinity,
    );
    setCurrentTime(audio.currentTime);
  };

  const changeSpeed = (event) => {
    const speed = Number(event.target.value);
    setPlaybackRate(speed);
    if (audioRef.current) audioRef.current.playbackRate = speed;
  };

  return (
    <section className="player" aria-label="Music player">
      <audio
        ref={audioRef}
        src={song?.url}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onEnded={() => setIsPlaying(false)}
      />
      <div className="player__song">
        <img src={song?.posterUrl} alt={`${song?.title || "Song"} cover`} />
        <div>
          <p className="player__eyebrow">Now playing</p>
          <h2>{song?.title || "Untitled song"}</h2>
          <p>{song?.mood || "Moodify mix"}</p>
        </div>
      </div>
      <div className="player__controls">
        <div className="player__actions">
          <button
            type="button"
            onClick={() => seek(-5)}
            aria-label="Back 5 seconds"
          >
            ↶ <span>5</span>
          </button>
          <button
            className="player__play"
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? "Ⅱ" : "▶"}
          </button>
          <button
            type="button"
            onClick={() => seek(5)}
            aria-label="Forward 5 seconds"
          >
            ↷ <span>5</span>
          </button>
        </div>
        <div className="player__timeline">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) => {
              const time = Number(event.target.value);
              audioRef.current.currentTime = time;
              setCurrentTime(time);
            }}
            aria-label="Song progress"
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <label className="player__speed">
        <span>Speed</span>
        <select
          value={playbackRate}
          onChange={changeSpeed}
          aria-label="Playback speed"
        >
          {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
            <option key={speed} value={speed}>
              {speed}x
            </option>
          ))}
        </select>
      </label>
    </section>
  );
};

export default Player;
