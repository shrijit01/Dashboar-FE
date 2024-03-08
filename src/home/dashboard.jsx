

export { Dashboard };

function Dashboard() {
    
    return (
        <div className="dashboard">
            <h1>Welcome to the Dashboard</h1>
            <div className="stats">
                <div className="stat">
                    <h2>Users</h2>
                    <p>100</p>
                </div>
                <div className="stat">
                    <h2>Products</h2>
                    <p>50</p>
                </div>
                <div className="stat">
                    <h2>Sales</h2>
                    <p>200</p>
                </div>
            </div>
            <div className="charts">
                <h2>Charts</h2>
                {/* Add your chart components or integrations here */}
            </div>
        </div>
    );
}