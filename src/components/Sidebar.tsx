import Image from "next/image";
import Logo from '../public/logo.png';
export default function Sidebar(){
    return <div className="place-items-center mt-4">
        <Image src={Logo} width={250} height={300} alt="c" className="border-2 border-white rounded-lg"/>
        <div className="text-2xl text-white font-serif font-bold">
            Maaeydah Masroor
        </div>
        <div className="bg-white text-black border-2  p-2">
            <h1>Web Developer</h1>
        </div>
        <div className="flex bg-red-400 gap-5 mt-4 p-4">
            <div className="bg-yellow-300">
                cvv
            </div>
            <div className="bg-yellow-300">
                cvv
            </div>
            <div className="bg-yellow-300">
                cvv
            </div>
            <div className="bg-yellow-300">
                cvv
            </div>
        </div>
        <div className="bg-white mt-5">
            <div className="flex gap-3">
                <div className="bg-green-400">cc</div>
                <div className="bg-orange-300"><h3>PHONE</h3><p>12222333333333</p></div>
            </div>
            <div className="flex gap-3">
                <div className="bg-green-400">cc</div>
                <div className="bg-orange-300"><h3>PHONE</h3><p>12222333333333</p></div>
            </div>
            <div className="flex gap-3">
                <div className="bg-green-400">cc</div>
                <div className="bg-orange-300"><h3>PHONE</h3><p>12222333333333</p></div>
            </div>
            <div className="flex gap-3">
                <div className="bg-green-400">cc</div>
                <div className="bg-orange-300"><h3>PHONE</h3><p>12222333333333</p></div>
            </div>
        </div>
        <div className="bg-blue-600 mt-4">
            <button className="bg-red-500">Download</button>
        </div>
    </div>
}