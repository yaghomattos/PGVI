import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoNotificationsOutline, IoSearch } from 'react-icons/io5';
import { LiaUserSolid } from 'react-icons/lia';

export default function Home() {
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
            <Link className="text-lg text-yellow-600" href={'/home'}>
              Painel
            </Link>
          </div>
          <div className="mb-4">
            <Link className="text-lg text-gray-400" href={'/play'}>
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

      <div className="w-4/5 mr-6 my-6 rounded-3xl bg-white">
        <div className="flex ml-16 mt-8 items-center">
          <label className="flex w-3/6 h-12 rounded-2xl items-center bg-gray-100">
            <IoSearch className="ml-6" size={24} />
            <input
              className="w-full h-full ml-4 mr-2 bg-gray-100 outline-none"
              type="search"
              placeholder="Pesquisar..."
            />
          </label>

          <div className="flex ml-14">
            <LiaUserSolid className="mr-8" size={24} />
            <IoNotificationsOutline size={24} />
          </div>
        </div>

        <div className="flex-auto ml-16 mt-8">
          <h1 className="text-3xl text-medium">Cursos não terminados</h1>

          <div className="flex mt-2">
            <div className="block w-96 h-72 mr-10 rounded-2xl bg-gray-400"></div>

            <div className="block w-96 h-72 rounded-2xl bg-gray-400"></div>
          </div>
        </div>

        <div className="ml-16 mt-8">
          <h1 className="text-3xl text-medium">Outros Cursos</h1>

          <div className="flex mt-2">
            <div className="w-24 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-24 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-24 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-24 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-24 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-24 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-24 h-40 rounded-xl bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
