import React, { useState } from 'react';
import Planet from './Planet';
import "./PlanetList.css"
import "./Background.css"

const planetData = [
    { name: 'Merkur', description: 'Merkur je nejmenší planeta naší sluneční soustavy a nejbližší k Slunci. Jeho povrch je pokryt krátery podobně jako náš Měsíc a nemá atmosféru, která by ho chránila před vesmírnými troskami.' },
    { name: 'Venuše', description: 'Venuše je známá jako sesterská planeta Země díky jejich podobné velikosti a blízkosti k Slunci. Má však hustou, toxickou atmosféru, která zachytává teplo, což z ní činí nejteplejší planetu naší sluneční soustavy.' },
    { name: 'Země', description: 'Země je jediná planeta naší sluneční soustavy, o které víme, že ukrývá život. Má rozmanité prostředí, od rozsáhlých oceánů po vysoké hory, které podporují širokou škálu životních forem.' },
    { name: 'Mars', description: 'Mars, známý jako Červená planeta, je chladný pouštní svět s řídkou atmosférou. Je cílem pro průzkum, kde současné vozítka studují jeho povrch za účelem nalezení známek dřívějšího života.' },
    { name: 'Jupiter', description: 'Jupiter je největší planeta naší sluneční soustavy. Jde o plynného obra, který nemá pevný povrch a je známý díky Velké rudé skvrně, obří bouři, která řádí již stovky let.' },
    { name: 'Saturn', description: 'Saturn je nejznámější svým nádherným prstencovým systémem, skládajícím se z ledu a skalních částic. Je to plynný obr jako Jupiter, s kompozicí a strukturou, které jsou stále předmětem studia.' },
    { name: 'Uran', description: 'Uran je unikátní svou nakloněnou osou, která způsobuje, že rotuje na boku. Tento ledový obr je zahalen do mraků, což mu dává bledě modrou barvu, a je známý svým složitým prstencovým systémem a měsíci.' },
    { name: 'Neptun', description: 'Neptun, nejvzdálenější planeta od Slunce, je ledový obr s hlubokou modrou barvou způsobenou metanem v jeho atmosféře. Má silné větry a bouře, přičemž Velká tmavá skvrna je jednou z jeho nejvýraznějších rysů.' }
];

function PlanetList() {




    return (
        <div className="starry-background">

            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
            <div className="planet-list">
                <h1 id="headline">PLANETY SLUNEČNÍ SOUSTAVY</h1>
                {planetData.map((planet) => (
                    <Planet key={planet.name} name={planet.name} description={planet.description}/>
                ))}
            </div>
        </div>
    );
}

export default PlanetList;
