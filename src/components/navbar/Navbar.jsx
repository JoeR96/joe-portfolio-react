import React from "react";
import CV from '../../JoeRichardson.docx'
export default function Navbar() {
    return (
        <header style={styleOne} className="bg-gray-800 lg:sticky xs:sticky sm:sticky md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              
                        <a style={style}>Joe Richardson</a>

                <a style={style} href={CV}>
                            CV
                        </a>
 
            </div>
        </header>
    );
}

const style = {
    padding: '8'
}

const styleOne = {
    backgroundColor: "#212529"
}