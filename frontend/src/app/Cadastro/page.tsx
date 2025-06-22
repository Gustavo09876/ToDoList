'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Formulario from '../../Componentes/Ui/Formulario';
import BotaoEntrar from '../../Componentes/Ui/BotãoEntrar';
import Link from 'next/link';
import api from '../../Services/api';

export default function Home() {

    const [user, setUser] = useState([]);

    const inputEmail = useRef<HTMLInputElement>(null);
    const inputSenha = useRef<HTMLInputElement>(null);
    const inputConfirm = useRef<HTMLInputElement>(null);
    const checkboxRef = useRef<HTMLInputElement>(null);
    
    async function createUser() {
        console.log(api);
        console.log(typeof api.post);

        await api.post('/usuarios', {
            email: inputEmail.current?.value,
            password: inputSenha.current?.value,
        });


        
        // if (inputEmail.current && inputSenha.current && inputConfirm.current) {
        //     const email = inputEmail.current.value;
        //     const senha = inputSenha.current.value;
        //     const confirm = inputConfirm.current.value;

        //     if (senha !== confirm) {
        //         alert('As senhas não coincidem!');
        //         return;
        //     }

        //     try {
        //         const response = await fetch('/api/users', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ email, senha }),
        //         });

        //         if (!response.ok) {
        //             throw new Error('Erro ao criar usuário');
        //         }

        //         const data = await response.json();
        //         setUser(data);
        //         alert('Usuário criado com sucesso!');
        //     } catch (error) {
        //         console.error('Erro:', error);
        //         alert('Erro ao criar usuário');
        //     }
        // }
    }

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        background: 'linear-gradient(180deg, #F6FDFF 16.35%, #A2BFC7 100%)',
        position: 'relative',
      }}
    >
      <Image
        src="/assets/Images/figma2 1.png"
        alt="Background"
        width={749}
        height={749}
        style={{
          position: 'fixed',
          top: 0,
          left: '50vw',
          width: '40vw',
          height: '40vw',
          transformOrigin: 'top right',
          backgroundSize: 'cover',
          zIndex: 1,
        }}
      />
        <div
        style={{
          flex: 1,
          height: '100%',
          paddingLeft: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-around',
          zIndex: 2,
        }}
      >
        <Image
          src="/Assets/Images/Titulo.png"
          alt="Logo"
          width={383}
          height={181}
        />
        <div style={{ marginTop: '5px', paddingLeft: '20px', width: '100%' }}>
          <h2>Inscreva-se</h2>
          <div
            className="Cadastro"
            style={{
              width: '400px',
              height: '170px',
              marginTop: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <Formulario
              Text="E-mail"
              type="email"
              placeholder="Insira seu E-mail"
              ref={inputEmail}
            />
            <Formulario
              Text="Senha"
              type="password"
              placeholder="Insira sua senha"
              ref={inputSenha}
            />
            <Formulario
              Text=""
              type="password"
              placeholder="Insira sua senha novamente"
              ref={inputConfirm}
            />
          </div>

          <div
            style={{
              position: 'fixed',
              bottom: '10px',
              width: '400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 3,
              padding: '0 10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: '12px',
                textAlign: 'left',
                lineHeight: '1.4',
              }}
            >
              <input
                type="checkbox"
                style={{ marginRight: '6px', marginTop: '2px' }}
              />
              <span>
                Eu concordo com os{' '}
                <Link
                  href="/termos"
                  style={{ color: '#ef4444', textDecoration: 'underline' }}
                >
                  Termos de Serviço
                </Link>{' '}
                e{' '}
                <Link
                  href="/privacidade"
                  style={{ color: '#ef4444', textDecoration: 'underline' }}
                >
                  Política de Privacidade
                </Link>
              </span>
            </div>

            
            <BotaoEntrar Text="Criar Conta" onClick={createUser}/>
            <h5 style={{ fontSize: '12px', marginTop: '8px' }}>
              Já possui uma conta?{' '}
              <Link
                href="/"
                style={{ color: '#ef4444', textDecoration: 'underline' }}
              >
                Acesse sua conta
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
