"use client";

import { useState, useRef } from 'react';
import { Visualizer } from './visualizer';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (!analyser) {
        const context = new (window.AudioContext || (window as any).webkitAudioContext)();
        const src = context.createMediaElementSource(audioRef.current);
        const newAnalyser = context.createAnalyser();
        src.connect(newAnalyser);
        newAnalyser.connect(context.destination);
        newAnalyser.fftSize = 512;
        setAnalyser(newAnalyser);
      }

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // In some browsers, play() must be called after a user gesture.
        // We also need to ensure the audio context is resumed.
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="music-player-container">
      <audio ref={audioRef} src="/webmusic.mp3" loop crossOrigin="anonymous" />
      <Visualizer analyser={analyser} isPlaying={isPlaying} onClick={togglePlayPause} />
    </div>
  );
}
