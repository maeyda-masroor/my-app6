import Image from "next/image";
import Logo from '../public/logo.png';
export default function Sidebar(){
    return <div className="place-items-center mt-4">
        <Image src={Logo} width={250} height={300} alt="c" className="border-[10px] border-white rounded-lg"/>
        <div className="text-2xl text-white font-serif font-extrabold mt-4">
            Maaeydah Masroor
        </div>
        <div className="bg-white text-black p-2 mt-4">
            <h1 className="font-bold">Web Developer</h1>
        </div>
        <div className="flex gap-5 mt-4 p-4">
            <div className="bg-white rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
            </svg>
            </div>
            <div className="bg-white rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
             </div>
            <div className="bg-white rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
            <path fill="#2100c4" d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36 C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"></path><path fill="#ddbaff" d="M37,23.5c0-2.897-0.875-4.966-2.355-6.424C35.591,15.394,34.339,12,34.339,12 c-2.5,0.5-4.367,1.5-5.609,2.376C27.262,14.115,25.671,14,24,14c-1.71,0-3.339,0.118-4.834,0.393 c-1.242-0.879-3.115-1.889-5.632-2.393c0,0-1.284,3.492-0.255,5.146C11.843,18.6,11,20.651,11,23.5 c0,6.122,3.879,8.578,9.209,9.274C19.466,33.647,19,34.764,19,36l0,0.305c-0.163,0.045-0.332,0.084-0.514,0.108 c-1.107,0.143-2.271,0-2.833-0.333c-0.562-0.333-1.229-1.083-1.729-1.813c-0.422-0.616-1.263-2.032-3.416-1.979 c-0.376-0.01-0.548,0.343-0.5,0.563c0.043,0.194,0.213,0.5,0.896,0.75c0.685,0.251,1.063,0.854,1.438,1.458 c0.418,0.674,0.417,2.468,2.562,3.416c1.53,0.677,2.988,0.594,4.097,0.327l0.001,3.199c0,0.639-0.585,1.125-1.191,1.013 C19.755,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.584,43.127,29,42.641,29,42.002L29,36 c0-1.236-0.466-2.353-1.209-3.226C33.121,32.078,37,29.622,37,23.5z"></path><path fill="#ddbaff" d="M15,18l3.838-1.279c1.01-0.337,1.231-1.684,0.365-2.302l-0.037-0.026 c-2.399,0.44-4.445,1.291-5.888,2.753C13.596,17.658,14.129,18,15,18z"></path><path fill="#ddbaff" d="M28.693,14.402c-0.878,0.623-0.655,1.987,0.366,2.327L32.872,18c0.913,0,1.461-0.37,1.773-0.924 c-1.46-1.438-3.513-2.274-5.915-2.701C28.717,14.384,28.705,14.393,28.693,14.402z"></path><path fill="#ddbaff" d="M24,31c-1.525,0-2.874,0.697-3.791,1.774C21.409,32.931,22.681,33,24,33s2.591-0.069,3.791-0.226 C26.874,31.697,25.525,31,24,31z"></path>
            </svg>
            </div>
            <div className="bg-white rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
            <path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
            </svg>
            </div>
        </div>
        <div className="bg-white rounded-md p-10 m-5 lg:w-[350px] lg:h-auto sm:w-[300px] sm:h-[250px]">
            <div className="flex gap-8 bg-gray-300 p-3">
            <div className="">
            <Image width={50} height={50} src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone"/>
            </div>
                <div className=""><h3 className="text-black font-mono">Phone</h3><h3 className="font-mono font-semibold">+92 319 7134823</h3></div>
            </div>
            <div className="flex gap-8 bg-gray-300 p-3">
                <div className="">
                <Image width={50} height={50} src="https://img.icons8.com/color/48/domain--v1.png" alt="domain--v1"/>
                </div>
                <div className=""><h3 className="text-black font-mono">WEBSITE</h3><h3 className="font-mono font-semibold">www.portfolio.com</h3></div>
            </div>
            <div className="flex gap-8 bg-gray-300 p-3">
                <div className=""><Image width={50} height={50} src="https://img.icons8.com/fluency/48/address.png" alt="address"/></div>
                <div className=""><h3 className="text-black font-mono">ADDRESS</h3><h3 className="font-mono font-semibold">5/1 Saba Avenue
                <br/> Phase V ext.
                <br/>DHA Karachi</h3></div>
            </div>
            <div className="flex gap-8 bg-gray-300 p-3">
                <div className=""><Image width={50} height={50} src="https://img.icons8.com/bubbles/100/new-post.png" alt="new-post"/></div>
                <div className=""><h3 className="font-mono text-black">EMAIL</h3><h3 className="font-mono font-semibold">iosattbsoft2021</h3></div>
            </div>
        </div>
        <div className="mt-4">
            <button className="bg-red-500 w-40 h-11 rounded-lg">Download</button>
        </div>
    </div>
}