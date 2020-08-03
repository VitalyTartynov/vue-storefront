import { CustomerSignMeInDraft } from '../../types/GraphQL';
import { apolloClient, locale, acceptLanguage } from '../../index';
import CustomerSignMeInMutation from './defaultMutation';
import { SignInResponse } from './../../types/Api';

const customerSignMeIn = async (draft: CustomerSignMeInDraft): Promise<SignInResponse> => {
  const loginResponse = await apolloClient.mutate({
    mutation: CustomerSignMeInMutation,
    variables: { draft, locale, acceptLanguage },
    fetchPolicy: 'no-cache'
  }) as SignInResponse;

  return loginResponse;
};

export default customerSignMeIn;
