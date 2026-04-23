import { createContext, useContext, useEffect, useState } from "react";
import AuthAPI, { RecruitApi } from "../../API/authApi";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [company,setCompany]= useState();
  const [islogged ,setLogged]=useState(false);

  const checkAuth = async () => {
    try {
      const res = await AuthAPI.get("/me", { withCredentials: true });
      setUser(res.data.user);
      
      setLogged(true)
    } catch  {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
   const getrecruiter = async () => {
      try {
        const response = await RecruitApi.get(`/get-company/${user.id}`);
  
        setCompany(response.data.company)
      } catch (error) {
        console.log(error.message)
      }
    };

  useEffect(() => {
checkAuth();

  }, []);

useEffect(() => {
    if (user?.role === "recruiter") {
      getrecruiter();
    }
  }, [user]);

  const logout = async () => {
  try {
    await AuthAPI.post("/logout");
    setUser(null); setLogged(false)
  } catch (error) {
    console.error(error);
  }
};

  return (
    <AuthContext.Provider value={{ user, loading,islogged,company ,logout, checkAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export  const useAuth = () => useContext(AuthContext);
