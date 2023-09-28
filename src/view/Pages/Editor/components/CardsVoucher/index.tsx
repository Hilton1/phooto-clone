import { CardVoucher } from './CardVoucher';

export function CardsVoucher() {
  return (
    <>
      <div className="border-b border-b-black pt-4">
        <p
          className=" w-fit pb-3 text-[#707070] ml-16 leading-5 text-2xl font-semibold border-b-4 border-b-[#F89C1B]"
        >
          Selecione um vale
        </p>
      </div>

      <CardVoucher />
      <CardVoucher />
      <CardVoucher />
      <CardVoucher />
    </>

  );
}
