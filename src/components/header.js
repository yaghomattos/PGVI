import Link from 'next/link';
import { IoNotificationsOutline, IoSearch } from 'react-icons/io5';
import { LiaUserSolid } from 'react-icons/lia';

export default function Header() {
  return (
    <div className="flex ml-16 mt-6 items-center">
      <label className="flex w-7/12 h-12 rounded-2xl items-center bg-gray-100">
        <IoSearch className="ml-6" size={24} />
        <input
          className="w-full h-full ml-4 mr-2 bg-gray-100 outline-none"
          type="search"
          placeholder="Pesquisar..."
        />
      </label>

      <div className="flex ml-14">
        <Link href={'/user'}>
          <LiaUserSolid className="mr-8" size={24} />
        </Link>

        <IoNotificationsOutline size={24} />
      </div>
    </div>
  );
}
