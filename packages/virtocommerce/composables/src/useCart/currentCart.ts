import { getMe, createCart } from '@vue-storefront/virtocommerce-api';

const loadCurrentCart = async () => {
  const profileResponse = await getMe();

  if (profileResponse.data.me.activeCart) {
    return profileResponse.data.me.activeCart;
  }

  const cartResponse = await createCart();

  return cartResponse.data.cart;
};

export default loadCurrentCart;
