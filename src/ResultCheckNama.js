import React from 'react';

const ResultCheckNama = ({ data }) => {
    // Capitalize function
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="border-t pt-4 mt-4 text-center bg-white rounded-xl py-4 px-4">
            <p className="text-gray-600">{capitalize(data.nama)}</p>
            {data.data === "tidak ada" ? (
                <h2 className="text-lg font-medium mt-2">
                    Yahh kamu ga punya khodam 😰😰, sepertinya kamu harus isi khodam
                </h2>
            ) : (
                <>
                    <h2 className="text-lg font-medium mt-2">Wihh Keren Khodam kamu</h2>
                    <p className="text-gray-600 text-lg font-medium">{capitalize(data.data)}</p>
                </>
            )}
        </div>
    );
};

export default ResultCheckNama;
