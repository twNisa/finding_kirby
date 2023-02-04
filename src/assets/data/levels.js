const levels = [
  {
    id: "01", 
    name: "The Great Cave Offensive",
    url: require("../images/levels/01.png"),   
    firebaseStorage: "levels/01.png",
    size: [1280, 915],
    targets: 
      [
        {name: "Star Rod", url: require("../images/items/star-rod.png"), firebaseStorage: "items/star-rod.png", topLeftCoord: [37, 73], bottomRightCoord: [41, 78 ]},
        {name: "Band-aid", url: require("../images/items/band-aid.png"), firebaseStorage: "items/band-aid.png", topLeftCoord: [6 ,44 ], bottomRightCoord: [10 ,49 ]},
        {name: "Cracked Bowl", url: require("../images/items/cracked-bowl.png"), firebaseStorage: "items/cracked-bowl.png", topLeftCoord: [92 ,51 ], bottomRightCoord: [98 ,56 ]},
        {name: "Medal", url: require("../images/items/medal.png"), firebaseStorage: "items/medal.png", topLeftCoord: [22 ,21 ], bottomRightCoord: [27 ,27 ]},
        {name: "Purse", url: require("../images/items/purse.png"), firebaseStorage: "items/purse.png", topLeftCoord: [88 ,38], bottomRightCoord: [93 ,44]},
        {name: "Flag", url: require("../images/items/flag.png"), firebaseStorage: "items/flag.png", topLeftCoord: [30 ,42 ], bottomRightCoord: [33 ,49]},
        {name: "Waddle Dee with Camera", url: require("../images/items/waddle-dee.png"), firebaseStorage: "items/waddle-dee.png", topLeftCoord: [55 ,49 ], bottomRightCoord: [59 ,56 ]},
      ]
  },
  {
    id: "02", 
    name: "World of Clouds",
    url: require("../images/levels/02.png"),
    firebaseStorage: "levels/02.png",
    size: [1280, 914],
    targets: 
      [
        {name: "Star Rod", url: require("../images/items/star-rod.png"), firebaseStorage: "items/star-rod.png", topLeftCoord: [83, 42], bottomRightCoord: [88, 49 ]},
        {name: "Band-aid", url: require("../images/items/band-aid.png"), firebaseStorage: "items/band-aid.png", topLeftCoord: [69 ,81 ], bottomRightCoord: [76 ,88 ]},
        {name: "Purse", url: require("../images/items/purse.png"), firebaseStorage: "items/purse.png", topLeftCoord: [5 ,40], bottomRightCoord: [10 ,45]},
        {name: "Flag", url: require("../images/items/flag.png"), firebaseStorage: "items/flag.png", topLeftCoord: [40 ,10 ], bottomRightCoord: [45 ,15]},
        {name: "Waddle Dee with Camera", url: require("../images/items/waddle-dee.png"), firebaseStorage: "items/waddle-dee.png", topLeftCoord: [66 ,40 ], bottomRightCoord: [70 ,45 ]},
        {name: "Pin Wheel", url: require("../images/items/pin-wheel.png"), firebaseStorage: "items/pin-wheel.png", topLeftCoord: [78 ,23 ], bottomRightCoord: [83 ,32 ]},
      ]
  },
  {
    id: "03", 
    name: "Apple Forest",
    url: require("../images/levels/03.png"),
    firebaseStorage: "levels/03.png",
    size: [1280, 912],
    targets: 
      [
        {name: "Star Rod", url: require("../images/items/star-rod.png"), firebaseStorage: "items/star-rod.png", topLeftCoord: [71, 86], bottomRightCoord: [77, 95 ]},
        {name: "Band-aid", url: require("../images/items/band-aid.png"), firebaseStorage: "items/band-aid.png", topLeftCoord: [40 ,75 ], bottomRightCoord: [45 ,80 ]},
        {name: "Waddle Dee with Camera", url: require("../images/items/waddle-dee.png"), firebaseStorage: "items/waddle-dee.png", topLeftCoord: [28 ,53 ], bottomRightCoord: [33 ,61 ]},
        {name: "Apple Jam", url: require("../images/items/apple-jam.png"), firebaseStorage: "items/apple-jam.png", topLeftCoord: [59 ,37 ], bottomRightCoord: [61 ,40 ]},
        {name: "Purse", url: require("../images/items/purse.png"), firebaseStorage: "items/purse.png", topLeftCoord: [71 ,52], bottomRightCoord: [76 ,59]},
        {name: "Flag", url: require("../images/items/flag.png"), firebaseStorage: "items/flag.png", topLeftCoord: [11 ,18 ], bottomRightCoord: [15 ,23]},

      ]
  },
  {
    id: "04", 
    name: "Gourmet Race",
    url: require("../images/levels/04.png"),
    firebaseStorage: "levels/04.png",
    size: [1280, 911],
    targets: 
      [
        {name: "Star Rod", url: require("../images/items/star-rod.png"), firebaseStorage: "items/star-rod.png", topLeftCoord: [3, 38], bottomRightCoord: [10, 47 ]},
        {name: "Norimaki Roll", url: require("../images/items/norimaki-roll.png"), firebaseStorage: "items/norimaki-roll.png", topLeftCoord: [62 ,40 ], bottomRightCoord: [69 ,49 ]},
        {name: "Waddle Dee with Camera", url: require("../images/items/waddle-dee.png"), firebaseStorage: "items/waddle-dee.png", topLeftCoord: [27 ,19 ], bottomRightCoord: [31 ,24 ]},
        {name: "Purse", url: require("../images/items/purse.png"), firebaseStorage: "items/purse.png", topLeftCoord: [53 ,14], bottomRightCoord: [56 ,20]},
        {name: "Flag", url: require("../images/items/flag.png"), firebaseStorage: "items/flag.png", topLeftCoord: [88 ,2 ], bottomRightCoord: [91 ,7]},
      ]
  },
  {
    id: "05", 
    name: "The Fountain of Dreams",
    url: require("../images/levels/05.png"),
    firebaseStorage: "levels/05.png",
    size: [1280, 908],
    targets: 
      [
        {name: "Star Rod", url: require("../images/items/star-rod.png"), firebaseStorage: "items/star-rod.png", topLeftCoord: [52, 5], bottomRightCoord: [58, 12 ]},
        {name: "Kirby Plush", url: require("../images/items/kirby-plush.png"), firebaseStorage: "items/kirby-plush.png", topLeftCoord: [29 ,47 ], bottomRightCoord: [32 ,50 ]},
        {name: "Quick Draw", url: require("../images/items/quick-draw.png"), firebaseStorage: "items/quick-draw.png", topLeftCoord: [39 ,72 ], bottomRightCoord: [45 ,79 ]},
        {name: "Waddle Dee with Camera", url: require("../images/items/waddle-dee.png"), firebaseStorage: "items/waddle-dee.png", topLeftCoord: [62 ,69 ], bottomRightCoord: [69 ,77 ]},
        {name: "Purse", url: require("../images/items/purse.png"), firebaseStorage: "items/purse.png", topLeftCoord: [94 ,68], bottomRightCoord: [97 ,70]},
        {name: "Flag", url: require("../images/items/flag.png"), firebaseStorage: "items/flag.png", topLeftCoord: [82 ,40 ], bottomRightCoord: [86 ,45]},
      ]
  },
  {
    id: "06", 
    name: "Outer Space",
    url: require("../images/levels/06.png"),
    firebaseStorage: "levels/06.png",
    size: [1280, 914],
    targets: 
      [
        {name: "Star Rod", url: require("../images/items/star-rod.png"), firebaseStorage: "items/star-rod.png", topLeftCoord: [37, 2], bottomRightCoord: [41, 8 ]},
        {name: "Illustration Piece", url: require("../images/items/illustration-piece.png"), firebaseStorage: "items/illustration-piece.png", topLeftCoord: [64 ,95 ], bottomRightCoord: [66 ,98 ]},
        {name: "Waddle Dee with Camera", url: require("../images/items/waddle-dee.png"), firebaseStorage: "items/waddle-dee.png", topLeftCoord: [35 ,42 ], bottomRightCoord: [39 ,46 ]},
        {name: "Purse", url: require("../images/items/purse.png"), firebaseStorage: "items/purse.png", topLeftCoord: [67 ,36], bottomRightCoord: [71 ,42]},
        {name: "Flag", url: require("../images/items/flag.png"), firebaseStorage: "items/flag.png", topLeftCoord: [85 ,52 ], bottomRightCoord: [89 ,61]},
      ]
  },
];

export default levels;
