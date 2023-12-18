import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import VideoPreview from "@/components/VideoPreview";
const ReactMediaRecorder = dynamic(
  () => import("react-media-recorder").then((mod) => mod.ReactMediaRecorder),
  {
    ssr: false,
  }
);

export default function record() {
  const navigate = useRouter();
  const [recordType, setRecordType] = useState("screen");

  return (
    <div className="w-screen h-screen flex justify-end bg-gray-900 bg-opacity-95 font-mono">
      <Head>
        <title>PGVI</title>
      </Head>

      <div className="w-1/6 h-screen justify-center items-center">
        <div className="flex ml-4 mt-16 items-center">
          <div className="flex w-14 h-14 justify-center items-center rounded-2xl bg-gray-400">
            <span className="font-bold text-3xl text-white">B</span>
          </div>
          <span className="ml-6 font-bold text-3xl text-white">Bot</span>
        </div>

        <nav className="block ml-4 mt-20">
          <div className="mb-4">
            <Link className="text-lg text-gray-400" href={"/home"}>
              Painel
            </Link>
          </div>
          <div className="mb-4">
            <Link className="text-lg text-gray-400" href={"/play"}>
              Minhas aulas
            </Link>
          </div>
          <div className="mb-4">
            <Link className="text-lg text-yellow-600" href={"/record"}>
              Gravações
            </Link>
          </div>
          <div className="mb-4">
            <Link className="text-lg text-gray-400 line-through" href={"/home"}>
              Respostas
            </Link>
          </div>
          <div>
            <Link className="text-lg text-gray-400 line-through" href={"/home"}>
              Configurações
            </Link>
          </div>
        </nav>
      </div>

      <div className="flex-col w-4/5 mr-6 my-6 rounded-3xl items-center bg-white">
        <h2 className="text-3xl mt-10 mb-6">Gravar</h2>
        <input
          id="screenType"
          type="checkbox"
          checked={recordType === "screen"}
          onChange={() => setRecordType("screen")}
        />
        <label htmlFor="screenType">Screen</label>
        <input
          id="webcamType"
          type="checkbox"
          checked={recordType === "webcam"}
          onChange={() => setRecordType("webcam")}
        />
        <label htmlFor="webcamType">Webcam</label>
        <ReactMediaRecorder
          video={recordType == "webcam"}
          screen={recordType == "screen"}
          render={({
            status,
            startRecording,
            resumeRecording,
            pauseRecording,
            stopRecording,
            clearBlobUrl,
            previewStream,
            mediaBlobUrl,
          }) => (
            <div>
              <p>{status}</p>
              {console.log(previewStream)}
              <VideoPreview
                stream={previewStream}
                blob={mediaBlobUrl}
                status={status}
              />
              <p>{mediaBlobUrl}</p>
              {status == "idle" ? (
                <button
                  className="rounded-xl bg-orange-400 p-3 hover:bg-orange-600"
                  onClick={startRecording}
                >
                  Start
                </button>
              ) : null}
              {status == "paused" ? (
                <button
                  className="rounded-xl bg-orange-400 p-3 hover:bg-orange-600"
                  onClick={resumeRecording}
                >
                  Resume
                </button>
              ) : null}
              {status == "recording" ? (
                <button
                  className="rounded-xl bg-orange-400 p-3 hover:bg-orange-600"
                  onClick={pauseRecording}
                >
                  Pause
                </button>
              ) : null}
              {status == "recording" || status == "paused" ? (
                <button
                  className="rounded-xl bg-red-600 p-3 hover:bg-red-700"
                  onClick={stopRecording}
                >
                  Stop
                </button>
              ) : null}
              {mediaBlobUrl ? (
                <button
                  className="rounded-xl bg-red-600 p-3 hover:bg-red-700"
                  onClick={clearBlobUrl}
                >
                  Clear
                </button>
              ) : null}
            </div>
          )}
        />
      </div>
    </div>
  );
}
