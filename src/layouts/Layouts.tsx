import { Link, Outlet } from "react-router-dom"

const Layouts = () => {
    return (
        <div>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/facts'}>Facts</Link>

            <Outlet />
        </div>
    )
}

export default Layouts