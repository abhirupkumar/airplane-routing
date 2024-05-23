import React from 'react';

const StepConnector = ({ steps }) => {
    return (
        <div className="flex flex-wrap gap-x-8 justify-center pt-12 pb-24">
            {steps.map((step, index) => {
                return (
                    <div className="flex items-center" key={step.id}>
                        <div className="flex gap-x-4 group">
                            <div className="flex flex-col items-center justify-center w-32">
                                <div className="font-semibold text-sm leading-none mb-2">
                                    {step.name}
                                </div>
                            </div>
                            {index < steps.length - 1 && (
                                <div className=" flex justify-center items-center relative">
                                    <div className="w-10 ">
                                        <img src="./icons/airplane.png" alt="airplane" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StepConnector;