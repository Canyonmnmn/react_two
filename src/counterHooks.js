import { useContext, useState } from "react"
import { ThemeContext } from "./App"

/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-10-13 21:09:34
 * @LastEditors: jianguo
 * @LastEditTime: 2022-10-14 10:31:06
 */
export default function CounterHooks(props) {
    const [num, setnum] = useState(props.num)
    const style = useContext(ThemeContext)

    return (
        <>
            <button style={style} onClick={()=>setnum(prenum => prenum - 1)}>-</button>
            <span>{num}</span>
            <button style={style} onClick={()=>setnum(prenum => prenum + 1)}>+</button>
        </>
    )
}
