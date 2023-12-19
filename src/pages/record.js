import VideoPreview from "@/components/VideoPreview";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";

export default function record() {
  const ReactMediaRecorder = dynamic(
    () => import("react-media-recorder").then((mod) => mod.ReactMediaRecorder),
    {
      ssr: false,
    }
  );

  const [audio, setAudio] = useState(true);
  const [quality, setQuality] = useState("720");
  const [recordType, setRecordType] = useState("screen");
  const [userId, setUserId] = useState("screen");
  const [questions, setQuestions] = useState([]);
  const [content, setContent] = useState("");
  const [correct, setCorrect] = useState("A");
  const [options, setOptions] = useState({ A: "", B: "", C: "", D: "" });
  const [moment, setMoment] = useState("00:00:00");
  const [currQuenstionIndex, setCurrQuenstionIndex] = useState(0);

  useEffect(() => {
    setCurrQuenstionIndex(questions.length - 1);
  }, [questions]);

  return (
    <div className="w-screen h-screen flex justify-end bg-gray-900 bg-opacity-95 font-mono">
      <Head>
        <title>PGVI</title>
      </Head>

      <Sidebar style={"w-1/6 h-screen justify-center items-center"} />

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

        <section className="flex justify-start  ml-16 mt-6">
          <div>
            <h2 className="text-3xl">Gravar</h2>
            <ReactMediaRecorder
              video={recordType == "webcam"}
              screen={recordType == "screen"}
              audio={audio}
              render={({
                status,
                startRecording,
                resumeRecording,
                pauseRecording,
                stopRecording,
                clearBlobUrl,
                muteAudio,
                unMuteAudio,
                isAudioMuted,
                previewStream,
                mediaBlobUrl,
              }) => (
                <div>
                  <ul className="flex w-[45vw] justify-start mb-4 mt-3 ml-3">
                    <li className="flex items-center">
                      <input
                        className="w-[25px] h-[25px] accent-orange-600"
                        id="screenType"
                        type="checkbox"
                        checked={recordType === "screen"}
                        onChange={() => setRecordType("screen")}
                      />
                      <label className="ml-2" htmlFor="screenType">
                        Screen
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        className="w-[25px] h-[25px] ml-[2vw] accent-orange-600"
                        id="webcamType"
                        type="checkbox"
                        checked={recordType === "webcam"}
                        onChange={() => setRecordType("webcam")}
                      />
                      <label className="ml-2" htmlFor="webcamType">
                        Webcam
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        className="w-[25px] h-[25px] ml-[2vw] accent-orange-600"
                        id="720p"
                        type="checkbox"
                        checked={quality === "720"}
                        onChange={() => setQuality("720")}
                      />
                      <label className="ml-2" htmlFor="720p">
                        720P
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        className="w-[25px] h-[25px] ml-[2vw] accent-orange-600"
                        id="1080p"
                        type="checkbox"
                        checked={quality === "1080"}
                        onChange={() => setQuality("1080")}
                      />
                      <label className="ml-2" htmlFor="1080p">
                        1080P
                      </label>
                    </li>
                    <li className="flex items-center">
                      <button
                        className={
                          !isAudioMuted
                            ? "rounded-xl bg-orange-400 p-3 hover:bg-orange-600 ml-[2vw]"
                            : "rounded-xl bg-red-600 p-3 hover:bg-orange-700 ml-[2vw]"
                        }
                        id="audioActivate"
                        type="button"
                        onClick={() => {
                          !isAudioMuted ? muteAudio() : unMuteAudio();
                        }}
                      >
                        {!isAudioMuted ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-mic-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-mic-mute-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3" />
                            <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12-.708.708z" />
                          </svg>
                        )}
                      </button>
                    </li>
                  </ul>
                  <VideoPreview
                    stream={previewStream}
                    blob={mediaBlobUrl}
                    status={status}
                  />
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
          <div className="space-x-3 w-[500px] space-y-3">
            <h2 className="text-3xl mb-3">Perguntas</h2>
            {questions.length && questions[currQuenstionIndex] ? (
              <div className="flex items-center justify-between space-x-5">
                {currQuenstionIndex > 0 ? (
                  <button
                    onClick={() =>
                      setCurrQuenstionIndex(currQuenstionIndex - 1)
                    }
                    className="rounded-xl bg-orange-400 p-3 hover:bg-orange-600"
                  >{`<`}</button>
                ) : (
                  <button
                    disabled
                    className="rounded-xl bg-gray-400 p-3"
                  >{`<`}</button>
                )}
                <div className="grow">
                  <p className="text-sm text-gray-500">{`${questions[currQuenstionIndex].content}`}</p>
                  {questions[currQuenstionIndex].options.map((option) => (
                    <p
                      key={`pergunta-${option.answerLetter}`}
                      className="text-sm text-gray-500"
                    >{`${option.answerLetter}) ${option.answerText}`}</p>
                  ))}
                  <p className="text-sm text-gray-500">{`Correta: ${questions[currQuenstionIndex].CorrectAnswerLetter}`}</p>
                  <p className="text-sm text-gray-500">{`Momento: ${questions[currQuenstionIndex].momentOnVideo}`}</p>
                  <hr></hr>
                </div>
                {currQuenstionIndex < questions.length - 1 ? (
                  <button
                    onClick={() =>
                      setCurrQuenstionIndex(currQuenstionIndex + 1)
                    }
                    className="rounded-xl bg-orange-400 p-3 hover:bg-orange-600"
                  >{`>`}</button>
                ) : (
                  <button
                    disabled
                    className="rounded-xl bg-gray-400 p-3"
                  >{`>`}</button>
                )}
              </div>
            ) : null}
            <label
              htmlFor="conteudo"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Conteúdo
            </label>
            <input
              type="text"
              name="conteudo"
              id="conteudo"
              placeholder="Qual é a pergunta?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium  outline-none focus:border-orange-600 focus:shadow-md"
            />
            <ul className=" w-full space-y-2">
              {Object.keys(options).map((option) => (
                <li key={option} className="flex items-center space-x-3">
                  <label htmlFor={`option${option}`}>{`${option})`}</label>
                  <input
                    type="text"
                    name={`option${option}`}
                    id={`option${option}`}
                    placeholder={`Opção ${option}`}
                    value={options[option]}
                    onChange={(e) =>
                      setOptions({ ...options, [option]: e.target.value })
                    }
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium  outline-none focus:border-orange-600 focus:shadow-md"
                  />
                  <input
                    className="w-[25px] h-[25px] accent-orange-600"
                    id={`option${option}-right`}
                    type="checkbox"
                    checked={correct === option}
                    onChange={() => setCorrect(option)}
                  ></input>
                </li>
              ))}
            </ul>
            <div className="flex items-end justify-around">
              <div>
                <label
                  htmlFor="momento"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Momento (hh:mm:ss)
                </label>
                <input
                  type="text"
                  value={moment}
                  onChange={(e) => setMoment(e.target.value)}
                  className="w-[110px] appearance-none rounded-md border border-[#e0e0e0] bg-white py-1 px-3 text-base font-medium  outline-none focus:border-orange-600 focus:shadow-md"
                ></input>
              </div>
              <button
                className="rounded-xl bg-orange-400 p-3 hover:bg-orange-600"
                onClick={() => {
                  setQuestions([
                    ...questions,
                    {
                      content: content,
                      momentOnVideo: moment,
                      type: "OPEN",
                      options: Object.keys(options).map((option) => ({
                        answerLetter: option,
                        answerText: options[option],
                      })),
                      userId: userId,
                      id: null,
                      videoId: null,
                      CorrectAnswerLetter: correct,
                    },
                  ]);
                }}
              >
                Adicionar Pergunta
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
