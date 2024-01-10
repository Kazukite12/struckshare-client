
import Recomend from "../../components/recomendCard/recomend"
import SearchBar from "../../components/searchBar/search-bar"
import Trendings from "../../components/trendings/trendings"
import "./panel.css"

const Panel =()=> {
    return (
        <section id="panel">
            <div className="panel-container">
                <SearchBar />
                <Trendings/>
                <Recomend />
            </div>     
        </section>
    )
}

export default Panel