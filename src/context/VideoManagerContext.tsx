'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface VideoManagerContextType {
    currentPlayingVideo: string | null;
    setCurrentPlayingVideo: (id: string | null) => void;
}

const VideoManagerContext = createContext<VideoManagerContextType | null>(null);

export function VideoManagerProvider({ children }: { children: ReactNode }) {
    const [currentPlayingVideo, setCurrentPlayingVideo] = useState<string | null>(null);

    return (
        <VideoManagerContext.Provider value={{ currentPlayingVideo, setCurrentPlayingVideo }}>
            {children}
        </VideoManagerContext.Provider>
    );
}

export function useVideoManager() {
    const context = useContext(VideoManagerContext);
    if (!context) {
        throw new Error('useVideoManager must be used within a VideoManagerProvider');
    }
    return context;
}