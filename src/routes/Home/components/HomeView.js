import React, { Component } from 'react'
import './HomeView.scss'
import Myasync from './Myasync';

/*
export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <Myasync />
  </div>
)
//*/

export default class HomeView extends Component {
    render() {
        return (
            <div>
                <h4>Welcome!</h4>
                <Myasync />
            </div>
        );
    }
}
