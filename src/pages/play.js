import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

export default function Play() {
  const navigate = useRouter();

  return (
    <div className="w-screen h-screen flex justify-end bg-gray-900 bg-opacity-95 font-mono">
      <Head>
        <title>PGVI</title>
      </Head>

      <Sidebar style={'w-1/6 h-screen justify-center items-center'} />

      <div className="w-4/5 mr-6 my-6 rounded-3xl bg-white">
        <Header />

        <div className="flex ml-16">
          <div>
            <h1 className="text-3xl mt-6">Nome do curso</h1>
            <video controls width={720} className="rounded-3xl mt-2">
              <source src="https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"></source>
            </video>
            <div className="flex-auto mt-4">
              <div className="flex items-center mb-2 border-2 border-black">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                ></img>
                <h2 className="text-2xl ml-6">Aula X</h2>
              </div>
              <h3 className="font-bold text-base text-gray-400">Descrição</h3>
              <p className="absolute w-[42vw] mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pulvinar dolor laoreet nunc tempor sagittis id ut velit. Proin
                cursus purus id diam ullamcorper ultrices. Vivamus molestie quis
                eros quis sagittis.
              </p>{' '}
            </div>
          </div>
          <div className="ml-10 w-96">
            <h2 className="text-3xl mt-6">Perguntas</h2>
            <ul>
              <li className="p-3">
                <div className="flex space-x-5 items-center">
                  <div className="border-solid border-2 border-orange-600 rounded-full w-10 h-10"></div>
                  <div>
                    <p className="text-lg">01 - Pergunta 1</p>
                    <p className="text-sm text-gray-500">(1:00)</p>
                  </div>
                </div>
              </li>
              <hr></hr>
              <li className="p-3">
                <div className="flex space-x-5 items-center">
                  <div className="border-solid border-2 border-orange-600 rounded-full w-10 h-10"></div>
                  <div>
                    <p className="text-lg">02 - Pergunta 2</p>
                    <p className="text-sm text-gray-500">(2:00)</p>
                  </div>
                </div>
              </li>
              <hr></hr>
              <li className="p-3">
                <div className="flex space-x-5 items-center">
                  <div className="border-solid border-2 border-orange-600 rounded-full w-10 h-10"></div>
                  <div>
                    <p className="text-lg">03 - Pergunta 3</p>
                    <p className="text-sm text-gray-500">(3:00)</p>
                  </div>
                </div>
              </li>
              <hr></hr>
              <li className="p-3">
                <div className="flex space-x-5 items-center">
                  <div className="border-solid border-2 border-orange-600 rounded-full w-10 h-10"></div>
                  <div>
                    <p className="text-lg">04 - Pergunta 4</p>
                    <p className="text-sm text-gray-500">(4:00)</p>
                  </div>
                </div>
              </li>
              <hr></hr>
              <li className="p-3">
                <div className="flex space-x-5 items-center">
                  <div className="border-solid border-2 border-orange-600 rounded-full w-10 h-10"></div>
                  <div>
                    <p className="text-lg">05 - Pergunta 5</p>
                    <p className="text-sm text-gray-500">(5:00)</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
