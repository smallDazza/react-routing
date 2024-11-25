import { Outlet } from "react-router-dom";


export default function PojectLayout(props){
    return(
        <div>
            <h1>Author</h1>
            <h3>Dazza</h3>
            <Outlet />

            <h6>Copyright {new Date(Date.now()).getFullYear() }</h6>
        </div>
    )
}