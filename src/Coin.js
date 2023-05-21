import React from 'react'
import './CSS/Coin.css';

const Coin = ({ coins }) => {
    return (
        // key not working
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={coins.image} alt="crypto" />
                    <h1>{coins.name}</h1>
                    <p className='coin-symbol'>{coins.symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>{coins.current_price} pkr</p>
                    <p className='coin-volume'>{coins.total_volume.toLocaleString()}</p>
                    {
                        coins.price_change_percentage_24h < 0 ? (
                            <p className='coin-percent red'>{coins.price_change_percentage_24h.toFixed(2)}%</p>
                        ) : (
                            <p className='coin-percent green'>{coins.price_change_percentage_24h.toFixed(2)}%</p>
                        )
                    }
                    <p className='coin-marketcap'>{coins.market_cap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin