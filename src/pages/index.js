import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TbLock } from 'react-icons/tb';
import { TfiEmail } from 'react-icons/tfi';
import Estudante from '../public/student.svg';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      //const response = await api.post('users', { login });

      localStorage.setItem('login', login);
      //localStorage.setItem('name', response.data.name);

      navigate.push('/home');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="w-screen h-screen flex justify-end bg-gray-900 bg-opacity-95 font-mono">
      <Head>
        <title>PGVI</title>
      </Head>

      <div className="flex w-5/12 h-screen items-end ">
        <div className="block mb-20">
          <Image src={Estudante} width={521} height={521} alt="Estudante" />

          <h1 className="mt-12 font-semibold text-4xl text-white">
            Entrar em PGVI
          </h1>
          <h6 className="font-light text-xl text-white">
            Plataforma de Gravação de Vídeos Interativos
          </h6>
        </div>
      </div>

      <section className="flex w-1/2 mr-6 my-6 rounded-3xl items-center bg-white">
        <form className="block w-96 mx-auto" onSubmit={handleLogin}>
          <h1 className="font-semibold text-3xl text-black">Entre</h1>

          <h2 className="mt-4 text-base text-black">
            Se você não tem uma conta registre-se.
          </h2>

          <div className="flex text-base text-black">
            <h2 className="mr-1">Você pode</h2>

            <Link className="text-yellow-600" href={'/register'}>
              Registrar-se aqui!
            </Link>
          </div>

          <span className="block mt-10 font-medium text-sm text-gray-400">
            Email
          </span>
          <label className="flex w-full mt-4">
            <TfiEmail className="absolute" size={20} />
            <input
              className="w-full pl-8 pb-2 text-black outline-none border-b-2 border-gray-600 placeholder-black"
              placeholder="Digite seu endereço de e-mail"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </label>
          <span className="block mt-8 font-medium text-sm text-gray-400">
            Senha
          </span>
          <label className="flex w-full mt-4">
            <TbLock className="absolute" size={20} />
            <input
              className="w-full pl-8 pb-2 text-black outline-none border-b-2 border-gray-600 placeholder-black"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="flex mt-4 justify-between">
            <div>
              <input type="checkbox" />
              <label className="pl-2">Lembrar-me</label>
            </div>
            <button className="text-gray-400" type="button">
              Esqueceu a senha?
            </button>
          </div>

          <button
            className="block w-full h-12 mt-12 rounded-3xl bg-orange-500 text-white"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}
