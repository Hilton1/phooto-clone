import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { useState } from 'react';
import fotos from '../../../../../assets/fotos.png';

import { Button } from '../../../../components/Button';

export function CardVoucher() {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <div className={`flex flex-col bg-[#F4F4F4] mx-80 border-2 mb-2 mt-2 transition-all ${expanded ? 'h-full' : 'h-46'}`}>
      <button
        type="button"
        onClick={toggleExpanded}
      >
        <div
          className="flex flex-col py-6 justify-between cursor-pointer"
        >
          <div className="flex justify-between">
            <div className="flex">
              <div className="ml-12 flex justify-center items-center w-56 bg-white">
                <img src={fotos} alt="Fotos" />
              </div>
              <div className="flex ml-10 my-8">
                <div className="border-l border-l-black" />

                <div className="ml-5">
                  <p className="font-semibold text-xl text-gray-900">Vale Ímã Fotográfico - 08 Unids</p>
                  <div className="flex gap-6">
                    <p className="text-gray-900 text-[12px]">Quantidade: 7</p>
                    <b className="text-gray-900 text-[12px] underline">Frete à Contratar</b>
                  </div>
                  <p className="text-gray-900 text-left text-[12px]">Válido até: 03/11/2022</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center p-2">
              {!expanded && (
              <ExpandMoreIcon />
              )}
              {expanded && (
              <ExpandLessIcon />
              )}
            </div>
          </div>
        </div>
      </button>

      <div className={`mx-12 my-3 border-dashed border border-gray-500 grid grid-cols-4 ${expanded ? 'visible' : 'hidden'}`}>
        <div className="bg-[#ffcc83] flex text-center justify-center p-8">
          <b className="text-[11px] text-gray-900">Em andamento</b>
        </div>

        <div className="flex text-center justify-center p-8">
          <b className="text-[11px] text-gray-900">NGPDXDBJ5CT</b>
        </div>

        <div className="flex flex-col text-center justify-center">
          <p className="text-[11px] text-gray-900">
            Vencimento:
            {' '}
            <b>03/11/2022</b>
          </p>
          <p className="text-[11px] text-gray-900">
            Vencimento:
            {' '}
            <b className="text-[#f89c1b]">03/11/2022</b>
          </p>
        </div>

        <div className="flex flex-col text-center justify-center">
          <Button>
            CONTINUAR
          </Button>
        </div>

      </div>

    </div>

  );
}
