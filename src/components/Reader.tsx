import { IonButton } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import { useEffect, useState } from 'react';

import useFetchData from '../services/useFetchData';

import { XMLParser } from 'fast-xml-parser';

import './Reader.css';

let SECTIONS = [
    "guayaquil/comunidad",
    "noticias/ecuador",
    "noticias/internacional",
    "noticias/politica",
    "deportes/futbol",
    "noticias/economia"
]


const Reader: React.FC = () => {

    const [ready, setReady] = useState(false);
    const [load, setLoad] = useState(false);
    const [results, setResults] = useState<any>([]);
    const [titles, setTitles] = useState<any>([]);

    useEffect(() => {

        if (load) {

            const fetchSections = async () => {
                let data = [];
                let titles = [];

                for (const section of SECTIONS) {
                    titles.push("Cargando:", section);

                    const response = await fetch(
                        `/rss/${section}/?outputType=xml`
                    );

                    const xml = await response.text();

                    const parser = new XMLParser();
                    let dataObj = await parser.parse(xml);

                    data.push(dataObj);
                }

                setResults(data);
                setTitles(titles);
                setReady(true);
            
            };

            fetchSections();

        }
    }, [load]);


    return (
        <IonGrid>
            <IonRow class="ion-justify-content-ce nter">
                <IonCol><IonButton onClick={() => setLoad(true)}>Cargar Noticias</IonButton></IonCol>
            </IonRow>
            {ready && (
                results?.map((group: any, index: number) => (
                    <IonRow key={index}>
                        <IonCol>{SECTIONS[index]} - {group?.rss?.channel?.item?.length} noticias</IonCol>
                    </IonRow>
                ))
            )}
        </IonGrid>

    );
};

export default Reader;