import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Link} from 'react-router-dom'

export const FlowersList: FC = () => {
    const {flowers, loading} = useTypedSelector(state => state.flowers)
    if (loading) {
        return (
            <div>
                Загрузка
            </div>
        )
    }
    return (
        <>
            <div className="uppercase_heading">
                Сортировка по цветам
            </div>
            <div className="flowers_place">
                {flowers.length && flowers.map(flower => {
                    return (
                        <div className="flowers_place__flex" key={flower.id}>
                            <div className="checkbox_place">
                                <input
                                    type="checkbox"
                                    id={`flower-${flower.id}`}
                                    className="scal_chek checkbox_for_choose_flower custom-checkbox"
                                />
                                <label htmlFor={`flower-${flower.id}`} className="lab_desc">

                                </label>
                            </div>
                            <div className="flowers_place__name">
                                {flower.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>


    )
}