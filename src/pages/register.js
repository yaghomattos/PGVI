import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { TfiEmail, TfiLock } from 'react-icons/tfi';
import Estudante from '../public/student.svg';
import api from '../services/api';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const navigate = useRouter();

  function storage(userId) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('login', email);
      localStorage.setItem('password', password);
      localStorage.setItem('userId', userId);
    }

    navigate.push('/home');
  }

  async function handleRegister(e) {
    e.preventDefault();

    try {
      api
        .post('/users/signup', {
          username: email,
          name: username,
          email: email,
          password: password,
          type: 'STUDENT',
        })
        .then((response) => {
          storage(response.data.id);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      alert('Falha no login, tente novamente. \n' + err.message);
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
        <form className="block w-96 mx-auto" onSubmit={handleRegister}>
          <h1 className="font-semibold text-3xl text-black">Registre-se</h1>

          <h2 className="mt-4 text-base text-black">
            Se você tem uma conta registrada
          </h2>

          <div className="flex text-base text-black">
            <h2 className="mr-1">Você pode</h2>

            <Link className="text-orange-500" href="/">
              Entrar aqui!
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <span className="block mt-10 font-medium text-sm text-gray-400">
            Usuário
          </span>
          <label className="flex w-full mt-4">
            <CiUser className="absolute" size={20} />
            <input
              className="w-full pl-8 pb-2 text-black outline-none border-b-2 border-gray-600 placeholder-black"
              placeholder="Digite seu nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <span className="block mt-8 font-medium text-sm text-gray-400">
            Senha
          </span>
          <label className="flex w-full mt-4">
            <TfiLock className="absolute" size={20} />
            <input
              className="w-full pl-8 pb-2 text-black outline-none border-b-2 border-gray-600 placeholder-black"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <span className="block mt-10 font-medium text-sm text-gray-400">
            Confirmar senha
          </span>
          <label className="flex w-full mt-4">
            <TfiLock className="absolute" size={20} />
            <input
              className="w-full pl-8 pb-2 text-black outline-none border-b-2 border-gray-600 placeholder-black"
              placeholder="Confirme sua senha"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </label>
          {password === password2 ? (
            <button
              className="block w-full h-12 mt-12 rounded-3xl bg-orange-500 text-white"
              type="submit"
            >
              Registrar
            </button>
          ) : (
            <h1 className="mt-4">Senhas não coincidem!</h1>
          )}
        </form>
      </section>
    </div>
  );
}
