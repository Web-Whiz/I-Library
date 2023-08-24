
import { useQuery } from "@tanstack/react-query";

const useWishList = () => {
    const email = 'john@gmail.com'
    
    const {data: wishListBooks = [], refetch} = useQuery({
        queryKey: ['wishList', email],
        // enabled: !loading,
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/wish-list?email=${email}`)
            return res.json();
        }
    })

    return [wishListBooks, refetch]

};

export default useWishList;