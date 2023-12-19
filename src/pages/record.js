import VideoPreview from '@/components/VideoPreview';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Sidebar from '../components/sidebar';

export default function record() {
  const ReactMediaRecorder = dynamic(
    () => import('react-media-recorder').then((mod) => mod.ReactMediaRecorder),
    {
      ssr: false,
    }
  );

  const [audio, setAudio] = useState(true);
  const [quality, setQuality] = useState('720');
  const [recordType, setRecordType] = useState('screen');

  return (
    <div className="w-screen h-screen flex justify-end bg-gray-900 bg-opacity-95 font-mono">
      <Head>
        <title>PGVI</title>
      </Head>

      <Sidebar style={'w-1/6 h-screen justify-center items-center'} />

      <div className="w-4/5 mr-6 my-6 rounded-3xl bg-white">
        <section className="ml-16 mt-6">
          <h1 className="text-3xl text-medium">Outros Cursos</h1>

          <ul className="flex mt-2">
            <li className="w-[6vw] h-[20vh] mr-6 rounded-xl bg-gray-400">
              <div className="flex-auto w-fit">
                <Image className="w-[3vw] h-[3vw] rounded-full" />
                <h2 className="font-light text-gray-200">@alguem</h2>
              </div>
            </li>
            <li className="w-[6vw] h-[20vh] mr-6 rounded-xl bg-gray-400">
              <div className="flex-auto w-fit">
                <Image className="w-[3vw] h-[3vw] rounded-full" />
                <h2 className="font-light text-gray-200">@alguem</h2>
              </div>
            </li>
            <li className="w-[6vw] h-[20vh] mr-6 rounded-xl bg-gray-400">
              <div className="flex-auto w-fit">
                <Image className="w-[3vw] h-[3vw] rounded-full" />
                <h2 className="font-light text-gray-200">@alguem</h2>
              </div>
            </li>
            <li className="w-[6vw] h-[20vh] mr-6 rounded-xl bg-gray-400">
              <div className="flex-auto w-fit">
                <Image className="w-[3vw] h-[3vw] rounded-full" />
                <h2 className="font-light text-gray-200">@alguem</h2>
              </div>
            </li>
            <li className="w-[6vw] h-[20vh] mr-6 rounded-xl bg-gray-400">
              <div className="flex-auto w-fit">
                <Image className="w-[3vw] h-[3vw] rounded-full" />
                <h2 className="font-light text-gray-200">@alguem</h2>
              </div>
            </li>
            <li className="w-[6vw] h-[20vh] mr-6 rounded-xl bg-gray-400">
              <div className="flex-auto w-fit">
                <Image className="w-[3vw] h-[3vw] rounded-full" />
                <h2 className="font-light text-gray-200">@alguem</h2>
              </div>
            </li>
            <li className="w-[6vw] h-[20vh] mr-6 rounded-xl bg-gray-400">
              <div className="flex-auto w-fit">
                <Image className="w-[3vw] h-[3vw] rounded-full" />
                <h2 className="font-light text-gray-200">@alguem</h2>
              </div>
            </li>
          </ul>
        </section>

        <section className="ml-16 mt-6">
          <h2 className="text-3xl">Gravar</h2>

          <ul className="flex w-[45vw] justify-center">
            <li className="flex items-center">
              <input
                className="w-[25px] h-[25px]"
                id="screenType"
                type="checkbox"
                checked={recordType === 'screen'}
                onChange={() => setRecordType('screen')}
              />
              <label className="ml-2" htmlFor="screenType">
                Screen
              </label>
            </li>
            <li className="flex items-center">
              <input
                className="w-[25px] h-[25px] ml-[2vw]"
                id="webcamType"
                type="checkbox"
                checked={recordType === 'webcam'}
                onChange={() => setRecordType('webcam')}
              />
              <label className="ml-2" htmlFor="webcamType">
                Webcam
              </label>
            </li>
            <li className="flex items-center">
              <input
                className="w-[25px] h-[25px] ml-[2vw]"
                id="audioActivate"
                type="checkbox"
                checked={audio === true}
                onChange={() => setAudio(false)}
              />
              <label className="ml-2" htmlFor="audioActivate">
                Microfone
              </label>
            </li>
            <li className="flex items-center">
              <input
                className="w-[25px] h-[25px] ml-[2vw]"
                id="720p"
                type="checkbox"
                checked={quality === '720'}
                onChange={() => setQuality('1080')}
              />
              <label className="ml-2" htmlFor="720p">
                720P
              </label>
            </li>
            <li className="flex items-center">
              <input
                className="w-[25px] h-[25px] ml-[2vw]"
                id="1080p"
                type="checkbox"
                checked={quality === '1080'}
                onChange={() => setQuality('720')}
              />
              <label className="ml-2" htmlFor="1080p">
                1080P
              </label>
            </li>
          </ul>

          <ReactMediaRecorder
            video={recordType == 'webcam'}
            screen={recordType == 'screen'}
            audio={audio}
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
                {status == 'idle' ? (
                  <button
                    className="rounded-xl bg-orange-400 p-3 hover:bg-orange-600"
                    onClick={startRecording}
                  >
                    Start
                  </button>
                ) : null}
                {status == 'paused' ? (
                  <button
                    className="rounded-xl bg-orange-400 p-3 hover:bg-orange-600"
                    onClick={resumeRecording}
                  >
                    Resume
                  </button>
                ) : null}
                {status == 'recording' ? (
                  <button
                    className="rounded-xl bg-orange-400 p-3 hover:bg-orange-600"
                    onClick={pauseRecording}
                  >
                    Pause
                  </button>
                ) : null}
                {status == 'recording' || status == 'paused' ? (
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
        </section>
      </div>
    </div>
  );
}
