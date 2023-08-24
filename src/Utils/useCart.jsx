'use client'
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const email = 'john@gmail.com'
    
    const {data: carts = [], refetch} = useQuery({
        queryKey: ['carts', email],
        // enabled: !loading,
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/carts?email=${email}`)
            return res.json();
        }
    })

    return [carts, refetch]

};

export default useCart;