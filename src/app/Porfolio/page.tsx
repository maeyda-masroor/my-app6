"use client"
import Image from 'next/image';
import { useState } from 'react';
export default function Work(){
    const [activeTab, setActiveTab] = useState('tab1');

    // Tab button click handler
    const handleTabClick = (tabId:any) => {
        setActiveTab(tabId);
    };
    return <div className="m-10">
    <h1 className="text-white font-extrabold text-6xl">
    Portfolio
    </h1>
    <div className="w-full max-w-md mx-auto mt-10">
    <div className="flex border-b">
    <button
    className={`tab-btn px-6 py-2 text-sm font-medium ${activeTab === 'tab1' ? 'text-white hover:text-red-500' : 'text-white hover:text-red-500'} focus:outline-none border-b-2 border-transparent`}
          onClick={() => handleTabClick('tab1')}
        >
          All
        </button>
        <button
          className={`tab-btn px-6 py-2 text-sm font-medium ${activeTab === 'tab2' ? 'text-white hover:text-red-500' : 'text-white hover:text-red-500'} focus:outline-none border-b-2 border-transparent`}
          onClick={() => handleTabClick('tab2')}
        >
          Mock up
        </button>
        <button
          className={`tab-btn px-6 py-2 text-sm font-medium ${activeTab === 'tab3' ? 'text-white hover:text-red-500' : 'text-white hover:text-red-500'} focus:outline-none border-b-2 border-transparent`}
          onClick={() => handleTabClick('tab3')}
        >
          Grahpic Design 
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 'tab1' && (
          <div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 text-black gap-4">
            <div className="bg-white rounded-lg w-auto h-auto p-2 gap-4 mt-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, 
                    </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto p-2 gap-4 mt-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto p-2 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet,   
                    </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto  p-4 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet,   </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto  p-4 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, </h4>
                </div>
            </div>
        </div>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 text-black gap-4">
            <div className="bg-white rounded-lg w-auto h-auto p-2 gap-4 mt-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, 
                    </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto p-2 gap-4 mt-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto p-2 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet,   
                    </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto  p-4 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet,   </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto  p-4 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, </h4>
                </div>
            </div>
        </div>
            </div>
        )}
        {activeTab === 'tab3' && (
          <div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 text-black gap-4">
            <div className="bg-white rounded-lg w-auto h-auto p-2 gap-4 mt-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, 
                    </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto p-2 gap-4 mt-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto p-2 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet,   
                    </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto  p-4 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet,   </h4>
                </div>
            </div>
            <div className="bg-white rounded-lg w-auto h-auto  p-4 gap-4">
                <div className="p-4">
                <Image width={250} height={250} src="https://img.icons8.com/color/48/designer.png" alt="designer"/>
                </div>
                <div className="font-mono">
                    <h3 className="font-mono text-lg">
                    Ui/Ux Design
                    </h3>
                    <h4 className="font-mono text-sm">
                    Lorem ipsum dolor sit amet, </h4>
                </div>
            </div>
        </div>
          </div>
        )}
      </div>
    </div>
    </div>
}