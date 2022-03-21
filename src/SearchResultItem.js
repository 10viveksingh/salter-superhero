import React from "react";

function SearchResultItem(props) {
    const { data } = props;
    console.log('data', data);
    return (
        <div className='search-result'>
            <div className='left'>
                <img src={data.image.url} alt='image' />
            </div>
            <div className='right'>
                <h3>{data.name}</h3>
                <span>{data.biography['full-name']}</span>
                <div className='Stats'>
                    <div>gender: {data.powerstats.gender}</div>
                    <div>strength: {data.powerstats.strength}</div>
                    <div>speed: {data.powerstats.speed}</div>
                    <div>power: {data.powerstats.power}</div>
                </div>
            </div>
        </div>
    )
}


export default SearchResultItem;