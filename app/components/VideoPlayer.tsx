"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, ExternalLink, Youtube } from "lucide-react";
import Image from "next/image";

export default function VideoPlayer({ videoId, title }: { videoId: string, title?: string }) {
  const playerRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // You can control youtube iframe via postMessage!
  const sendCommand = (func: string, args?: any) => {
    if (playerRef.current && playerRef.current.contentWindow) {
      playerRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: func,
          args: args || []
        }),
        "*"
      );
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isPlaying) {
      sendCommand("pauseVideo");
      setIsPlaying(false);
    } else {
      sendCommand("playVideo");
      setIsPlaying(true);
      if (!hasStarted) setHasStarted(true);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isMuted) {
      sendCommand("unMute");
      setIsMuted(false);
    } else {
      sendCommand("mute");
      setIsMuted(true);
    }
  };

  const toggleFullscreen = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative border-4 border-black shadow-[8px_8px_0px_#000] bg-[#f4efe6] overflow-hidden group font-black flex flex-col w-full transition-transform hover:-translate-y-1"
    >
      {/* Brutalist Top Bar */}
      <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 border-b-4 border-black bg-[#ECAE5D]">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-black animate-pulse shadow-[2px_2px_0px_#000]" />
          <span className="text-black uppercase text-sm md:text-base tracking-widest leading-none mt-1">{title || "Video Playback"}</span>
        </div>
        <a 
          href={`https://www.youtube.com/watch?v=${videoId}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-black hover:opacity-70 transition-opacity bg-white border-2 border-black px-2 py-1 shadow-[2px_2px_0px_#000] text-xs uppercase"
        >
          <Youtube className="w-4 h-4 md:w-5 md:h-5 text-[#DD726D]" />
          <span className="hidden sm:inline">Watch on YT</span>
        </a>
      </div>

      {/* Video Container */}
      <div className="relative aspect-video bg-black w-full overflow-hidden">
        {!hasStarted && (
           <div 
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-cover bg-center cursor-pointer group-hover:scale-105 transition-all duration-500"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)` 
            }}
            onClick={togglePlay}
           >
             <div className="relative bg-[#DD726D] text-black border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_#000] group-hover:scale-110 transition-transform duration-300 transform -rotate-3 z-20">
               <Play className="w-8 h-8 md:w-16 md:h-16 fill-current" />
             </div>
             <span className="relative mt-6 md:mt-8 bg-[#f4efe6] text-black px-6 py-2 uppercase text-sm md:text-lg border-4 border-black rotate-2 shadow-[4px_4px_0px_#000] z-20 hover:bg-[#ECAE5D] transition-colors font-black">
               Click to Watch Pitch
             </span>
             
             {/* Retro Scanlines Overlay */}
             <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] z-10"></div>
           </div>
        )}
        
        <iframe
          ref={playerRef}
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3${hasStarted ? "&autoplay=1" : ""}`}
          title="YouTube video player"
          className="absolute inset-0 w-full h-full pointer-events-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        {/* Click Interceptor for play/pause toggle */}
        {hasStarted && (
          <div 
            className="absolute inset-0 z-0 cursor-pointer" 
            onClick={togglePlay}
          />
        )}

        {/* Custom Controls Floating Bar */}
        {hasStarted && (
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex bg-[#f4efe6] border-4 border-black shadow-[4px_4px_0px_#000]">
              <button 
                onClick={togglePlay}
                className="p-2 md:p-3 border-r-4 border-black hover:bg-[#78B5AA] transition-colors"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-5 h-5 md:w-6 md:h-6 text-black fill-current" /> : <Play className="w-5 h-5 md:w-6 md:h-6 text-black fill-current" />}
              </button>
              <button 
                onClick={toggleMute}
                className="p-2 md:p-3 hover:bg-[#ECAE5D] transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-black" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-black" />}
              </button>
            </div>
            
            <button 
              onClick={toggleFullscreen}
              className="p-2 md:p-3 bg-[#f4efe6] border-4 border-black shadow-[4px_4px_0px_#000] hover:bg-[#DD726D] transition-colors"
              title="Fullscreen"
            >
              <Maximize2 className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
