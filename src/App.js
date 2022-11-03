/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-10-13 20:39:55
 * @LastEditors: jianguo
 * @LastEditTime: 2022-11-03 16:22:22
 */
import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./counterHooks";

export const ThemeContext = React.createContext()
function App() {
    const [theme, setTheme] = useState('green')
    return (
        <ThemeContext.Provider value={{ background: theme }}>
            <div>计数器：</div>
            <Counter num={2} />
            <div>hooks计数器：</div>
            <CounterHooks num={4}></CounterHooks>
            <br></br>
            <button onClick={() => setTheme(pretheme => {
                return pretheme === 'red' ? 'blue' : 'red'
            })}>改变主题色</button>
        </ThemeContext.Provider>
    )
}

export default App;
