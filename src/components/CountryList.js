import React from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';

function CountriesList({ countries }) {
    return (
        <ul>
            {countries.map((country) => {
                return (
                    <li key={`/${country.alpha3Code}`}>
                        <Link to={`/${country.alpha3Code}`}>
                            {country.name}
                        </Link>
                    </li>
                )
            }

            )}
        </ul>
    )
}

export default CountriesList;