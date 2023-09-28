import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { CardsContinue } from './components/CardsContinue';
import { CardsVoucher } from './components/CardsVoucher';
import { Header } from './components/Header';

import pagamento from '../../../assets/pagamento.webp';
import seguro from '../../../assets/pci_seguro.png';
import reclameAqui from '../../../assets/premio.jpg';

export function Editor() {
  return (
    <>
      <Header />

      <main>
        <CardsContinue />

        <CardsVoucher />

        <div className="flex flex-col items-center justify-center my-6 ">
          <h1 className="font-bold text-2xl text-gray-900">Que tal fazer agora sem o vale?</h1>
          <span className="text-[12px] text-gray-700">Inicie um projeto mesmo sem ter um vale comprado</span>
          <button
            type="button"
            className="bg-[#f89c1b] text-white font-bold text-[11px] p-1 w-[500px] h-8 text-base mt-2"
          >
            COMEÇAR
          </button>
        </div>
      </main>

      <footer>
        <div className="px-40 py-8 flex justify-between bg-[#f0f0f0] ">
          <div className="flex items-center gap-2">
            <b className="text-[14px] text-gray-800">SIGA A PHOOTO</b>
            <Link target="_blank" to="https://www.facebook.com/Phootobrasil/"><FacebookIcon /></Link>
            <Link target="_blank" to="https://www.instagram.com/phootobrasil/"><InstagramIcon /></Link>
            <Link target="_blank" to="https://www.youtube.com/channel/UCeuotIB9N4ppvXFjpPNQaOw"><YouTubeIcon /></Link>
          </div>
          <div className="flex gap-8">
            <div className="max-w-[280px]">
              <b className="text-gray-900">Sobre a Phooto</b>
              <p className="text-sm text-gray-900">
                A Phooto existe para te ajudar a guardar seus melhores
                momentos em fotolivros, revelações e muito mais!
                {' '}
                {' '}
                <Link to="/" className="text-sm text-gray-500">
                  Conheça mais
                  {' >>'}
                </Link>
              </p>
              <Link to="/" className="block text-sm text-gray-500 my-4">APRENDA A FAZER</Link>
              <Link to="/" className="text-sm text-gray-500">TRABALHE CONOSCO</Link>
            </div>

            <div className="max-w-[280px]">
              <b className="text-gray-900">Categorias</b>
              <Link to="/" className="block text-sm text-gray-500 mt-2">FOTOLIVROS</Link>
              <Link to="/" className="block text-sm text-gray-500 mt-2">FOTOS</Link>
              <Link to="/" className="block text-sm text-gray-500 mt-2">FOTO QUADROS</Link>
              <Link to="/" className="block text-sm text-gray-500 mt-2">FOTO PRESENTES</Link>
              <Link to="/" className="block text-sm text-gray-500 mt-2">CALENDÁRIOS</Link>
              <Link to="/" className="block text-sm text-gray-500 mt-2">PROMOÇÕES</Link>
            </div>
          </div>
        </div>

        <div className="mx-40 py-8 flex justify-between">
          <div className="flex flex-col">
            <b className="text-sm text-gray-600">LINKS ÚTEIS</b>
            <Link to="/" className="text-sm text-gray-500 mt-2">Central de Atendimento</Link>
            <Link to="/" className="text-sm text-gray-500 mt-2">Minha Conta</Link>
            <Link to="/" className="text-sm text-gray-500 mt-2">Frete e Prazos de entrega</Link>
            <Link to="/" className="text-sm text-gray-500 mt-2">Termos e Condições</Link>
            <Link to="/" className="text-sm text-gray-500 mt-2">Política de privacidade</Link>
            <Link to="/" className="text-sm text-gray-500 mt-2">Regras Promocionais</Link>
          </div>

          <div className="flex flex-col">
            <b className="text-sm text-gray-600 mb-2">FORMAS DE PAGAMENTO</b>
            <img src={pagamento} alt="Formas de pagamento" className="w-72" />
          </div>

          <div className="flex flex-col">
            <b className="text-sm text-gray-600  mb-2">PRÊMIOS E SEGURANÇA</b>

            <div className="flex flex-row h-[74px] w-20">
              <img src={reclameAqui} alt="Prêmio ReclameAqui" />
              <img src={seguro} alt="Prêmio ReclameAqui" />
            </div>
          </div>
        </div>

        <div className="mx-40 my-8 flex justify-center items-center border-t border-t-gray-400">
          <p className="my-4 text-xs text-gray-600">
            Rua Major Paladino, 128 - São Paulo/SP |
            Copyright 2022 © Phooto Brasil LTDA. - 17.836.901/0001-10
          </p>
        </div>
      </footer>
    </>
  );
}
