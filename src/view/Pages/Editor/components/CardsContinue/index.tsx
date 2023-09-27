import Button from '@mui/material/Button';
import { CardContinue } from '../CardContinue';

export function CardsContinue() {
  return (
    <>
      <div className="border-b border-b-black pt-4">
        <p
          className=" w-fit pb-3 text-[#707070] ml-16 leading-5 text-2xl font-semibold border-b-4 border-b-[#F89C1B]"
        >
          Continue de onde parou
        </p>
      </div>

      <div>
        <div className="flex justify-center gap-1">
          <CardContinue />
          <CardContinue />
          <CardContinue />
          <CardContinue />
        </div>

        <div className="flex justify-center m-4">
          <Button variant="outlined" color="warning">
            Ver todos
          </Button>
        </div>

      </div>
    </>
  );
}
