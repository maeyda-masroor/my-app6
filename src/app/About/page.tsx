import Image from "next/image"
export default function About(){
    return <div className="m-10 p-3">
        <div className="font-mono text-6xl">
            ABOUT
        </div>
        <div className="font-mono text-xl">
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
        My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
        </div>
        <br/>
        <div className="font-mono text-2xl">
            What I do?
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 text-black gap-4">
            <div className="bg-white rounded-lg w-auto h-auto flex p-4 gap-4 mt-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.
                    </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto flex p-4 gap-4 mt-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.
                    </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto flex p-4 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.
                    </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto flex p-4 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.
                    </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto flex p-4 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.
                    </h4>
                </div>
            </div>
        </div>
    </div>
}