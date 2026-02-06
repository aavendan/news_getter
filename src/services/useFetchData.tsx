import { useEffect, useState } from 'react';
import { XMLParser } from 'fast-xml-parser';

export default function useFetchData(cargar: boolean): any {

    let BASE_URL = "https://www.eluniverso.com/arc/outboundfeeds/rss-subsection/{section}/?outputType=xml"

    let SECTIONS = [
        "guayaquil/comunidad",
        "noticias/ecuador",
        "noticias/internacional",
        "noticias/politica",
        "deportes/futbol",
        "noticias/economia"
    ]

    // const [data, setData] = useState<null | any>();

    useEffect(() => {

        let myURL = BASE_URL.replace("{section}", SECTIONS[0])

        fetch(`/rss/${SECTIONS[0]}/?outputType=xml`)
            .then(response => {

                // Verificar si la respuesta no es exitosa
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                return response.text();

            })
            .then(text => {

                const parser = new XMLParser();
                let data = parser.parse(text);


                // Respuesta exitosa
                return {
                    success: true,
                    body: data
                };

            })
            .catch(error => {

                // Error en la solicitud
                return {
                    success: false,
                    body: error.message
                };

            });

    }, [cargar]); // El array vacío asegura que el efecto se ejecute solo una vez después del primer renderizado

}