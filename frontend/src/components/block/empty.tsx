import React, {FC} from 'react';

interface EmptyProps{
    loading: boolean,
    label: string
}

export const Empty: FC<EmptyProps> = ({loading, label}) => {
    return (
        <>
            {
                !loading ?
                    <div className="empty_place">
                        <div className="empty_heading">{label}</div>
                    </div>
                    :
                    <></>
            }
        </>
    );
};

