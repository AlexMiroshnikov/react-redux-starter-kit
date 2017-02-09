import React, { Component } from 'react'

import {asyncConnect} from "redux-connect";

@asyncConnect([{
    key: 'lunch',
    promise: ({ params, helpers }) => Promise.resolve({ id: 1, name: 'Borsch' })
}])

export default class Myasync extends Component {
    render() {
        console.log('>Myasync.render');
        console.log(this.props);
        return (
            <div>myasinc</div>
        );
    }
}