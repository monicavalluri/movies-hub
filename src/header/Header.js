import './Header.css'
export default function Header() {
    return(
        <header className='App-header' onClick={() => window.location.reload()}>Movies</header>
    )
}