# ⚛️ React component for Neshan Leaflet map.

## Getting started

In the simple case you just need to add `options` prop to `NeshanMap` component.


```javascript
import React from 'react';
import NeshanMap from 'react-neshan-map-leaflet'

function SimpleMap() {
  return (
    <NeshanMap
      options={{
        key: 'YOUR_API_KEY',
        center: [35.699739, 51.338097],
        zoom: 13
      }}
    />
  );
}

export default SimpleMap;

```

## Installation

npm:
```
npm install react-neshan-map-leaflet
```

## Features

### Neshan Maps API Loads on Demand

There is no need to place a `<script src=` tag at top of page. The Neshan Maps API loads upon the first usage of the `NeshanMap` component.
