import React, {FC, useEffect, useState} from 'react';
import {FlowersList} from "./flowersList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
interface PropsTypes{
    categoryId: string,
    subcategoryId: string
}
export const Sorting: FC<PropsTypes> = ({categoryId, subcategoryId}) => {
    const {fetchSortingProducts} = useActions()
    const {max_price, min_price} = useTypedSelector(state => state.products)
    const [sortedData, setSortedData] = useState({
        sortedType: 1,
        cost_start: 0,
        cost_end: 5000,
        flowers: [],
        categoryId: categoryId,
        subcategoryId: subcategoryId
    })
    const changeHandler = (event: any) => {
        setSortedData({
            ...sortedData,
            [event.target.name]: !isNaN(event.target.value) ? Number(event.target.value) : event.target.value,
        })
    }

    // useEffect(() => {
    //     if(max_price && min_price){
    //         setSortedData({...sortedData, cost_start: min_price, cost_end: max_price})
    //     }
    // }, [max_price, min_price])

    console.log('max_price/min_price', max_price, min_price)

    const startSorting = () => {
        fetchSortingProducts(sortedData)
    }
    return (
        <>
            <div className="sorting_place__sorting">
                <div className="sorting_flex">
                    <div className="sorting_flex__sorted_heading">Сортировка</div>
                    <div>
                        <select className="sorting_flex__select"
                                value={sortedData.sortedType}
                                name="sortedType"
                                onChange={changeHandler}
                        >
                            <option value="1">
                                По дате создания
                            </option>
                            <option value="2">
                                По убыванию цены
                            </option>
                            <option value="3">
                                По возрастанию цены
                            </option>
                            <option value="4">
                                По популярности
                            </option>
                        </select>
                    </div>
                </div>
                <hr/>
                <div className="sorting_price">
                    <div className="uppercase_heading">
                        Цена
                    </div>
                    <div className="sorting_flex">
                        <div className="half_part_input_place">
                            <span>
                               От
                            </span>
                            <div>
                                <div className="sorting_flex">
                                    <input className="sorting_price_input"
                                           value={sortedData.cost_start}
                                           name="cost_start"
                                           onChange={changeHandler}
                                    />
                                    <span>₽</span>
                                </div>
                            </div>
                        </div>
                        <div className="half_part_input_place">
                            <span>
                               До
                            </span>
                            <div>
                                <div className="sorting_flex">
                                    <input className="sorting_price_input"
                                           value={sortedData.cost_end}
                                           name="cost_end"
                                           onChange={changeHandler}
                                    />
                                    <span>₽</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="range" value={sortedData.cost_end} name="cost_end" onChange={changeHandler}/>
                </div>


            </div>
            <FlowersList/>
            <div className="default_btn" onClick={startSorting}>
                Найти
            </div>
        </>
    );
};

