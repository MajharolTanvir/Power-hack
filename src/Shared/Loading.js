import React from 'react';

const Loading = () => {
    return (
        <div class="flex items-center justify-center space-x-2">
            <div class="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;