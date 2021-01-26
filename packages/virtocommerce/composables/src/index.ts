/* istanbul ignore file */

import useCategory from './composables/useCategory';
import useProduct from './composables/useProduct';
import useCart from './composables/useCart';
import useCheckout from './composables/useCheckout';
import { useReview, reviewGetters } from './composables/useReview';
import useUser  from './composables/useUser';
import useUserOrders from './composables/useUserOrders';
import useContent from './composables/useContent';
import useFacet from './composables/useFacet';
import useWishlist from './composables/useWishlist';
import useUserShipping from './composables/useUserShipping';
import useUserBilling from './composables/useUserBilling';
import { integrationPluginFactory } from '@vue-storefront/core';

import { createApiClient } from '@vue-storefront/virtocommerce-api';
const integrationPlugin = integrationPluginFactory(createApiClient);

import {
  cartGetters,
  categoryGetters,
  checkoutGetters,
  facetGetters,
  productGetters,
  userGetters,
  userShippingGetters,
  userBillingGetters,
  orderGetters,
  wishlistGetters
} from './composables/getters';

export {
  integrationPlugin,
  useCategory,
  useProduct,
  useCart,
  useCheckout,
  useReview,
  useUser,
  useUserOrders,
  useContent,
  useFacet,
  useWishlist,
  useUserShipping,
  useUserBilling,
  cartGetters,
  categoryGetters,
  checkoutGetters,
  productGetters,
  facetGetters,
  reviewGetters,
  userGetters,
  orderGetters,
  wishlistGetters,
  userShippingGetters,
  userBillingGetters
};
