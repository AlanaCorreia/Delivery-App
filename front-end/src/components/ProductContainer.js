import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import setTotalSum from '../store/actions';

function ProductContainer({ product }) {
  const { id, name, price, urlImage } = product;

  const dispatch = useDispatch();

  const getProductsLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    return products;
  };

  const getQuantity = () => {
    const getLocalStorage = getProductsLocalStorage();
    const productsCurr = getLocalStorage
      .find((item) => item.id === Number(id)).quantity || 0;

    return productsCurr;
  };

  const [quantity, setQuantity] = useState(() => getQuantity());
  // console.log(quantity);
  // const [productId, setProductId] = useState();

  const totalCar = useCallback((productsLocalStorage) => {
    if (productsLocalStorage.length !== 0) {
      const reduce = productsLocalStorage.reduce((acc, item) => {
        const totalValueProduct = item.quantity * Number(item.price);

        return acc + totalValueProduct;
      }, 0);

      dispatch(setTotalSum(reduce));

      return reduce;
    }
  }, [dispatch]);

  const updateLocalStorage = useCallback((sum, idProduct, products) => {
    if (sum < 0) setQuantity(0);

    // const products = getProductsLocalStorage();
    console.log(products[10]);

    // console.log('quantity');
    console.log(sum);

    const newProducts = products.map((item) => {
      if (item.id === idProduct) {
        return {
          ...item,
          quantity: sum,
        };
      }

      return item;
    });

    console.log(newProducts);
    totalCar(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  }, [totalCar]);

  const changeQuantity = useCallback((action, idCurr, value = 0) => {
    const idNumber = Number(idCurr);
    // setProductId(idNumber);
    const products = getProductsLocalStorage();

    const updateQtt = () => {
      const productLocalStorage = products.find((item) => item.id === idNumber);
      const { quantity: productQuantity } = productLocalStorage;
      const productQt = Number(productQuantity);

      if (action === 'set') return value < 0 ? 0 : Number(value);

      if (action === 'decrease') {
        return productQt > 0 ? (productQt - 1) : 0;
      }

      return productQt + 1;
    };

    const newQtt = updateQtt();

    updateLocalStorage(newQtt, idNumber, products);
    setQuantity(newQtt);
  }, [updateLocalStorage]);

  useEffect(() => {
    const products = getProductsLocalStorage();

    return totalCar(products);
  }, [totalCar]);

  return (
    <div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        width="80"
      />
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { Number(price).toFixed(2).replace('.', ',') }
      </p>
      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>
      <div>
        <button
          id={ id }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ (e) => changeQuantity('decrease', e.target.id) }
        >
          -
        </button>
        <input
          id={ id }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          value={ quantity }
          // onChange={ ({ target: { value } }) => setQuantity(Number(value)) }
          onChange={ ({ target }) => changeQuantity('set', target.id, target.value) }
        />
        <button
          id={ id }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ ({ target }) => changeQuantity('increase', target.id) }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductContainer.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductContainer;
