import {FC, useState} from 'react';

export const Sorting: FC = () => {
    const [sortedData, setSortedData] = useState({
        sortedType: 1,
        cost_start: 0,
        cost_end: 5000,
        flowers: []
    })
    const changeHandler = (event: any) => {
        setSortedData({
            ...sortedData,
            [event.target.name]: !isNaN(event.target.value) ? Number(event.target.value) : event.target.value,
        })
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
                        <div>
                            <span>
                               От
                            </span>
                            <div>
                                <div className="sorting_flex">
                                    <input className=""
                                           value={sortedData.cost_start}
                                           name="cost_start"
                                           onChange={changeHandler}
                                    />
                                    <span>₽</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>
                               До
                            </span>
                            <div>
                                <div className="sorting_flex">
                                    <input className=""
                                           value={sortedData.cost_end}
                                           name="cost_end"
                                           onChange={changeHandler}
                                    />
                                    <span>₽</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

