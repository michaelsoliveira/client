import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

const useClient = (options?: any) => {
  const { data: session } = useSession();
  const token = session?.accessToken;
  // const handleError = useErrorHandler();

  return useMemo(() => {
    const api = axios.create({
      baseURL: 'http://localhost:3333',
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            ...(options?.headers ? options.headers : {})
        }
        
    });
    
    // api.interceptors.response.use(response => {
    //     return response
    // }, error => {
    //     const { status } = error.response
        
    //     if (status === 401) {
    //         console.log(error.response)
    //         return location.href = '/'
    //     }
        
    //     return Promise.reject(error)
    // })
          
    return api;
  }, [options, token]);
};

export default useClient;