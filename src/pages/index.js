import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Estudante from '../public/student.svg';
import api from '../services/api';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('users', { login });

      localStorage.setItem('login', login);
      localStorage.setItem('name', response.data.name);

      navigate.push('/home');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="w-screen h-screen flex justify-end bg-blue-900 bg-opacity-90 font-mono">
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

          <span className="block mt-10">Email</span>
          <input
            className="block w-full border-b-2 border-black"
            placeholder="Digite seu endereço de e-mail"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <span className="block mt-8">Senha</span>
          <input
            className="block w-full border-b-2 border-black"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="mt-2" type="">
            Esqueci minha senha
          </button>

          <button
            className="block w-full h-10 mt-12 rounded-3xl bg-yellow-600 text-white"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}
