'use client'
import { useVideoManager } from '@/context/VideoManagerContext';
import { useState, useRef, useEffect } from 'react';

interface LazyVideoProps {
  src: string;
  name: string;
  poster?: string;
  id: string | number;
}

export default function LazyVideo({ src, name, poster, id }: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentPlayingVideo, setCurrentPlayingVideo } = useVideoManager();

  const videoId = String(id);

  const handleClick = (e: React.MouseEvent) => {
    // Предотвращаем клик по встроенным контролам
    if ((e.target as HTMLElement).closest('video[controls]')) {
      return;
    }

    if (!isLoaded) {
      // 1️⃣ Первый клик — загружаем
      setIsLoaded(true);
    } else {
      // 2️⃣ Последующие клики — пауза/плей
      if (videoRef.current) {
        if (videoRef.current.paused) {
          // Останавливаем другие видео перед запуском этого
          setCurrentPlayingVideo(videoId);
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
  };

  // Останавливаем видео, если играет другое
  useEffect(() => {
    if (currentPlayingVideo !== videoId && isPlaying) {
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    }
  }, [currentPlayingVideo, videoId, isPlaying]);

  // Когда впервые загрузили видео — автозапуск
  useEffect(() => {
    if (isLoaded && videoRef.current) {
      const video = videoRef.current;

      const onReady = () => {
        // Останавливаем другие видео
        setCurrentPlayingVideo(videoId);

        // Автоплей с задержкой
        setTimeout(() => {
          video.play().catch(console.error);
        }, 100);
      };

      // Синхронизируем состояние с реальным состоянием видео
      const onPlay = () => {
        setIsPlaying(true);
        setCurrentPlayingVideo(videoId);
      };

      const onPause = () => {
        setIsPlaying(false);
        if (currentPlayingVideo === videoId) {
          setCurrentPlayingVideo(null);
        }
      };

      const onEnded = () => {
        setIsPlaying(false);
        if (currentPlayingVideo === videoId) {
          setCurrentPlayingVideo(null);
        }
      };

      video.addEventListener("loadeddata", onReady);
      video.addEventListener("play", onPlay);
      video.addEventListener("pause", onPause);
      video.addEventListener("ended", onEnded);

      return () => {
        video.removeEventListener("loadeddata", onReady);
        video.removeEventListener("play", onPlay);
        video.removeEventListener("pause", onPause);
        video.removeEventListener("ended", onEnded);
      };
    }
  }, [isLoaded, videoId, currentPlayingVideo, setCurrentPlayingVideo]);

  return (
    <div
      className="relative w-full aspect-[4/5] cursor-pointer"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        controls={false}
        preload="none"
        className="w-full h-full object-cover"
        aria-label={`Видео отзыв от ${name}`}
        poster={poster || "/placeholder.jpg"}
        loop
        playsInline
      >
        {isLoaded && <source src={src} type="video/mp4" />}
      </video>

      {/* Если ещё не загружено — показать кнопку */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-lg font-bold">
          ▶ Смотреть
        </div>
      )}

      {/* Если на паузе после загрузки — показать иконку */}
      {isLoaded && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white text-lg font-bold">
          ▶
        </div>
      )}
    </div>
  );
}