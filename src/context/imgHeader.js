import { createContext, useState } from "react";

export const ImageContext= createContext({})

export default function ImageProvider({children}){
    const [image,setImage]=useState("image funcionando")
    return(
        <ImageContext.Provider value={{image,setImage}}>
            {children}
        </ImageContext.Provider>
    )
}