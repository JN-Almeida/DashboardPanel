import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

type SignInCredentials = {
  email: string;
  password: string
}

type User = {
  email: string;
  name: string;
  id: number
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut: () => void;
  user: User | undefined;
  isAuthenticated: boolean
};

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user;
  const navigate = useNavigate();

  useEffect(() => {
    const logUser = localStorage.getItem("User")

    if(logUser) setUser(JSON.parse(logUser))
  }, [])
  async function signIn({ email, password}: SignInCredentials) {
    const response = await api.get('users')

    const hasUser = response.data.filter((user: User) =>  user.email === email)
    console.log(hasUser[0])
    if(hasUser?.length) {
      if(email === hasUser[0].email && password === hasUser[0].password){
        const { name, id } = hasUser[0]
        setUser({ email, name, id})
        localStorage.setItem("User", JSON.stringify({ email, name, id}));

        navigate("/")

      } else {
        return alert("Senha incorreta!")
      }
    } else {
      return alert("Usuario não cadastrado!")
    }

  }

  function signOut() {
    localStorage.removeItem("User");
    setUser(undefined)
    navigate("/login")
  }


  return(
    <AuthContext.Provider value={{ signIn, isAuthenticated, user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}