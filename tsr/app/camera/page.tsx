'use client';

import React, { useRef, useEffect, useState } from "react";

const CameraView: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let stream: MediaStream | null = null;

        const startCamera = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play().catch(e => {
                        console.error("Unable to play video", e);
                        setError("Unable to play video");
                    });
                }
            } catch (err) {
                console.error("Access error", err);
                if (err instanceof DOMException) {
                    if (err.name === 'NotAllowedError') {
                        setError("Access to camera denied.");
                    } else if (err.name === 'NotFoundError') {
                        setError("Camera not found.");
                    } else if (err.name === 'NotReadableError') {
                        setError("The camera is busy or cannot be used.");
                    } else {
                        setError(`Error accessing camera: ${err.message}`);
                    }
                } else {
                    setError("Unknown error while accessing camera.");
                }
            }
        };

        startCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className="w-full max-w-md space-y-2">
            {error && <p className="text-red-400 font-semibold text-sm">{error}</p>}
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="w-full aspect-video rounded-xl border-2 border-cyan-400 shadow-lg shadow-cyan-500/40 bg-black"
            />
        </div>
    );
};

export default function Camera() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center p-4 space-y-6">
            <h1 className="text-4xl font-black text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)] tracking-wide uppercase">
                AI Camera
            </h1>
            <CameraView />
        </div>
    );
}
