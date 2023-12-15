import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

      <div className="flex w-4/5 mr-6 my-6 rounded-3xl items-center bg-white"></div>
    </div>
  );
}
