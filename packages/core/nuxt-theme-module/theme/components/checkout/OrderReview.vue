<template>
  <div>
    <div class="highlighted">
      <SfHeading
        title="Order review"
        class="sf-heading--left sf-heading--no-underline title"
      />
      <div class="highlighted__header">
        <h3 class="highlighted__title">{{ $t('Personal details') }}</h3>
        <SfButton data-cy="order-review-btn_personal-edit" class="sf-button--text" @click="$emit('click:edit', 0)">{{ $t('Edit') }}</SfButton>
      </div>
      <p class="content">{{ personalDetails.firstName }} {{ personalDetails.lastName }}<br /></p>
      <p class="content">{{ personalDetails.email }}</p>
    </div>
    <div class="highlighted">
      <div class="highlighted__header">
        <h3 class="highlighted__title">{{ $t('Shipping details') }}</h3>
        <SfButton data-cy="order-review-btn_shipping-edit" class="sf-button--text" @click="$emit('click:edit', 1)">{{ $t('Edit') }}</SfButton>
      </div>
      <p class="content">
        <span class="content__label">{{ checkoutGetters.getShippingMethodName(chosenShippingMethod) }}</span><br />
        {{ shippingDetails.streetName }} {{ shippingDetails.apartment }}, {{ shippingDetails.zipCode }}<br />
        {{ shippingDetails.city }}, {{ shippingDetails.country }}
      </p>
      <p class="content">{{ shippingDetails.phoneNumber }}</p>
    </div>
    <div class="highlighted">
      <div class="highlighted__header">
        <h3 class="highlighted__title">{{ $t('Billing address') }}</h3>
        <SfButton data-cy="order-review-btn_billing-edit" class="sf-button--text" @click="$emit('click:edit', 2)">{{ $t('Edit') }}</SfButton>
      </div>
      <p v-if="billingSameAsShipping" class="content">{{ $t('Same as shipping address') }}</p>
      <template v-else>
        <p class="content">
          <span class="content__label">{{ chosenPaymentMethod }}</span><br />
          {{ billingDetails.streetName }} {{ billingDetails.apartment }}, {{ billingDetails.zipCode }}<br />
          {{ billingDetails.city }}, {{ billingDetails.country }}
        </p>
        <p class="content">{{ billingDetails.phoneNumber }}</p>
      </template>
    </div>
    <div class="highlighted">
      <div class="highlighted__header">
        <h3 class="highlighted__title">{{ $t('Payment method') }}</h3>
        <SfButton data-cy="order-review-btn_payment-edit" class="sf-button--text" @click="$emit('click:edit', 2)">{{ $t('Edit') }}</SfButton>
      </div>
      <p class="content">{{ paymentMethod.label }}</p>
    </div>
  </div>
</template>
<script>
import { SfHeading, SfButton } from '@storefront-ui/vue';
import { useCheckout, checkoutGetters } from '<%= options.generate.replace.composables %>';

export default {
  name: 'OrderReview',
  components: {
    SfHeading,
    SfButton
  },

  setup() {
    const { personalDetails, shippingDetails, chosenShippingMethod, chosenPaymentMethod } = useCheckout();

    return {
      personalDetails,
      shippingDetails,
      chosenShippingMethod,
      chosenPaymentMethod,
      checkoutGetters
    };
  }
};
</script>

<style lang="scss" scoped>
.highlighted {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--c-light);
  padding: var(--spacer-2xl);
  margin-bottom: var(--spacer-xl);
  &:last-child {
    margin-bottom: 0;
  }
  &--total {
    margin-bottom: 1px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacer-xl);
  }
  &__title {
    font-family: var(--font-family--primary);
    font-size: var(--font-size--lg);
    line-height: 1.6;
  }
}
.title {
  margin: var(--spacer-xl) 0 var(--spacer-base) 0;
  @include for-desktop {
    margin: var(--spacer-2xl) 0 var(--spacer-base) 0;
  }
}
.content {
  margin: 0 0 var(--spacer-xl) 0;
  color: var(--c-text);
  font-size: var(--font-size--sm);
  font-weight: var(--font-weight--light);
  line-height: 1.6;
  &:last-child {
    margin: 0;
  }
  &__label {
    font-weight: var(--font-weight--normal);
  }
}
</style>
