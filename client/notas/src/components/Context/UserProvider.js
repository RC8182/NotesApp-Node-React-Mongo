                            /* Create context!!! */

   // 1. Importamos desde React createContext y useState.                         
import { createContext, useState } from "react";

   // 2. Creamos, almacenamos y exportamos el contexto para luego consumirlo con el hook useContext(UserContext)                           
export const UserContext= createContext();

   // 3. Creamos el initialState que luego utilizaremos con useState() para setear los estados del User                         
const initialUser={ id: 1,
                    name: 'Javier',
                    lastname: 'Visconti'};

   // 4. Creamos y exportamos el componente UserProvider el cual por medio de su props {children} servira para pasar info a todos los componentes que se encuentren envueltos por él.                 
export const UserProvider = ({children}) => {
    // Creamos los Estados y Funciones que compartiremos en el contexto
    const {user, setUser}=useState(initialUser);
    const login=()=>{
        setUser(initialUser);
    }
    const logout=()=>{
        setUser(null);
    }
    
    const data={user, login, logout};

  return (
    // Le pasamos al contexto los datos a comportir con los componentes hijos.
    <UserContext.Provider value={data}>
    {children}
    </UserContext.Provider>
  )
}

