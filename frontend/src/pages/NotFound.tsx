import React, {FC, useEffect} from 'react';

export const NotFound: FC = () => {
    useEffect(() => {
        document.title = "Not found page";
    }, [])
    return (
        <div className="container">
            <div className="heading">
                Упс! Не найдено такой страницы!
            </div>
        </div>
    );
};

