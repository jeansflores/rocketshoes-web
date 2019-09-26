import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  div.scroll {
    overflow: auto;
    flex-grow: 1;
    min-height: 0;
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 520px) {
      flex-direction: column-reverse;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.3s;

      @media (max-width: 520px) {
        margin-top: 20px;
        width: 100%;
        padding: 20px;
      }

      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;

    &:nth-child(3) {
      text-align: center;
    }
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
    color: #333;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 30px;

  strong {
    margin-top: 20px;
    font-size: 20px;
    text-align: center;
  }

  a {
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    color: #7159c1;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${lighten(0.2, '#7159c1')};
    }
  }
`;
