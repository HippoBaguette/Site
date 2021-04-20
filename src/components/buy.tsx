import React, { Component, MouseEventHandler } from 'react';

type Props = {
    onBuy: MouseEventHandler,
}

const Buy = ({ onBuy }: Props) => {
    return (
        <a href="https://github.com/HippoBaguette/Site">
            <button
                onClick={onBuy}
                className="btn btn-primary btn-sm m-2">Continue to checkout</button>
        </a>
    )
}


export default Buy;