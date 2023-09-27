import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import React from 'react';

import phooto from '../../../../../assets/phooto.png';

export function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="border-b">
      <div className="flex justify-between items-center h-6 bg-[#F89C1B] px-16">
        <span className="text-xs">Pentacampeões Prêmio Reclame Aqui!</span>
        <span className="text-xs">
          Novidade! Conheça agora o
          {' '}
          {' '}
          <Link to="/" className="underline underline-offset-1 text-[#0000FF]">
            TOKPOP
            {' '}
            {'>'}
          </Link>
          {' '}
          {' '}
          em até 3x sem juros!
        </span>
      </div>

      <div className="pl-6 pr-8 min-h-[4.25rem] flex items-center justify-between">
        <img width={100} src={phooto} alt="Phooto Logo" />

        <div className="flex justify-between items-center gap-2">
          <p className="text-base">
            <AccountCircleOutlinedIcon fontSize="small" />
            {'   '}
            vitor.firmino@phooto.com.br
          </p>

          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="inherit"
          >
            Mais opções
            <ExpandMoreIcon />
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Meus Pedidos</MenuItem>
            <MenuItem onClick={handleClose}>Meus Créditos</MenuItem>
            <MenuItem onClick={handleClose}>Meus Dados</MenuItem>
            <MenuItem onClick={handleClose}>Meus Projetos</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="pl-16 py-2 bg-[#f89c1b40] text-[#707070]">
        <span className="text-base font-semibold">
          Editor
          {' '}
          {' > '}
          {' '}
          Vales e Projetos
        </span>
      </div>
    </header>
  );
}
