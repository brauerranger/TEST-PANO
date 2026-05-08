var APP_DATA = {
  "scenes": [
    {
      "id": "0-fake_room_panorama",
      "name": "fake_room_panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-test_equirectangular_panorama",
      "name": "test_equirectangular_panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.5309559048408463,
        "pitch": -0.04882570298389233,
        "fov": 1.9205307732459138
      },
      "linkHotspots": [
        {
          "yaw": 0.7840831626825135,
          "pitch": -0.022643384509683173,
          "rotation": 6.283185307179586,
          "target": "0-fake_room_panorama"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5309559048408463,
          "pitch": -0.04882570298389233,
          "title": "Title",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
