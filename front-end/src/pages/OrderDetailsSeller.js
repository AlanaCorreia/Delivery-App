import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TableOrder from '../components/TableOrder';
import { api } from '../services/fechApi';
import setToken, { getUserLocalStorage, serializeDate } from '../services/functions';

function OrderDetailsSeller() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const saleId = pathname.replace('/seller/orders/', '');

  const [dataSale, setDataSales] = useState([]);
  const [status, setStatus] = useState('');

  console.log(dataSale);

  useEffect(() => {
    const { token } = getUserLocalStorage();

    if (!token) return navigate('/');

    setToken(token);

    const getSaleById = async () => {
      const { data } = await api.get(`/sale/${saleId}`);

      setDataSales(data);
      setStatus(data.status);
    };

    getSaleById();
  }, [navigate, saleId, status]);

  const updateStatus = async (newStatus) => {
    await api.put(`/sale/${saleId}`, { status: newStatus });
    setStatus(newStatus);
  };

  return (
    <div>
      <Navbar item2="PEDIDOS" />
      <h1>Detalhes do Pedido</h1>
      <div>
        <p data-testid="seller_order_details__element-order-details-label-order-id">
          {`PEDIDO ${dataSale.length !== 0 ? dataSale.id : ''}`}
        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          {dataSale.length !== 0
            ? serializeDate(dataSale.saleDate) : ''}

        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-delivery-status}"
        >
          {dataSale.length !== 0 ? dataSale.status : ''}
        </p>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          disabled={ status !== 'Pendente' }
          onClick={ () => updateStatus('Preparando') }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          disabled={ status !== 'Preparando' }
          onClick={ () => updateStatus('Em Trânsito') }
        >
          SAIU PARA ENTREGA
        </button>
      </div>
      <div>
        <TableOrder isSale />
      </div>
    </div>
  );
}

export default OrderDetailsSeller;