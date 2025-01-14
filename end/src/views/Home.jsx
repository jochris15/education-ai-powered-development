import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    function handleProject() {
        navigate('/projects');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg mb-8">Showcasing my projects and skills.</p>
            <a href="#projects" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleProject}>
                View Projects
            </a>
        </div >
    );
}

export default Home;