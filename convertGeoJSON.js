const fs = require('fs');

fs.readFile('police_stations.geojson', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const geojson = JSON.parse(data);
  const stations = geojson.features.map(feature => ({
    name: feature.properties.name || 'Unnamed Police Station',
    latitude: feature.geometry.coordinates[1],
    longitude: feature.geometry.coordinates[0],
    address: feature.properties.address || 'Address not available',
    phone: feature.properties.phone || '100'
  }));
  fs.writeFile('stations.js', `const stations = ${JSON.stringify(stations, null, 2)};`, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Data successfully written to stations.js');
    }
  });
});
