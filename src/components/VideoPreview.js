import { useEffect, useRef } from 'react';

export default function VideoPreview({ stream, blob, status }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (status == 'idle' || status == 'acquiring_media')
    return (
      <div className="bg-gray-400 rounded-3xl w-[45vw] h-[46vh] flex justify-center items-center">
        <p className="font-medium text-lg text-white">Inicie uma gravação</p>
      </div>
    );

  if (!stream && !blob) return 'nothing';

  if ((status == 'recording' || status == 'paused') && stream)
    return (
      <video
        className="flex w-[45vw] h-[46vh] rounded-3xl border-solid border-2 border-orange-600 bg-slate-500"
        ref={videoRef}
        autoPlay
      />
    );

  if (status == 'stopped' && blob)
    return (
      <video
        className="flex w-[45vw] h-[46vh] rounded-3xl border-solid border-2 border-orange-600 bg-slate-500"
        src={blob}
        controls
      />
    );
}
