import {Outlet} from 'react-router-dom'

const WebsiteLayout = () => {
  return (
      <div>
          <header>
              <nav>
                <ul>
                    <li>menu</li>
                    <li>menu</li>
                    <li>menu</li>
                    <li>menu</li>
                    <li>menu</li>
                </ul>
              </nav>
              <div className="banner">
                  <h1>banner</h1>
              </div>
          </header>
          <main>
              <Outlet/>
          </main>
          <footer>
              <h2>footer</h2>
          </footer>
    </div>
  )
}

export default WebsiteLayout