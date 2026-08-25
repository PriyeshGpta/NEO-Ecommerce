import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const PrivateLayout = () => {
    return (
        <div className="min-h-screen bg-slate-950">
            <header><Navbar /></header>
            <main><Outlet /></main>
        </div>
    )
}

export default PrivateLayout