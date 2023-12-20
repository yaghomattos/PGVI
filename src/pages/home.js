import api from '@/services/api';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

export default function Home() {
  const [userId, setUserId] = useState();

  const [userVideos, setUserVideos] = useState([1, 2, 3, 4]);
  const [allVideos, setAllVideos] = useState([]);

  const navigate = useRouter();

  const myvideos_style =
    'flex-shrink-0 w-[26vw] h-[40vh] mr-[2vw] rounded-2xl bg-gray-400';
  const otherVideos_style =
    'flex-shrink-0 w-[8vw] h-[20vh] mr-6 rounded-xl bg-gray-400';

  useEffect(() => {
    setUserId(localStorage.getItem('userId'));
  }, []);

  api
    .get(`/users/videos/userId/${userId}`)
    .then((response) => {
      // setUserVideos(response.data);
    })
    .catch((err) => {
      console.log('userId - ' + err.message);
    });

  api
    .get(`/video/all-videos`)
    .then((response) => {
      setAllVideos(response.data);
    })
    .catch((err) => {
      console.log('allVideos - ' + err.message);
    });

  return (
    <div className="w-screen h-screen flex justify-end bg-gray-900 bg-opacity-95 font-mono">
      <Head>
        <title>PGVI</title>
      </Head>

      <Sidebar style={'w-1/6 h-screen justify-center items-center'} />

      <div className="w-4/5 mr-6 my-6 rounded-3xl bg-white">
        <Header />

        <section className="ml-16 mt-4 overflow-hidden">
          <h1 className="text-3xl text-medium">Meus Cursos</h1>
          <div
            className="flex flex-row overflow-x-scroll w-[54vw] mt-2"
            style={{
              paddingBottom: '4px',
            }}
          >
            {userVideos.map((video, index) => {
              return (
                <div
                  key={index}
                  className={
                    video.content != null
                      ? 'flex-shrink-0 w-[25vw] h-[40vh] mr-[2vw] rounded-2xl'
                      : myvideos_style
                  }
                  onClick={() => navigate.push('/play', video.id)}
                >
                  <video
                    className="absolute z-0 rounded-2xl"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={video.content} type="video/mp4" />
                  </video>

                  <div className="flex flex-col w-full h-full justify-around items-center z-10">
                    <div className="flex w-full justify-around items-center">
                      <div className="flex flex-col">
                        <video
                          className="absolute z-0 rounded-2xl"
                          autoPlay
                          loop
                          muted
                        >
                          <source src={video.content} type="video/mp4" />
                        </video>
                        {/* <Image
                          className="w-[3vw] h-[3vw] rounded-full"
                          alt="username"
                          src={video.content}
                        /> */}
                        <h2 className="font-light text-gray-200">
                          {video.userName}
                        </h2>
                      </div>

                      <div className="w-fit h-fit py-2 px-3 rounded-lg bg-orange-600">
                        <h2 className="text-base text-white">
                          {Math.floor(Math.random() * 10) + ' min'}
                        </h2>
                      </div>
                    </div>

                    <div className="flex w-4/6 h-[8vh] mx-auto pl-7 justify-center items-center rounded-xl bg-white bg-opacity-5 text-medium text-white">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="ml-16 mt-4">
          <h1 className="text-3xl text-medium">Outros Cursos</h1>

          <div
            className="flex flex-row overflow-x-scroll w-[54vw] mt-2"
            style={{
              paddingBottom: '4px',
            }}
          >
            {allVideos.map((allVideo, index) => {
              return (
                <div
                  key={index}
                  className={
                    allVideo.content != null
                      ? 'flex-shrink-0 w-[8vw] h-[20vh] mr-6 rounded-xl'
                      : otherVideos_style
                  }
                  onClick={() => navigate.push('/play', allVideo.id)}
                >
                  <video
                    className="absolute z-0 rounded-2xl"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={allVideo.content} type="video/mp4" />
                  </video>
                  <div className="flex flex-col h-full items-center justify-end">
                    {/* <Image
                      className="mb-2 w-[3vw] h-[3vw] rounded-full"
                      alt="other user"
                      src={allVideo.content}
                    /> */}
                    <h2 className="mb-4 font-light text-gray-200">
                      {allVideo.userName}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
