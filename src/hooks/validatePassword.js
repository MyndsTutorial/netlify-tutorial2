// A senha precisa ter 8 caracteres um numero e um caracter especial

export const validatePassword = (password) => {
  // ^: Afirma o início da string.
  // (?=.*[0-9]): Afirmação de lookahead positiva para pelo menos um dígito (0-9).
  // (?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]): Afirmação de lookahead positiva para pelo menos um caractere especial.
  // .{8,}: Corresponde a qualquer caractere (exceto terminadores de linha) pelo menos 8 vezes.
  // $: Afirma o final da string.
  const regexSenha = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

  const senhaValida = regexSenha.test(password);
  return senhaValida;
};
