/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2022-10-13 20:46:22
 * @LastEditors: jianguo
 * @LastEditTime: 2022-10-14 10:27:08
 */
import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: props.num
        }
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    style => (
                        <>
                            <button style={style} onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
                            <span>{this.state.counter}</span>
                            <button style={style} onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
                        </>
                    )
                }

            </ThemeContext.Consumer>
        )
    }
}