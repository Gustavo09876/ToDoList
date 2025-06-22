'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Formulario from '../Componentes/Ui/Formulario';
import BotaoEntrar from '../Componentes/Ui/BotãoEntrar';
import Link from 'next/link';''
import api from '../Services/api';

export default function Login() {
  const [user, setUser] = useState([]);

  

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
        src="/assets/Images/Background1.jpg"
        alt="Background"
        width={846}
        height={1078}
        style={{
          position: 'fixed',
          top: 0,
          right: '5vw',
          width: '45vw',
          height: '50vw',
          transformOrigin: 'top right',
          backgroundSize: 'cover',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: 10,
          right: '-10vw',
          width: '20vw',
          height: '110vh',
          backgroundColor: '#E76052',
          transform: 'rotate(10deg)',
          transformOrigin: 'top right',
          zIndex: 1,
          border: '10px solid white',
        }}
      ></div>

      <div
        style={{
          flex: 1,
          height: '100%',
          paddingLeft: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-arround',
          alignItems: 'start',
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
          <h2>Login</h2>
          <div
            className="Login"
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
            />
            <Formulario
              Text="Senha"
              type="password"
              placeholder="Insira sua senha"
            />
          </div>



          <div
            style={{
              width: '400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '40px',
            }}
          >
            <BotaoEntrar
              Text={"Acessar Conta"}
              href='Dashboard/Home'
            />

            <h5
              style={{
                fontSize: '12px',
                marginTop: '8px',
                textAlign: 'center',
              }}
            >
              Não tem uma conta?{' '}
              <Link
                href="/Cadastro"
                style={{ color: '#ef4444', textDecoration: 'underline' }}
              >
                Cadastre-se
              </Link>
            </h5>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          lineHeight: 1.1,
          fontSize: '40px',
          fontWeight: '700',
          padding: '2rem',
          zIndex: 2,
          marginRight: '30vw',
        }}
      >
        <span style={{ color: 'black' }}>Trabalhe</span>
        <span style={{ color: 'black' }}>com</span>
        <span style={{ color: 'black' }}>clareza.</span>
        <span style={{ color: '#F15A4A' }}>Viva</span>
        <span style={{ color: '#F15A4A' }}>com</span>
      </div>
    </div>
  );
}
