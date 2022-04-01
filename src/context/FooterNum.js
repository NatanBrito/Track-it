import { createContext,useState } from "react";

export const FooterNumContext=createContext({})

export default function FooterNumProvider({children}){
const [footerNum,setFooterNum]=useState(0)
return(
    <FooterNumContext.Provider value={{footerNum,setFooterNum}}>
        {children}
    </FooterNumContext.Provider>

)
}