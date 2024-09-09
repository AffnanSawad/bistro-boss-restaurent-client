import { useEffect, useState } from "react";

const useMenu = () => {

    const [menus,setmenus] = useState([]);
    const [loading,setLoading] = useState(true)
    // fetching from menu.json to show menus

    useEffect( 
        ()=>{

            fetch('menu.json')
            .then( res=> res.json())

            .then( data=>{

                setmenus(data)
                setLoading(true)
            })
        }
        
        ,[])

  return [menus,loading]

}

export default useMenu;