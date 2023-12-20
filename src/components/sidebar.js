import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar(props) {
  const style = props.style;

  const { pathname } = useRouter();

  const inactive = 'text-lg text-gray-400 hover:text-orange-200';
  const active = ' text-lg text-orange-600';

  const bg_active =
    'flex w-[20vw] h-[8vh] mb-4 -ml-6 pl-6 items-center rounded-l-full bg-white';

  return (
    <div className={style}>
      <div className="flex ml-4 mt-16 items-center">
        <div className="flex w-14 h-14 justify-center items-center rounded-2xl bg-gray-400">
          <span className="font-bold text-3xl text-white">B</span>
        </div>
        <span className="ml-6 font-bold text-3xl text-white">Bot</span>
      </div>

      <nav className="block ml-4 mt-20">
        <div className={pathname == '/home' ? bg_active : 'mb-4'}>
          <Link
            className={pathname == '/home' ? active : inactive}
            href={'/home'}
          >
            Painel
          </Link>
        </div>
        <div className={pathname == '/record' ? bg_active : 'mb-4'}>
          <Link
            className={pathname == '/record' ? active : inactive}
            href={'/record'}
          >
            Gravações
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
