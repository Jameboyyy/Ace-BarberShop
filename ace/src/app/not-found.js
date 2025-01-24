export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>We couldn’t find the page you were looking for. Please check the URL or head back to the homepage.</p>
            <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>Go back to Home</a>
        </div>
    );
}
