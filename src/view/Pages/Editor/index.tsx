import { CardsContinue } from './components/CardsContinue';
import { CardsVoucher } from './components/CardsVoucher';
import { Header } from './components/Header';

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

    </>
  );
}
