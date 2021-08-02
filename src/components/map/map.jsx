import React, { useEffect } from 'react';
import markerImage from '../../assets/img/marker.svg';

const LOCATIONS = [59.968137, 30.316272];
const ZOOM = 15;
const MARKER_SIZES = [32, 40];

function Map() {
  /* eslint-disable */
  useEffect(() => {
    const map = new ymaps.Map('map', {
      center: LOCATIONS,
      zoom: ZOOM,
    });

    const marker = new ymaps.Placemark(
      map.getCenter(),
      {
        hintContent: 'Набережная реки Карповки, дом 5',
      },
      {
        iconLayout: 'default#image',
        iconImageHref: markerImage,
        iconImageSize: MARKER_SIZES,
      },
    );

    map.geoObjects.add(marker);

    return () => {
      map.destroy();
    };
  }, []);

  return <div style={{ width: 431, height: 271 }} id="map" />;
}

export default Map;
