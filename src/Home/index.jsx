import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.productUrl = 'https://images.unsplash.com/photo-1476170434383-88b137e598bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        this.state = {
            products: [
                { id: 'prod-01', name: 'Omo', price: 1000 },
                { id: 'prod-02', name: 'Downy', price: 2000 },
                { id: 'prod-03', name: 'Tivi 9k', price: 3000 },
                { id: 'prod-04', name: 'Omo', price: 1000 },
                { id: 'prod-05', name: 'Downy', price: 2000 },
                { id: 'prod-06', name: 'Tivi 9k', price: 3000 },
                { id: 'prod-07', name: 'Omo', price: 1000 },
                { id: 'prod-08', name: 'Downy', price: 2000 },
                { id: 'prod-09', name: 'Tivi 9k', price: 3000 },
                { id: 'prod-10', name: 'Omo', price: 1000 },
                { id: 'prod-12', name: 'Downy', price: 2000 },
                { id: 'prod-13', name: 'Tivi 9k', price: 3000 },
                { id: 'prod-14', name: 'Omo', price: 1000 },
                { id: 'prod-15', name: 'Downy', price: 2000 },
                { id: 'prod-17', name: 'Tivi 9k', price: 3000 },
                { id: 'prod-18', name: 'Omo', price: 1000 },
                { id: 'prod-19', name: 'Downy', price: 2000 },
                { id: 'prod-20', name: 'Tivi 9k', price: 3000 },
            ]
        }
    }

    render() {
        return (
            <div className="wrapper home-page">
                <Link to="/">Back to login</Link>
                <h1>Products</h1>
                <ul className="product-list">
                    {
                        this.state.products.map(product =>
                            <li key={product.id} className="product-item">
                                <img src={this.productUrl} alt={product.name} className="photo" />
                                <div className="info">
                                    <span className="product-name">{product.name}</span>
                                    <span className="product-price">{product.price}</span>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Home