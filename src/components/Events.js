export default function Events(){
    return (
        <>
            <div className="mx-40 m-auto">
                {/* Search bar component    */}
                <div className="text-center mt-4">
                    <form>
                        <input type="text" placeholder="Search for Event" className="px-2 w-1/2 h-10 outline-cyan-200" />
                        <button className="bg-red-500 text-white px-4 py-1 rounded-full ml-2">Submit</button>
                    </form>
                </div>

                <hr className="mt-2 " />

                {/* Tickets Display component -- Use grid formatting*/}

                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 mt-4 items-center gap-4">

                    <div className="bg-cyan-100 p-2 rounded-md shadow-md overflow-hidden">
                        <img src="https://www.ticketsasa.com/components/com_enmasse/upload/Gordons_Save_the_Date_IG_Post_1080x1080_a-01.png1706010580.jpg"></img>
                        <div className="text-center">
                            <span className="block">Date : 2024-03-14</span>
                            <span className="block font-bold">Gordons FunFair uncoupled</span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}