import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <th />
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th />
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/3a19729256034c32b7a8aa3a010556ba_9366/Tenis_NMD_R1_Primeknit_Preto_EE5075_01_standard.jpg"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tenis</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 12,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,2</strong>
        </Total>
      </footer>
    </Container>
  );
}
