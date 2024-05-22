import React, { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import airports from '../data/airports.json';

const InputForm = ({ onSubmit }) => {
    const airportsData = airports["airports"];
    console.log(airportsData)
    const [start, setStart] = useState(null);
    const [dest, setDest] = useState(null);

    const handleOnSelectStartAirport = (item) => {
        setStart(item);
    }

    const handleOnSelectEndAirport = (item) => {
        setDest(item);
    }

    const formatResult = (item) => {
        return (
            <>
                <span className="block text-left z-10">{item.name}</span>
            </>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!start || !dest) {
            return;
        }
        onSubmit(start.Latitude, start.Longitude, dest.Latitude, dest.Longitude);
    }

    const handleClear1 = () => {
        setStart(null);
    }
    const handleClear2 = () => {
        setDest(null);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full backdrop-blur-[1px] items-center justify-center gap-6 max-w-lg shadow-md border-2 border-zinc-600 rounded px-8 pt-6 pb-8 mb-4">
            <div className='flex flex-col w-full'>
                <div className="mb-4 w-full">
                    <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="start">
                        Starting Airport
                    </label>
                    <ReactSearchAutocomplete
                        items={airportsData}
                        fuseOptions={{ keys: ["name", "id"] }}
                        onSelect={handleOnSelectStartAirport}
                        onClear={handleClear1}
                        autoFocus
                        formatResult={formatResult}
                        resultStringKeyName="name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="dest">
                        Destination Airport
                    </label>
                    <ReactSearchAutocomplete
                        items={airportsData}
                        fuseOptions={{ keys: ["name"] }}
                        onSelect={handleOnSelectEndAirport}
                        onClear={handleClear2}
                        autoFocus
                        formatResult={formatResult}
                        resultStringKeyName="name"
                    />
                </div>
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
