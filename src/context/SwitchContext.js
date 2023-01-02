import { createContext, useState} from "react";

localStorage.setItem('false', false)
localStorage.setItem('true', true)

const SwitchContext = createContext()
const initialState = JSON.parse(localStorage.getItem('bg'))
 export const SwitchProvider = ({children}) => {
    const theme = {
        about: '#525252',
        contact : '#3d3d3d',
        project : '#464646',
        service : '#7c7c7c',
        card : 'secondary'
    }
    const [active, setActive] = useState(initialState)
      
 

    const handleOnClick = () => {
        setActive(!active)
       
    }
    
    if(active) {
        const trueLC = JSON.parse(localStorage.getItem('true'))
        localStorage.setItem('bg', JSON.stringify(trueLC)) 
    } else {
        const falseLC = JSON.parse(localStorage.getItem('false'))
        localStorage.setItem('bg', JSON.stringify(falseLC))  
    }
    
    const data = {active, handleOnClick, theme}
    return <SwitchContext.Provider value={data}>{children}</SwitchContext.Provider>
}
export default SwitchContext

