import React, { useState, useEffect, useRef } from 'react';

export default function SimplePanelRef() {
    const [showPanel, setShowPanel] = useState(false);
    const [textSearch, setTextSearch] = useState('');

    const panelRef = useRef(null);
    const textSearchRef = useRef(null);


    useEffect(() => {
        console.log('execute useEffect');
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === "P") {
                e.preventDefault();
                setShowPanel(true);
            } else if (e.key === "Escape") {
                setShowPanel(false);
            }
        };

        const handleClick = (e) => {
            console.log("panelRef.current", panelRef.current, "e.target", e.target)
            if (panelRef.current && e.target === panelRef.current) {
                setShowPanel(false);
            }
        };

        const handleChange = (e) => {
            if (textSearchRef.current && e.target === textSearchRef.current) {
                setTextSearch(e.target.value);
            }
        }


        window.addEventListener("keydown", handleKeyDown);
        document.addEventListener("click", handleClick);
        window.addEventListener('change', handleChange);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleClick);
            window.removeEventListener('change', handleChange);
        };
    }, []);


    return (
        <>
            {showPanel && (
                <div ref={panelRef} className="overlay fixed top-0 left-0 w-full h-full flex justify-center bg-slate-700 bg-opacity-30 px-8 pt-32 pb-20 z-[999]">
                    <div className="popup-content bg-white rounded-lg p-4 max-w-3xl w-full" style={{ minWidth: "240px" }}>
                        <input ref={textSearchRef} type="text" name="text" placeholder="text search" className="text-black border-b-2 w-full"/>
                        <textarea className="h-20 w-full" placeholder="text here" />
                        <div className=" text-blue-700 w-full" contentEditable>text here: {textSearch}</div>
                    </div>
                </div>
            )}
        </>
    );
}