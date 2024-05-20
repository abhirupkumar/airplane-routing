import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
    const [startLat, setStartLat] = useState('');
    const [startLng, setStartLng] = useState('');
    const [endLat, setEndLat] = useState('');
    const [endLng, setEndLng] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(startLat, startLng, endLat, endLng);
    };

    return (
        <form onSubmit={handleSubmit} className=" flex flex-wrap w-full backdrop-blur-[1px] items-center justify-center gap-6 max-w-lg shadow-md border-2 border-zinc-600 rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="startLat">
                    Start Latitude
                </label>
                <input
                    type="number"
                    id="startLat"
                    value={startLat}
                    onChange={(e) => setStartLat(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-background"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="startLng">
                    Start Longitude
                </label>
                <input
                    type="number"
                    id="startLng"
                    value={startLng}
                    onChange={(e) => setStartLng(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-background"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="endLat">
                    Destination Latitude
                </label>
                <input
                    type="number"
                    id="endLat"
                    value={endLat}
                    onChange={(e) => setEndLat(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-background"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="endLng">
                    Destination Longitude
                </label>
                <input
                    type="number"
                    id="endLng"
                    value={endLng}
                    onChange={(e) => setEndLng(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-background"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                    Show Route
                </button>
            </div>
        </form>
    );
};

export default InputForm;
