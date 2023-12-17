import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

export default function Home() {
  const navigate = useRouter();

  return (
    <div className="w-screen h-screen flex justify-end bg-gray-900 bg-opacity-95 font-mono">
      <Head>
        <title>PGVI</title>
      </Head>

      <Sidebar style={'w-1/6 h-screen justify-center items-center'} />

      <div className="w-4/5 mr-6 my-6 rounded-3xl bg-white">
        <Header />

        <div className="flex-auto ml-16 mt-8">
          <h1 className="text-3xl text-medium">Cursos não terminados</h1>

          <div className="flex mt-2">
            <div className="block w-2/6 h-72 mr-10 rounded-2xl bg-gray-400"></div>

            <div className="block w-2/6 h-72 rounded-2xl bg-gray-400"></div>
          </div>
        </div>

        <div className="ml-16 mt-8">
          <h1 className="text-3xl text-medium">Outros Cursos</h1>

          <div className="flex mt-2">
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-1/12 h-40 mr-6 rounded-xl bg-gray-400"></div>
            <div className="w-1/12 h-40 rounded-xl bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
