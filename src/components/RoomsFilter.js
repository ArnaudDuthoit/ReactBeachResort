import React from 'react';
import {useContext} from 'react';
import {RoomContext} from "../context";
import Title from '../components/Title';

// Recuperer les valeurs uniques
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
};

export default function RoomsFilter({rooms}) {

    const context = useContext(RoomContext);

    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    // get unique types
    let types = getUnique(rooms, 'type');

    // add all
    types = ['all', ...types];

    // map en jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms,'capacity');

    people = people.map((item,index)=> {
        return <option key={index} value={item}>{item}</option>
    });




    return <section className='filter-container'>

        <Title title="Search Rooms"/>

        <form className='filter-form'>

            {/* select type */}
            <div className="form-group">
                <label htmlFor="type"> room type</label>
                <select name="type" id="type" value={type} className='form-control' onChange={handleChange}>
                    {types}
                </select>
            </div>
            {/* end select type */}
            {/* Guest */}
            <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select name="capacity" id="capacity" value={capacity} className='form-control' onChange={handleChange}>
                    {people}
                </select>
            </div>
            {/* end Guest */}
            {/* Prix */}
            <div className="form-group">
                <label htmlFor="price"> Prix {price} euros</label>
                <input type='range' name="price" min={minPrice} max={maxPrice} id="price"  value={price} className='form-control' onChange={handleChange} />
            </div>
            {/* end prix */}
            {/* Taille */}
            <div className="form-group">
                <label htmlFor="size"> Taille </label>
                <div className='size-inputs'>
                    <input type="number" name="minSize" id='size' value={minSize} onChange={handleChange} className='size-input'/>
                    <input type="number" name="maxSize" id='size' value={maxSize} onChange={handleChange} className='size-input'/>
                </div>
            </div>
            {/* end Taille */}

            {/* extras*/}
            <div className="form-group">
               <div className="single-extra">
                   <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                   <label htmlFor="breakfast">petit dej</label>
               </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                    <label htmlFor="pets">Animaux</label>
                </div>
            </div>
            {/* end extras */}


        </form>


    </section>
}