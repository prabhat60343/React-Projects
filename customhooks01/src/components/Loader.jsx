import React from "react";

const Loader = () => {
    return (
        <div className="text-center py-5">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
            <p className="text-gray-500 mt-2">Fetching currency data...</p>
        </div>
    );
};

export default Loader;
