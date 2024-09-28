var APP_DATA = {
  "scenes": [
    {
      "id": "0-diele-1",
      "name": "Diele 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1998449580424246,
          "pitch": 0.7842330800617265,
          "rotation": 0,
          "target": "2-diele-2"
        },
        {
          "yaw": 1.2116453992617355,
          "pitch": 0.4975874702030705,
          "rotation": 0,
          "target": "4-diele-3"
        },
        {
          "yaw": 1.4309656743670898,
          "pitch": 0.3906564731021369,
          "rotation": 0,
          "target": "5-bad"
        },
        {
          "yaw": -1.0239977334084074,
          "pitch": 1.1992538883588715,
          "rotation": 0,
          "target": "1-wc"
        },
        {
          "yaw": 0.04560946774002872,
          "pitch": 0.6158038661345806,
          "rotation": 0,
          "target": "6-wohnen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wc",
      "name": "WC",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6460197179951983,
          "pitch": 1.1302853353697966,
          "rotation": 0,
          "target": "0-diele-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-diele-2",
      "name": "Diele 2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07834217729715931,
          "pitch": 0.5369577054325454,
          "rotation": 0,
          "target": "5-bad"
        },
        {
          "yaw": -0.5908818272623684,
          "pitch": 0.7149541039785134,
          "rotation": 0,
          "target": "4-diele-3"
        },
        {
          "yaw": 1.5530966513018534,
          "pitch": 0.745347604247037,
          "rotation": 0,
          "target": "3-schlafen"
        },
        {
          "yaw": 3.1307208551435517,
          "pitch": 0.6756665974215679,
          "rotation": 0,
          "target": "1-wc"
        },
        {
          "yaw": 3.095788545870663,
          "pitch": 0.9206336463864702,
          "rotation": 0,
          "target": "0-diele-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-schlafen",
      "name": "Schlafen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0102226708373685,
          "pitch": 0.3829363754498516,
          "rotation": 0,
          "target": "2-diele-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-diele-3",
      "name": "Diele 3",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6064967809251751,
          "pitch": 0.8856010597421804,
          "rotation": 0,
          "target": "5-bad"
        },
        {
          "yaw": 2.564267291274909,
          "pitch": 0.8370539910156598,
          "rotation": 0,
          "target": "2-diele-2"
        },
        {
          "yaw": 2.8322944164290815,
          "pitch": 0.5408046863986069,
          "rotation": 0,
          "target": "0-diele-1"
        },
        {
          "yaw": -1.43938196516042,
          "pitch": 0.5264576845282267,
          "rotation": 0,
          "target": "7-kind"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bad",
      "name": "Bad",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "6-wohnen",
      "name": "Wohnen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7994798675525976,
          "pitch": 0.5773794251300721,
          "rotation": 0,
          "target": "0-diele-1"
        },
        {
          "yaw": 2.7196444653449774,
          "pitch": 0.45709341861811126,
          "rotation": 0,
          "target": "10-kochen"
        },
        {
          "yaw": -3.1257183409696445,
          "pitch": 0.642587684359949,
          "rotation": 0,
          "target": "8-essen"
        },
        {
          "yaw": -1.8099903017199903,
          "pitch": 0.3881817670200647,
          "rotation": 0,
          "target": "9-balkon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kind",
      "name": "Kind",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8425214924155462,
          "pitch": 0.5557134066148084,
          "rotation": 0,
          "target": "4-diele-3"
        },
        {
          "yaw": 1.856294316926859,
          "pitch": 0.3947444961205413,
          "rotation": 0,
          "target": "2-diele-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-essen",
      "name": "Essen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5142234912354473,
          "pitch": 0.529133677797784,
          "rotation": 0,
          "target": "9-balkon"
        },
        {
          "yaw": -1.2537805313479886,
          "pitch": 0.46374063324018167,
          "rotation": 0,
          "target": "10-kochen"
        },
        {
          "yaw": -2.082466456329204,
          "pitch": 0.42568937863608447,
          "rotation": 0,
          "target": "0-diele-1"
        },
        {
          "yaw": -2.61771023925019,
          "pitch": 0.5176975634490688,
          "rotation": 0,
          "target": "6-wohnen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-balkon",
      "name": "Balkon",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.320307290618347,
          "pitch": 0.5085461993060516,
          "rotation": 0,
          "target": "6-wohnen"
        },
        {
          "yaw": -2.5138080649180203,
          "pitch": 0.7029155153161977,
          "rotation": 0,
          "target": "8-essen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-kochen",
      "name": "Kochen",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6320679812655516,
          "pitch": 0.49147654757792836,
          "rotation": 0,
          "target": "8-essen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
