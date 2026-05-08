var APP_DATA = {
  "scenes": [
    {
      "id": "0-test_equirectangular_panorama",
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
        "yaw": 1.0583509079147433,
        "pitch": 0.22128551358602166,
        "fov": 1.9179540180015482
      },
      "linkHotspots": [
        {
          "yaw": 0.7840832701019362,
          "pitch": -0.02264335990879829,
          "rotation": 6.283185307179586,
          "target": "1-fake_room_panorama"
        },
        {
          "yaw": 1.0583509224342311,
          "pitch": 0.22128548266481474,
          "rotation": 0,
          "target": "1-fake_room_panorama"
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
    },
    {
      "id": "1-fake_room_panorama",
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
      "linkHotspots": [
        {
          "yaw": -2.91778184359619,
          "pitch": 0.010995418492004916,
          "rotation": 6.283185307179586,
          "target": "0-test_equirectangular_panorama"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
