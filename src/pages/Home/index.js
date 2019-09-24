import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/3a19729256034c32b7a8aa3a010556ba_9366/Tenis_NMD_R1_Primeknit_Preto_EE5075_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/3a19729256034c32b7a8aa3a010556ba_9366/Tenis_NMD_R1_Primeknit_Preto_EE5075_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/3a19729256034c32b7a8aa3a010556ba_9366/Tenis_NMD_R1_Primeknit_Preto_EE5075_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/3a19729256034c32b7a8aa3a010556ba_9366/Tenis_NMD_R1_Primeknit_Preto_EE5075_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/3a19729256034c32b7a8aa3a010556ba_9366/Tenis_NMD_R1_Primeknit_Preto_EE5075_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/3a19729256034c32b7a8aa3a010556ba_9366/Tenis_NMD_R1_Primeknit_Preto_EE5075_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tenis</strong>
        <span>R$ 129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
