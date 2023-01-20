import { createContext, useState} from "react";

localStorage.setItem('false', false)
localStorage.setItem('true', true)

const SwitchContext = createContext()
const initialState = JSON.parse(localStorage.getItem('bg'))

 export const SwitchProvider = ({children}) => {
    const theme = {
        about: '#e0e0e0',
        contact : '#e0e0e0',
        project : '#757575',
        service : '#757575',
        card : 'secondary'
    }
    const [active, setActive] = useState(initialState)
      
 

    const handleOnClick = () => {
        setActive(!active)
       
    }
    
   
        localStorage.setItem('bg', JSON.stringify(active))  
   
    
    const data = {active, handleOnClick, theme}
    return <SwitchContext.Provider value={data}>{children}</SwitchContext.Provider>
}
export default SwitchContext

