import { UserContext } from "./UserContext";
const user = {
  id: 1,
  name: "Jhonatan",
  email: "jhonatan.esp21@gmail.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
