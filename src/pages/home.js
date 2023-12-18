import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-end bg-gray-900 bg-opacity-95 font-mono">
      <Head>
        <title>PGVI</title>
      </Head>

      <Sidebar style={'w-1/6 h-screen justify-center items-center'} />

      <div className="w-4/5 mr-6 my-6 rounded-3xl bg-white">
        <Header />

        <section className="flex-auto ml-16 mt-8">
          <h1 className="text-3xl text-medium">Cursos não terminados</h1>

          <div className="flex mt-2">
            <div className="flex flex-col justify-around w-[26vw] h-72 mr-10 rounded-2xl bg-gray-400">
              <video
                className="absolute w-[26vw] h-72 z-0 rounded-2xl"
                autoPlay
                loop
                muted
              >
                <source src={''} type="video/mp4" />
              </video>

              <div className="flex flex-col items-center justify-between z-10">
                <div className="flex justify-around w-4/5">
                  <div className="flex w-fit">
                    <Image className="w-[3vw] h-[3vw] rounded-full" />
                    <div className="flex-auto">
                      <h1 className="font-bold text-white">Alguem da silva</h1>

                      <h2 className="font-light text-gray-200">@alguem</h2>
                    </div>
                  </div>

                  <div className="w-fit h-fit py-2 px-3 rounded-lg bg-orange-600">
                    <h2 className="text-base text-white">0 min</h2>
                  </div>
                </div>

                <div className="flex w-4/6 h-[8vh] mx-auto pl-7 justify-center items-center rounded-xl bg-white bg-opacity-5 text-medium text-white">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-around w-[26vw] h-72 mr-10 rounded-2xl bg-gray-400">
              <video
                className="absolute w-[26vw] h-72 z-0 rounded-2xl"
                autoPlay
                loop
                muted
              >
                <source src={''} type="video/mp4" />
              </video>

              <div className="flex flex-col items-center justify-between z-10">
                <div className="flex justify-around w-4/5">
                  <div className="flex w-fit">
                    <Image className="w-[3vw] h-[3vw] rounded-full" />
                    <div className="flex-auto">
                      <h1 className="font-bold text-white">Alguem da silva</h1>

                      <h2 className="font-light text-gray-200">@alguem</h2>
                    </div>
                  </div>

                  <div className="w-fit h-fit py-2 px-3 rounded-lg bg-orange-600">
                    <h2 className="text-base text-white">0 min</h2>
                  </div>
                </div>

                <div className="flex w-4/6 h-[8vh] mx-auto pl-7 justify-center items-center rounded-xl bg-white bg-opacity-5 text-medium text-white">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ml-16 mt-8">
          <h1 className="text-3xl text-medium">Outros Cursos</h1>

          <div className="flex mt-2">
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400">
              <div className="flex">
                <div className="flex-auto w-fit">
                  <Image className="w-[3vw] h-[3vw] rounded-full" />
                  <h2 className="font-light text-gray-200">@alguem</h2>
                </div>
              </div>
            </div>
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400">
              <div className="flex">
                <div className="flex-auto w-fit">
                  <Image className="w-[3vw] h-[3vw] rounded-full" />
                  <h2 className="font-light text-gray-200">@alguem</h2>
                </div>
              </div>
            </div>
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400">
              <div className="flex">
                <div className="flex-auto w-fit">
                  <Image className="w-[3vw] h-[3vw] rounded-full" />
                  <h2 className="font-light text-gray-200">@alguem</h2>
                </div>
              </div>
            </div>
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400">
              <div className="flex">
                <div className="flex-auto w-fit">
                  <Image className="w-[3vw] h-[3vw] rounded-full" />
                  <h2 className="font-light text-gray-200">@alguem</h2>
                </div>
              </div>
            </div>
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400">
              <div className="flex">
                <div className="flex-auto w-fit">
                  <Image className="w-[3vw] h-[3vw] rounded-full" />
                  <h2 className="font-light text-gray-200">@alguem</h2>
                </div>
              </div>
            </div>
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400">
              <div className="flex">
                <div className="flex-auto w-fit">
                  <Image className="w-[3vw] h-[3vw] rounded-full" />
                  <h2 className="font-light text-gray-200">@alguem</h2>
                </div>
              </div>
            </div>
            <div className="w-1/12 h-40 rounded-xl bg-gray-400">
              <div className="flex">
                <div className="flex-auto w-fit">
                  <Image className="w-[3vw] h-[3vw] rounded-full" />
                  <h2 className="font-light text-gray-200">@alguem</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
