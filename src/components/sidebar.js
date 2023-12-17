import Link from 'next/link';

export default function Sidebar(props) {
  console.log(props.valueOf());

  return (
    <div className={props.style}>
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
  );
}
