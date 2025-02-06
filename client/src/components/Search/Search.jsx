import { useEffect, useState } from "react";
import * as clothesService from "../../services/clothesService";
import { Link } from "react-router-dom";

export default function Search() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query.length < 1) {
            setResults([]);
            return;
        }

        const fetchResults = async () => {
            setLoading(true);
            try {
                const data = await clothesService.search(query);
                setResults(data);
                console.log(data);
                
            } catch (error) {
                console.error("Search error:", error);
            }
            setLoading(false);
        };

        const delayDebounceFn = setTimeout(() => {
            fetchResults();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    useEffect(() => {
        const existingScript = document.querySelector('script[src="/js/custom.js"]');
        if (existingScript && existingScript.parentNode) {
            existingScript.parentNode.removeChild(existingScript);
        }

        const script = document.createElement('script');
        script.src = "/js/custom.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [location.pathname]);

    return (
        <>
            <div className="col-sm-5 header_search">
                <div id="search">
                    <div id="searchbox" className="input-group searchtoggle">
                        <input
                            type="text"
                            name="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for products..."
                            className="form-control input-lg"
                        />
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-default btn-lg"> Search </button>
                        </span>
                    </div>

                    {query && query.length > 0 && (
                        <div className="live-search" style={{ display: results.clothes?.length > 0 ? "block" : "none" }}>
                            {loading && <p>Loading...</p>}
                            <ul>
                                {results.clothes && results.clothes.map((product) => (
                                    <li key={product.id}>
                                        <a href={product.id} title={product.name}>
                                            <div className="product-image col-sm-3 col-xs-4">
                                                <img alt={product.name} src={`https://res.cloudinary.com/dfttdd1vq/image/upload/${product.images[0].path}`} />
                                            </div>
                                            <div className="search-description col-sm-9 col-xs-8">
                                                <div className="product-name">
                                                    {product.name}
                                                    <p>{product.description}</p>
                                                </div>
                                                <div className="product-price">
                                                    <span className="price">{product.price.toFixed(2)} лв.</span>
                                                    {product.special && <span className="special">${product.special}</span>}
                                                </div>
                                            </div>
                                            <span style={{ clear: "both" }} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="result-text">
                                <Link to={`/search?query=${query}`} className="view-all-results">
                                    View all results ({results.clothes && results.clothes.length})
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
