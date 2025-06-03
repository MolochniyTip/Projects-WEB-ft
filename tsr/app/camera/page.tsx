'use client';

import React, { useRef, useEffect, useState } from "react";

const CameraView: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let stream: MediaStream | null=null

        const startCamera = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({video: true})

                if (videoRef.current){
                    videoRef.current.srcObject = stream;
                    videoRef.current.play().catch(e => {
                        console.error("Unable to play video", e)
                        setError("Unable to play video")
                    });
                }
            }
            catch (err){
                console.error("Access error", err);
                if (err instanceof DOMException){
                    if (err.name === 'NotAllowedError'){
                        setError("Access to camera denied.")
                    } else if (err.name === 'NotFoundError'){
                        setError("Camera not found.")
                    } else if (err.name === 'NorReadableError'){
                        setError("The camera is busy or cannot be used.")
                    } else {
                        setError(`Error accessing camera: ${err.message}`)
                    }
                } else {
                    setError("Unknown error while accessing camera.")
                }
            }
        }

        startCamera();

        return() => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop())
            }
        }
    }, []);

    return (
        <div>
            {error && <p className="text-red-400 font-semibold text-sm">{error}</p>}
            <video ref={videoRef} autoPlay muted playsInline style={{width: '100%', maxWidth: '600px', backgroundColor: '#000'}}></video>
        </div>
    )
};

export default function Camera() {
    return (
        <div>
            <h1 className="text-2xl font-bold">AI Camera</h1>
            <CameraView />
        </div>
    )
}