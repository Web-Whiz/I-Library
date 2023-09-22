'use client'
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const { user, loading } = useAuth();
    const { data: role=[], refetch } = useQuery({
      queryKey: ["role", user?.email],
      enabled: !loading,
      queryFn: async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BaseURL}/user-role?email=${user?.email}`
        );
        return res.json();
      },
    });
    return [role]
        
};

export default useRole;