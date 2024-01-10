import Main from "../../layout/main/Main"
import Panel from "../../layout/panel/panel"
import SideBar from "../../layout/sidebar/sidebar"

import "./home.css"


const Home =()=> {
    return (
        <>
        
        <section id="home">
            <SideBar />
            <Main/>
            <Panel/>
        </section>
        </>
    )
}

export default Home