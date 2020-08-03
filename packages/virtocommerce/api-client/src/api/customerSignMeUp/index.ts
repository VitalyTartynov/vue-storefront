import { CustomerSignMeUpDraft } from './../../types/GraphQL';
import { apolloClient, locale, acceptLanguage } from './../../index';
import CustomerSignMeUpMutation from './defaultMutation';
import { SignInResponse } from './../../types/Api';

const customerSignMeUp = async (draft: CustomerSignMeUpDraft): Promise<SignInResponse> => {
  const registerResponse = await apolloClient.mutate({
    mutation: CustomerSignMeUpMutation,
    variables: { draft, locale, acceptLanguage },
    fetchPolicy: 'no-cache'
  }) as SignInResponse;

  return registerResponse;
};

export default customerSignMeUp;
