import api from '@/services/api';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

export default function Home(props) {
  const userId = props.id;

  const [userVideos, setUserVideos] = useState([1, 2, 3]);
  const [allVideos, setAllVideos] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const navigate = useRouter();

  api
    .get(`/users/videos/userId/${userId}`)
    .then((response) => {
      setUserVideos(response);
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

        <section className="ml-16 mt-4">
          <h1 className="text-3xl text-medium">Meus Cursos</h1>
          <div
            className="flex flex-row overflow-x-scroll w-[54vw] mt-2"
            style={{
              paddingBottom: '4px',
            }}
          >
            {userVideos.map((video) => {
              return (
                <div
                  key={video.valueOf()}
                  className="w-[26vw] h-[40vh] flex-shrink-0 mr-[2vw] rounded-2xl bg-gray-400"
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
                        <Image
                          className="w-[3vw] h-[3vw] rounded-full"
                          alt="username"
                          src={video.content}
                        />
                        <h2 className="font-light text-gray-200">
                          {video.username}
                        </h2>
                      </div>

                      <div className="w-fit h-fit py-2 px-3 rounded-lg bg-orange-600">
                        <h2 className="text-base text-white">
                          {'video.time min'}
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
            {allVideos ? (
              allVideos.map((allVideo, index) => {
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[8vw] h-[20vh] mr-6 rounded-xl bg-gray-400"
                    onClick={() => navigate.push('/play', allVideo.id)}
                  >
                    <div className="flex flex-col h-full items-center justify-end">
                      <Image
                        className="mb-2 w-[3vw] h-[3vw] rounded-full"
                        alt="other user"
                        src={allVideo.content}
                      />
                      <h2 className="mb-4 font-light text-gray-200">
                        {allVideo.username}
                      </h2>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="w-full h-20 bg-red-200"></div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
