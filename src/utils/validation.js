export const checkValidateData = (Email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    Email
  );
  // password should be ex: Abdf@213
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  console.log(name);
  // name should be ex: Abc123
  const isNamealid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  if (!isNamealid) return "Name is not valid";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
