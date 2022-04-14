import React, {FC} from 'react';

export const Empty: FC = () => {
    return (
        <div className="empty_place">
            <div className="empty_heading">
                Ничего не найдено!
            </div>
        </div>
    );
};

