export interface ClientGrant {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export const isClientGrant = (response: any): response is ClientGrant => {
  return ["access_token", "expires_in", "token_type"].every(
    (key) => key in response
  );
};

export interface AuthFailure {
  error: string;
  error_description: string;
}

export const isAuthFailure = (response: any): response is AuthFailure => {
  return ["error", "error_description"].every((key) => key in response);
};
