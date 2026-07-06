/* Category metadata for structured vocabulary presentations. */
(function () {
  "use strict";

  const CATEGORIES = {
    "7:1": [
      {
        id: "personality-relationships",
        title: "Personality & Relationships",
        words: [
          "CLUMSY", "EASYGOING", "FORGETFUL", "GENEROUS", "HONEST", "OUTGOING",
          "PUNCTUAL", "SELFISH", "STUBBORN", "THOUGHTFUL", "PERSONALITY", "CLEVER",
          "INTELLIGENT", "POLITE", "FRIENDLY", "CHEERFUL", "GET ON WELL", "RELIABLE",
          "STINGY", "SOCIABLE", "ADVENTUROUS", "TALENTED"
        ]
      },
      {
        id: "appearance-physical-features",
        title: "Appearance & Physical Features",
        words: [
          "ATTRACTIVE", "OVERWEIGHT", "SLIM", "WELL BUILT", "APPEARANCE", "PLUMP",
          "TALL", "BLOND", "CURLY", "STRAIGHT", "WAVY", "BALD", "STUMPY", "MOUSTACHE",
          "BEARD", "BEAUTIFUL", "GLASSES", "HANDSOME", "MIDDLE AGED", "UGLY"
        ]
      }
    ],
    "7:2": [
      {
        id: "sports-activities",
        title: "Sports & Activities",
        words: [
          "ARCHERY", "WRESTLING", "RAFTING", "JOGGING", "SKATING", "ROLLERBLADING", "SKIING", "POOL"
        ]
      },
      {
        id: "equipment-gear",
        title: "Equipment & Gear",
        words: [
          "EQUIPMENT", "SHUTTLECOCK", "GOGGLES", "GLOVES", "HOOP", "HELMET", "SADDLE"
        ]
      }
    ],
    "7:3": [
      {
        id: "life-events",
        title: "Life Events",
        words: [
          "BORN", "GROW UP", "GRADUATE", "GET ENGAGED", "GET MARRIED",
          "RAISE KIDS", "ADOPT", "MOVE", "ABROAD", "DIED"
        ]
      }
    ],
    "7:4": [
      {
        id: "animal-body-parts",
        title: "Animal Body Parts",
        words: ["FUR", "CLAW", "WING", "FEATHER", "TAIL", "SKIN", "STRIPE", "TRUNK", "HORN"]
      },
      {
        id: "animal-types-diet",
        title: "Animal Types & Diet",
        words: ["INSECT", "CARNIVORE", "HERBIVORE", "OMNIVORE", "AMPHIBIAN", "REPTILE"]
      },
      {
        id: "habitats",
        title: "Habitats",
        words: ["DESERT", "MOUNTAIN", "FOREST", "OCEAN", "JUNGLE", "SAVANNAH", "HABITAT"]
      }
    ],
    "7:5": [
      {
        id: "tv-show-types",
        title: "TV Show Types",
        words: [
          "SERIES", "TALK SHOW", "MOVIE", "DOCUMENTARY", "CARTOON", "QUIZ SHOW",
          "REALITY SHOW", "HORROR", "SIT COM", "COMEDY", "SOAP OPERA", "THRILLER",
          "DISCUSSION", "DEBATE", "COMMERCIAL", "COOKERY", "NEWS"
        ]
      },
      {
        id: "opinions-about-something",
        title: "Opinions about Something",
        words: ["AMUSING", "ENTERTAINING", "INTERESTING", "EXCITING", "BORING", "EDUCATIONAL", "RIDICULOUS"]
      }
    ],
    "7:6": [
      {
        id: "words-about-parties",
        title: "Words about Parties",
        words: [
          "WEDDING", "BIRTHDAY", "HALLOWEEN", "SLEEPOVER", "PARADE", "FAREWELL",
          "BEVERAGE", "FIREWORK", "PRESENT", "CANDLE", "FANCY DRESS"
        ]
      },
      {
        id: "planning-organizing",
        title: "Planning & Organizing",
        words: [
          "ARRANGE", "ORGANIZE", "DECORATE", "PREPARE", "WRAP", "CELEBRATE",
          "INVITE", "GUEST LIST", "HOST", "ATTEND", "ACCEPT", "REFUSE",
          "APOLOGIZE", "OFFER", "SUGGEST", "ORDER"
        ]
      }
    ],
    "7:8": [
      
      {
        id: "public-buildings-services",
        title: "Public Buildings & Shops ",
        words: [
          "CITY HALL", "FIRE STATION", "GOVERNORSHIP", "MUNICIPALITY",
          "POLICE STATION", "POST OFFICE", "HOSPITAL", "DENTIST","GREENGROCER", 
          "TOY SHOP", "SHOE SHOP", "COFFEE SHOP", "NEWSAGENT", "BOOKSHOP", "BAKERY", 
          "PHARMACY", "FLORIST", "GROCER", "BUTCHER", "MOVIE THEATER", "SHOPPING MALL", "AMUSEMENT PARK", "ART GALLERY",
          "LIBRARY", "ZOO", "CONCERT HALL", "AIRPORT"
        ]
      },
        ],
    "7:9": [
      {
        id: "environmental-problems",
        title: "Environmental Problems",
        words: [
          "POLLUTE", "DEFORESTATION", "WASTE", "DESTROY", "RUBBISH",
          "GARBAGE", "PESTICIDE", "CHEMICAL", "HARMFUL", "THREATEN"
        ]
      },
      {
        id: "green-solutions-actions",
        title: "Green Solutions & Actions",
        words: [
          "ECO-FRIENDLY", "EFFICIENT", "RENEWABLE", "SOLAR ENERGY", "WIND ENERGY",
          "RECYCLE", "REDUCE", "REUSE", "UNPLUG", "TAKE ACTION",
          "CAMPAIGN", "PROTECT", "SAVE", "PRECAUTION", "PREVENT"
        ]
      }
    ],
    "7:10": [
      {
        id: "space-objects-phenomena",
        title: "Space Objects & Phenomena",
        words: [
          "MOON", "RING", "PLANET", "STAR", "COMET", "SATELLITE", "METEOR SHOWER",
          "ASTEROID", "SOLAR SYSTEM", "EARTH", "UNIVERSE", "SPACE", "ALIEN", "DWARF",
          "LIFE FORM", "GRAVITY"
        ]
      },
      {
        id: "space-exploration",
        title: "Space Exploration",
        words: [
          "ORBIT", "SHUTTLE", "EXPLORE", "OBSERVE", "DISCOVER", "EXPERIMENT",
          "TELESCOPE", "MISSION", "SPACECRAFT", "LAND", "LAUNCH", "VOYAGE", "CREW", "RESCUE"
        ]
      }
    ],
    "8:1": [
      {
        id: "personality",
        title: "Personality",
        words: [
          "COOL", "LAID BACK", "ADVENTUROUS", "CARING",
          "GENEROUS", "HONEST", "POLITE", "DETERMINED", "TACTFUL", "RELAXED",
          "ARROGANT", "JEALOUS", "MEAN", "STUBBORN", "SNEAKY", "UNRELIABLE"
        ]
      },
      {
        id: "words-about-friendship",
        title: "Words about Friendship",
        words: [
          "BUDDY", "BEST FRIEND", "CLOSE FRIEND", "TRUE FRIEND", "FRIENDSHIP",
          "BACK UP", "GET ON WELL", "RELY ON", "COUNT ON", "KEEP SECRET",
          "SHARE", "INVITE", "ACCEPT", "REFUSE", "MAKE AN EXCUSE", "APOLOGIZE",
          "TELL TRUTH", "TELL LIES", "JOIN", "COME OVER", "ARGUE", "CELEBRATE",
          "DEPEND ON", "TRUST"
        ]
      }
    ],
    "8:2": [
      {
        id: "opinions-about-something",
        title: "Opinions about Something",
        words: [
          "CASUAL", "FASHIONABLE", "IMPRESSIVE", "UNBEARABLE", "TRENDY", "TERRIBLE",
          "RIDICULOUS", "SERIOUS", "TERRIFIC", "AWESOME", "WONDERFUL", "FASCINATING",
          "AMAZING", "STYLISH"
        ]
      },
      {
        id: "adverbs-of-frequency",
        title: "Adverbs of Frequency",
        words: [
          "NEVER", "ALWAYS", "OFTEN", "USUALLY", "SOMETIMES", "SELDOM",
          "RARELY", "HARDLY EVER", "ONCE", "TWICE"
        ]
      }
    ],
    "8:3": [
      {
        id: "cooking-methods",
        title: "Cooking Methods",
        words: ["BAKE", "FRY", "BOIL", "GRILL", "STEAM", "ROAST", "MASH", "HEAT"]
      },
      {
        id: "preparing-the-ingredients",
        title: "Preparing the Ingredients",
        words: [
          "MIX", "STIR", "PEEL", "CHOP", "SLICE", "DICE", "POUR", "ADD",
          "SPREAD", "MELT", "CUT", "CRACK", "BREAK", "SERVE", "SPRINKLE", "WRAP"
        ]
      },
      {
        id: "kitchen-equipment",
        title: "Kitchen Equipment",
        words: [
          "KNIFE", "TEASPOON", "TABLESPOON", "FORK", "PAN", "OVEN", "SAUCEPAN",
          "GRATER", "STRAINER", "BAKING TRAY", "CUP", "BOWL", "PLATE",
          "REFRIGERATOR", "FRIDGE", "FREEZER"
        ]
      },
      {
        id: "tastes-descriptions",
        title: "Tastes & Descriptions",
        words: [
          "BITTER", "SALTY", "SOUR", "SPICY", "SWEET", "TASTY",
          "GREASY", "OILY", "MILKY", "HEALTHY", "UNHEALTHY"
        ]
      },
      {
        id: "ingredients-food",
        title: "Ingredients & Food",
        words: [
          "FLOUR", "MEAT", "BAKING POWDER", "PEPPER", "CUCUMBER", "ONION",
          "RICE", "SEAWEED", "GINGER", "GARLIC", "PASTA", "VEGETABLE", "YEAST"
        ]
      },
      {
        id: "sequence-of-a-process",
        title: "Sequence of a Process",
        words: ["FIRST", "SECOND", "NEXT", "THEN", "AFTER THAT", "AFTER", "BEFORE", "FINALLY"]
      }
    ],
    "8:4": [
      {
        id: "ways-of-communication",
        title: "Ways of Communication",
        words: [
          "FACE TO FACE", "WRITE A LETTER", "CALL", "SMOKE SIGNAL", "TEXTING",
          "SEND MESSAGE", "TELEGRAM", "SOCIAL NETWORK", "MESSENGER BIRD",
          "SEND AN E-MAIL", "MEMO", "CELL PHONE", "MOBILE", "APPLICATION"
        ]
      },
      {
        id: "phone-expressions",
        title: "Phone Expressions",
        words: [
          "DIAL", "BUSY", "ENGAGED", "KEEP IN TOUCH", "GET IN TOUCH",
          "HANG ON", "HOLD ON", "HOLD THE LINE", "HANG UP", "PICK UP",
          "ANSWER", "REPLY", "REPEAT", "SPEAK LOUDER", "LEAVE MESSAGE",
          "BAD LINE", "OUT OF ORDER"
        ]
      }
    ],
    "8:5": [
      {
        id: "computer-hardware",
        title: "Computer Hardware",
        words: [
          "COMPUTER TOWER", "SCREEN", "SCANNER", "HEADPHONES", "KEYBOARD",
          "SPEAKERS", "WEBCAM", "PRINTER", "DEVICE", "DESKTOP"
        ]
      },
      {
        id: "words-about-internet",
        title: "Words about Internet",
        words: [
          "LOG ON", "LOG IN", "SIGN IN", "REGISTER", "SIGN UP", "BROWSE",
          "DOWNLOAD", "UPLOAD", "LOG OFF", "LOG OUT", "POST", "SHARE",
          "FOLLOW", "SUBSCRIBE", "COMMENT", "DEACTIVATE", "BROWSER",
          "CONNECTION", "SEARCH ENGINE", "LINK", "WEBSITE", "ATTACHMENT",
          "WIRELESS", "ACCOUNT", "PASSWORD", "PRIVACY", "SAFETY", "PUBLIC",
          "PRIVATE", "NICKNAME", "USER", "ONLINE", "OFFLINE", "SCREEN TIME",
          "ADDICTION"
        ]
      }
    ],
    "8:6": [
      {
        id: "adventure-sports-activities",
        title: "Adventure Sports & Activities",
        words: [
          "BUNGEE JUMPING", "CANOEING", "SKY DIVING", "PARAGLIDING", "RAFTING",
          "TREKKING", "HIKING", "CAVING", "HELI-SKIING", "HANG GLIDING",
          "KAYAKING", "MOTOR RACING", "ROCK CLIMBING", "SKATEBOARDING", "SCUBA DIVING"
        ]
      },
      {
        id: "opinions-about-something",
        title: "Opinions about Something",
        words: [
          "AMUSING", "EXCITING", "CHALLENGING", "DISAPPOINTING", "EMBARRASSING",
          "ENTERTAINING", "FASCINATING", "FRIGHTENING", "SCARY", "AMAZING",
          "MYSTERIOUS", "THRILLING", "INTERESTING", "BRAVE", "FEARLESS",
          "DIFFICULT", "HARD", "DANGEROUS"
        ]
      }
    ],
    "8:7": [
      {
        id: "famous-places-landmarks",
        title: "Famous Places & Landmarks",
        words: [
          "WALL", "TEMPLE", "MONUMENT", "TOMB", "SQUARE", "TOWER", "PALACE",
          "FOUNTAIN", "STATUE", "MUSEUM", "MOSQUE", "CASTLE", "BRIDGE",
          "CHURCH", "HISTORIC SITE", "LANDMARK"
        ]
      },
      {
        id: "nature-scenery",
        title: "Nature & Scenery",
        words: ["COAST", "BEACH", "FOREST", "MOUNTAIN", "ISLAND", "COUNTRYSIDE", "RURAL", "SEASIDE"]
      },
      {
        id: "travel-accommodation",
        title: "Travel & Accommodation",
        words: [
          "VACATION", "HOLIDAY", "JOURNEY", "TRIP", "ACCOMMODATION", "RESORT",
          "SIGHTSEEING", "ALL-INCLUSIVE", "DESTINATION", "BOOK A ROOM", "SUITCASE",
          "AIRPORT", "PLANE", "TICKET", "RESERVATION", "TRANSPORTATION", "TOUR GUIDE", "GUEST"
        ]
      }
    ],
    "8:8": [
      {
        id: "household-chores",
        title: "Household Chores",
        words: [
          "MAKE BED", "DUST SHELVES", "DUST FURNITURE", "DO IRONING", "WATER PLANTS",
          "FEED PET", "WASH DISHES", "VACUUM FLOOR", "DRY DISHES", "DO SHOPPING",
          "CLEAN WINDOWS", "WASH CLOTHES", "DO LAUNDRY", "COOK", "PREPARE MEAL",
          "FOLD CLOTHES", "TAKE OUT TRASH", "SWEEP FLOOR", "MOP THE FLOOR", "SET TABLE",
          "MOW LAWN", "TIDY UP ROOM", "WALK THE DOG", "FIX", "REPAIR", "PAY BILLS"
        ]
      },
          ],
    "5:1": [
      {
        id: "school-clubs",
        title: "School Clubs",
        words: [
          "DRAMA CLUB", "MATHS CLUB", "TECHNOLOGY CLUB", "ENVIRONMENT CLUB",
          "ART CLUB", "MUSIC CLUB", "CHESS CLUB", "SCIENCE CLUB",
          "FILM CLUB", "BALLET CLUB", "SPORTS CLUB", "FOLK DANCE CLUB"
        ]
      },
      {
        id: "places-at-school",
        title: "Places at School",
        words: [
          "SCIENCE LAB", "FIELD", "CONFERENCE HALL", "CANTEEN", "LIBRARY",
          "NOTICE BOARD", "ADMINISTRATION DEPARTMENT", "GATE", "FOUNTAIN"
        ]
      },
      {
        id: "people-at-school",
        title: "People at School",
        words: ["SECRETARY", "HEADMASTER", "COACH", "ASSISTANT TO THE HEADMASTER"]
      },
     
      {
        id: "countries",
        title: "Countries",
        words: [
          "UNITED STATES OF AMERICA", "UNITED KINGDOM", "CANADA", "AUSTRALIA",
          "ENGLAND", "SCOTLAND", "IRELAND", "WALES", "FRANCE", "ITALY",
          "SPAIN", "ARGENTINA", "BRAZIL", "CHINA", "JAPAN", "GERMANY",
          "GREECE", "MEXICO", "RUSSIA", "THAILAND", "SOUTH KOREA",
          "AZERBAIJAN", "UZBEKISTAN", "TURKMENISTAN", "CYPRUS",
          "KAZAKHSTAN", "KYRGYZSTAN"
        ]
      }
    ],
    "5:3": [
      {
        id: "body-parts",
        title: "Body Parts",
        words: [
          "HEAD", "HAIR", "FACE", "EYE", "NOSE", "TOOTH", "TEETH",
          "NECK", "ARM", "HAND", "FINGER", "BODY", "LEG", "FOOT"
        ]
      },
      {
        id: "physical-appearance",
        title: "Physical Appearance",
        words: [
          "TALL", "SHORT", "THIN", "THICK", "WAVY", "CURLY", "STRAIGHT",
          "ROUND", "OVAL", "HEIGHT", "MEDIUM HEIGHT"
        ]
      },
      {
        id: "clothing",
        title: "Clothing",
        words: [
          "TSHIRT", "SHIRT", "JEANS", "TROUSERS", "PANTS", "SKIRT", "DRESS",
          "COAT", "JACKET", "HOODIE", "JUMPER", "SWEATER",
          "BOOTS", "SHOES", "SLIPPERS", "SOCK",
          "CAP", "HAT", "SCARF", "HEADSCARF", "BELT", "GLOVES",
          "UMBRELLA", "RAINCOAT", "GLASSES", "SUNGLASSES", "TIE",
          "BAG", "HANDBAG", "BACKPACK",
          "COSTUME", "FANCY DRESS", "CASUAL CLOTHES", "OUTFIT", "CLOTHING",
          "RING", "EARRINGS", "NECKLACE", "WATCH", "BOW"
        ]
      },
      {
        id: "adverbs-of-frequency",
        title: "Adverbs of Frequency",
        words: ["ALWAYS", "USUALLY", "OFTEN", "SOMETIMES", "RARELY", "SELDOM", "NEVER", "ONCE", "TWICE"]
      },
      {
        id: "other-words",
        title: "Other Words",
        words: [
          "FASHION", "FASHIONABLE", "TRENDY", "STYLISH", "FASHION SHOW",
          "COMFORTABLE", "LOOSE", "ORDINARY", "FANCY", "DIFFERENT",
          "BRIGHT", "COOL", "RECYCLED", "CREATE", "TRY ON",
          "COTTON", "SILK", "WOOL", "FABRIC",
          "SPRING", "SUMMER", "AUTUMN", "WINTER", "RAINY",
          "MUSIC", "VIDEO GAME", "READ", "GO SHOPPING", "DRAW",
          "GO OUT", "TRAVEL", "WEAR", "MAGAZINE", "MAP", "COMPUTER",
          "ACCESSORIES", "SILVER"
        ]
      }
    ],
    "5:5": [
      {
        id: "places-in-a-town-city",
        title: "Places in a Town/City",
        words: [
          "SQUARE", "COAST", "CASTLE", "TOWER", "MOSQUE", "TOWN",
          "ANCIENT SITE", "FLAT", "SKYSCRAPER", "PLAYGROUND",
          "GYM", "STREET FAIR", "SPORTS CENTRE", "ART GALLERY",
          "MUSEUM", "SHOE SHOP", "CINEMA", "BOOK STORE"
        ]
      },
      {
        id: "rooms-of-a-house",
        title: "Rooms of a House",
        words: [
          "KITCHEN", "BATHROOM", "SITTING ROOM", "LIVING ROOM", "BEDROOM",
          "BALCONY", "DINING ROOM", "GARAGE", "TERRACE", "TOILET", "GARDEN"
        ]
      },
      {
        id: "furniture",
        title: "Furniture",
        words: [
          "SOFA", "PILLOW", "LAMP", "ARMCHAIR", "WARDROBE", "TABLE", "CHAIR",
          "CUPBOARD", "FRIDGE", "DISHWASHER"
        ]
      },
      {
        id: "adjectives",
        title: "Adjectives",
        words: [
          "FAMOUS", "CROWDED", "TRADITIONAL", "EXPENSIVE", "SOCIAL", "CLOSE",
          "MODERN", "PEACEFUL", "BRAND NEW", "BEST", "COMFORTABLE", "WIDE"
        ]
      },
      {
        id: "other-words",
        title: "Other Words",
        words: [
          "GUIDE", "HIRE", "RENT", "KNIFE", "FORK", "PLATE", "SPOON",
          "JUMP", "JOKE", "EXPERIENCE", "ATTEND AN EVENT", "EASILY",
          "TAKE A TOUR", "INFORMATION", "CARAVAN", "DOUBLE DECKER BUS",
          "NEIGHBORHOOD", "LOCATION", "ROOF", "LIFT", "CORNER", "FURNITURE",
          "LOCAL", "WOODEN", "STEEL", "INSIDE", "OUTSIDE", "BOTTOM"
        ]
      }
    ],
    "5:4": [
      {
        id: "outdoor-hobbies",
        title: "Outdoor Hobbies",
        words: [
          "CAMPING", "CYCLING", "FISHING", "PLAYING GOLF", "SWIMMING", "CLIMB",
          "HAVE PICNIC", "PLAY FOOTBALL", "TAKE PHOTOS", "BARBEQUE", "GARDEN"
        ]
      },
      {
        id: "indoor-hobbies",
        title: "Indoor Hobbies",
        words: [
          "DANCING", "COOKING", "PLAY PIANO", "PLAY BOARD GAMES", "PLAY GUITAR",
          "READ BOOKS", "SING SONGS", "LISTEN MUSIC", "PARTY"
        ]
      },
      {
        id: "other-words",
        title: "Other Words",
        words: [
          "ORGANISE", "BRUSH", "TAKE CARE", "REST", "TIDY UP", "RELAX", "JOIN",
          "FOCUS", "GET ON WELL", "JOB", "ROLE", "TASK", "MEMBER", "COUPLE",
          "HOBBY", "BREAKFAST", "AT THE MOMENT", "UNUSUAL", "BICYCLE", "CAMERA",
          "TENT", "SCOOTER", "NEWSPAPER", "DIARY", "PHOTOGRAPH", "MUSEUM",
          "FOREST", "FLOWER", "FESTIVAL", "WEEKEND", "HOLIDAY", "VISIT GRANDPARENTS"
        ]
      }
    ],
    "5:2": [
      {
        id: "school-subjects",
        title: "School Subjects",
        words: [
          "MATHS", "TURKISH", "SCIENCE", "SOCIAL STUDIES", "FOREIGN LANGUAGE",
          "ENGLISH", "RELIGION AND MORALS", "MUSIC", "PHYSICAL EDUCATION",
          "INFORMATION TECHNOLOGY", "DRAMA", "ARTS"
        ]
      },
      {
        id: "time-expressions",
        title: "Time Expressions",
        words: [
          "DAY", "WEEK", "MONTH", "YEAR", "WEEKDAY", "WEEKEND",
          "MORNING", "AFTERNOON", "NOON", "EVENING", "NIGHT", "BREAKTIME",
          "MINUTE", "O CLOCK", "HALF PAST","QUARTER PAST"]
      },
      {
        id: "days-of-the-week",
        title: "Days of the Week",
        words: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
      },
      {
        id: "classroom-objects",
        title: "Classroom Objects",
        words: [
          "SMARTBOARD", "SEAT", "DESK", "BOOKCASE", "BOOKSHELF", "RUBBER", "ERASER",
          "DICTIONARY", "BOARD MARKER", "PENCIL", "PENCIL CASE", "SHARPENER", "SHEET",
          "NOTEBOOK", "BOOK", "CRAYON", "GLUE", "RULER", "SCHOOL BAG", "SCISSORS", "TRASH BIN"
        ]
      },

       ],
    "5:6": [
      {
        id: "food-and-drinks-beverages",
        title: "Food and Drinks (Beverages)",
        words: [
          "BEANS", "JAM", "SUGAR", "BUTTER", "SALT", "PASTA", "FLOUR", "GARLIC", "MEAT",
          "CROISSANT", "MUSHROOM", "PANCAKE", "PEPPER", "BEEF", "CANDY", "DAIRY",
          "BISCUIT", "COOKIE", "OIL", "LEMON", "SPICES", "TUNA", "TART", "PIE",
          "HOME MADE BREAD", "SWEETS", "SAUCE", "BAKING POWDER", "CINNAMON", "CORN",
          "DOUGH", "LETTUCE", "NUT", "SALAD", "FRUIT JUICE", "SOUP", "DESSERT", "SODA WATER"
        ]
      },
      {
        id: "other-words",
        title: "Other Words",
        words: [
          "DRINKS", "BEVERAGES", "MEAL", "MAIN DISH", "STARTER", "APETIZER",
          "HEAT", "GRILLED", "STIR", "COOK", "BOIL", "SLICE", "CUT", "MASH",
          "WASH", "CLEAN", "DRY", "TASTE", "PREPARE", "CONTAIN",
          "TABLESPOON", "TEASPOON", "BOWL",
          "RECIPE", "RECOMMEND", "CUISINE", "CUSTOMER", "INGREDIENT", "WAITER",
          "TIP", "CHEF", "ORDER", "SERVICE", "SERVE", "BOOK A ROOM", "PAY IN CASH",
          "RESERVE", "BOOK A TABLE",
          "DELICIOUS", "TASTY", "FRESH", "HEALTHY", "LIGHT", "FATTY", "SPECIAL",
          "QUALITY", "EMPTY",
          "A BIT", "TOP", "NEED", "QUICKLY", "PUT ON WEIGHT", "LOSE WEIGHT",
          "AMOUNT", "SMELL"
        ]
      }
    ],
    "5:7": [
      {
        id: "species",
        title: "Species",
        words: ["INSECTS", "REPTILES", "BIRDS", "MAMMALS"]
      },
      {
        id: "animals-and-animal-groups",
        title: "Animals",
        words: [
          "MONKEY", "GIRAFFE", "ELEPHANT", "LION", "CROCODILE", "BEAR", "WOLF",
          "PARROT", "SNAKE", "WHALE", "SHARK", "SEAL", "BEE", "CHEETAH",
          "LEOPARD", "GORILLA", "ZEBRA", "TIGER", "EAGLE", "PENGUIN", "SEAGULL"
        ]
      },
      {
        id: "animal-body-parts",
        title: "Animal Body Parts",
        words: ["TAIL", "TUSK", "PAW", "WING", "FEATHER", "SHARP TEETH", "FLIPPER"]
      },
      {
        id: "adjectives-and-descriptions",
        title: "Adjectives & Descriptions",
        words: ["QUIET", "SCARY", "DANGEROUS", "WILD", "HUGE", "ENORMOUS", "FURRY", "STRONG", "FAST", "SLOW", "WEAK"]
      },
      {
        id: "habitats-and-places",
        title: "Habitats",
        words: ["OCEAN", "SKY", "HABITAT", "NATIONAL PARK", "FOREST", "JUNGLE", "SAVANNA", "RIVER", "MOUNTAIN", "FARM", "FIELD", "GRASS"]
      },
      {
        id: "other-words",
        title: "Other Words",
        words: ["ABILITY", "ATTACK", "HUNT", "MOVE", "RUN", "SURVIVE", "TALK", "FLY", "CLIMB"]
      }
    ],
    "5:8": [
      {
        id: "places",
        title: "Places",
        words: ["BEACH", "BRIDGE", "CONTINENT", "DESERT", "VALLEY", "LAKE", "SAND DUNE", "CORAL REEF", "CANYON", "ISLAND", "ZOO", "AMUSEMENT PARK", "HILL"]
      },
      {
        id: "travel-and-tourism",
        title: "Travel & Tourism",
        words: ["VACATION", "JOURNEY", "TRIP", "SIGHTSEEING", "DESTINATION", "SEASIDE", "TOURISM", "RIDE A CAMEL", "SCUBA DIVING", "SNORKELLING", "HALF TERM", "PACK", "EXPLORE", "VISIT", "INVITE"]
      },
      {
        id: "seasons-and-weather",
        title: "Seasons & Weather",
        words: ["CLIMATE", "SEASON", "WINTER", "SUMMER", "AUTUMN", "FALL", "SPRING", "TEMPERATURE"]
      },
      {
        id: "other-words",
        title: "Other Words",
        words: ["AMAZING", "FAMOUS", "MAGICAL", "FUN", "JOLLY", "GIANT", "ROCK", "RISE", "VIEW", "SANDCASTLE", "SEASHELL", "INVOLVE", "MAKE A WISH", "OPPORTUNITY"]
      }
    ]
  };

  window.VocabCategoryAdapter = {
    get(grade, unit) {
      return CATEGORIES[`${grade}:${unit}`] || [];
    }
  };
})();
