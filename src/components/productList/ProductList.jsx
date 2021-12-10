import Product from "../product/Product"
import "./productList.css"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                    Create & inspire.
                </h1>
                <p className="pl-desc">
                    A creative portfolio that you work has been waiting Beautiful homes, stunning portfolio styles & a whole lot more inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map(item=>(
                    <Product img={item.img} key={item.id} link={item.link} />                
                ))}
            </div>
        </div>
    )
}

export default ProductList
