import ursinho from '../../../../../assets/urso.png';

export function CardContinue() {
  return (
    <div className="border cursor-pointer w-[280px] pb-6">
      <img className="max-h-52 w-full items-center justify-center" src={ursinho} alt="Ursinho" />

      <div className="p-2">
        <b className="text-sm">Imã fotográfico</b>
        <p className="text-sm">
          <b>Última edição:</b>
          {' '}
          há 2 horas
        </p>
        <p className="text-sm">
          <b>Projeto disponível até:</b>
          {' '}
          27/10/2023
        </p>
      </div>
    </div>
  );
}
