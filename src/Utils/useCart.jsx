'use client'
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
    const {user, loading} =useAuth()
    
    const {data: carts = [], refetch} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async() => {
            const res = await fetch(`https://i-library-server-seven.vercel.app/carts?email=${user?.email}`)
            return res.json();
        }
    })

    return [carts, refetch]

};

export default useCart;