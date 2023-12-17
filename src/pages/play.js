import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Play() {
  const navigate = useRouter();

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
            <Link className="text-lg text-gray-400" href={'/home'}>
              Painel
            </Link>
          </div>
          <div className="mb-4">
            <Link className="text-lg text-yellow-600" href={'/play'}>
              Minhas aulas
            </Link>
          </div>
          <div className="mb-4">
            <Link className="text-lg text-gray-400" href={'/record'}>
              Gravações
            </Link>
          </div>
          <div className="mb-4">
            <Link className="text-lg text-gray-400 line-through" href={'/home'}>
              Respostas
            </Link>
          </div>
          <div>
            <Link className="text-lg text-gray-400 line-through" href={'/home'}>
              Configurações
            </Link>
          </div>
        </nav>
      </div>

      <div className="flex-col w-4/5 mr-6 my-6 rounded-3xl items-center bg-white p-20">
        <div class="flex rounded-3xl bg-gray-200">
          <input
            class=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
            type="search"
            name="search"
            placeholder="Search..."
          />
          <button class="m-2 rounded-lg bg-transparent px-4 py-2 text-black">
            <svg
              class="fill-current h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="flex">
          <div>
            <h1 className="text-3xl mt-10 mb-6">Nome do curso</h1>
            <video controls width={800} height={450} className="rounded-3xl">
              <source src="https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"></source>
            </video>
            <div className="flex items-center space-x-5">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              ></img>
              <h2 className="text-2xl mt-10 mb-6">Aula X</h2>
            </div>
          </div>
          <div className="ml-10 w-96">
            <h2 className="text-3xl mt-10 mb-6">Perguntas</h2>
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
