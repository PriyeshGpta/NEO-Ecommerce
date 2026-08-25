import { Outlet } from 'react-router';

const PublicLayout = () => {
    return (
        <main className='min-h-screen bg-slate-950'>
            <Outlet />
        </main>
    )
}

export default PublicLayout