export default function NavBar(){
    return (
        <>
            <div className="m-auto mx-40 mt-4 bg-cyan-100 rounded-md p-2 shadow-md">
                <nav className="flex justify-between">
                    <div>
                        <img src="https://www.ticketsasa.com/templates/ticketsasa/assets/img/logo.png"></img>
                    </div>   

                    <div className="px-2 space-x-6 font-semibold text-md lg:text-lg mt-3 uppercase leading-normal">
                        <a href="#">Home</a>
                        <a href="#">Events</a>
                        <a href="#">Purchased</a>
                        <a href="#">Admin</a>
                        <a href="about">About</a>

                    </div>
                </nav>
            </div>
        </>
    )
}