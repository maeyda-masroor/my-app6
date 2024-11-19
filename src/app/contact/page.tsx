export default function Contact(){
    return <div className="m-10">
        <h1 className="text-6xl text-white">
        contact
        </h1>
        <div className="h-auto bg-gray-300 rounded-lg p-10">
            <h3 className="text-2xl text-white font-medium">
            I'm always open to discussing produuct
            <span className="text-3xl font-extrabold text-white">design work or partnerships.</span>
            </h3>
            <form className="text-black">
            <label className="font-extrabold text-black">name</label>
            <br/>
            <input 
            type="text" 
            className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500" 
            placeholder="Enter text"
            /> 
            <br/>
            <label className="font-extrabold text-black">name</label>
            <br/>
            <input 
            type="text" 
            className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500" 
            placeholder="Enter text"
            />
            <br/>
            <label className="font-extrabold text-black">name</label>
            <br/>
            <input 
            type="text" 
            className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500" 
            placeholder="Enter text"
            />
            <br/>
            <button className="border-2 border-black w-32 mt-4">Submit</button>
          </form>
        </div>
    </div>
}