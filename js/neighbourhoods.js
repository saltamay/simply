const neighbourhoods = [
  {
    name: "Annex",
    id: 95,
    zipcode: "M5R",
    walkScore: 94,
    facts: "Next to University of Toronto's St. George Campus, The Annex is a lively area that draws students to its casual eateries, indie bookshops, bars and cafes on Bloor Street West. It also has the iconic Lee's Palace rock concert venue, the quirky Hot Docs Ted Rogers Cinema and the Royal Ontario Museum art and natural history museum, one of the largest in North America. Leafy residential streets feature stately homes.",
    isConvenient: true
  },
  {
    name: "University",
    id: 79,
    zipcode: "M5S",
    walkScore: 97,
    facts: "This sprawling university campus is mostly wedged between Bloor, College, University and Spadina.",
    isConvenient: true
  },
  {
    name: "North Riverdale",
    id: 68,
    zipcode: "M4K",
    walkScore: 90,
    facts: "North Riverdale is one of the city’s most historic and desirable neighbourhoods. Home to extremely popular Greektown, where crowds gather every year for Taste of the Danforth, as well as East Toronto Chinatown, North Riverdale also has several beautiful green spaces including Riverdale Park East and Withrow Park. A popular neighbourhood for those with young children and convenient for those working downtown, North Riverdale has a high concentration off high- rise apartment dwelling as well as semi - detached homes. The neighbourhood is severed extremely well by the Bloor - Danforth subway line, from Broadview to Pape subway stations.",
    isConvenient: true
  },
  {
    name: "South Riverdale",
    id: 70,
    zipcode: "M4M",
    walkScore: 91,
    facts: "South Riverdale is one of the most desirable and historical neighbourhoods east of the Don River. A few of the notable local landmarks include The Leslie Street Spit; Pinewood Studios; the Ashbridges Bay Wastewater Plant (Canada’s largest sewage treatment facility); the Portlands Energy Centre; Cherry Beach; Greenwood Park; and the former Hearn Generating Station. Today, South Riverdale is a diverse neighbourhood home to several interesting pockets, including The Port Lands, The Studio District, Riverside, East Toronto Chinatown, the Gerrard India Bazaar and Leslieville.",
    isConvenient: true
  },
  {
    name: "Cabbagetown-South St.James Town",
    id: 71,
    zipcode: "M4X",
    walkScore: 91,
    facts: "The downtown neighbourhood of Cabbagetown-South St. James Town includes the venerable Cabbagetown community, largely dominated by Victorian homes, and a portion of the high rise-heavy St. James Town community. Transit-wise, commuters can take the subway to Castle Frank station, a streetcar along Carlton-Gerrard or buses along Jarvis, Parliament and Wellesley streets.",
    isConvenient: true
  },
  {
    name: "Regent Park",
    id: 72,
    zipcode: "M4X",
    walkScore: 88,
    facts: "Regent Park residents come from a wide variety of cultural backgrounds including many new Canadians from Africa, Asia, and Latin America. There are more than sixty different first languages spoken here making Regent Park one of Toronto's most culturally diverse neighbourhoods.",
    isConvenient: true
  },
  {
    name: "Moss Park",
    id: 73,
    zipcode: "M5A",
    walkScore: 95,
    facts: "Moss Park is an area of downtown Toronto in transition. Home to a scattering of small business, it's perhaps better known for its Salvation Army-run men's shelter and armoury that has at times serves as a reprieve for the homeless.",
    isConvenient: true
  },
  {
    name: "Waterfront Communities-The Island",
    id: 77,
    zipcode: "M5A",
    walkScore: 92,
    facts: "The Waterfront Communities – the Island neighbourhood occupies a swath of the far downtown core that abuts – and includes – a portion of Lake Ontario. The area has seen a condo boom in recent years, adding density to what was once a largely industrial area. That, combined with an ongoing revitalization of Toronto’s waterfront, is turning it into more of a place to be. Attractions in the area include the CN Tower, Toronto International Film Festival, Toronto Island Park and beaches on the park, while sports fans can take in Raptors and Leafs games at the Air Canada Centre and Blue Jays games at the Rogers Centre. The neighbourhood is also home to the Distillery District, the Fashion District, St.Lawrence Market, the West Don Lands and Billy Bishop Airport. Transit serving the area includes the subway(Union and St.Andrew stations), streetcars along Queen’s Quay, King, Queen, Bathurst and Spadina, and ferries carrying passengers to and from the island.",
    isConvenient: true
  },
  {
    name: "North St.James Town",
    id: 74,
    zipcode: "M4Y",
    walkScore: 93,
    facts: "North St. James Town is a downtown Toronto community dominated by high-rises, though there are some single-family dwellings as well. Given its dense nature, there are few green spaces of any magnitude in the area, with residents often having to travel just north or east of the area to enjoy large swaths of open space. Sherbourne subway station and buses along Wellesley, Jarvis, Sherbourne and Parliament streets provide public transit options.",
    isConvenient: true
  },
  {
    name: "Church-Yonge Corridor",
    id: 75,
    zipcode: "M5B",
    walkScore: 98,
    facts: "The neighbourhood includes the Church-Wellesley Village, which has long been associated with the city’s LGBT community and which hosts Pride Week events – including the Pride Parade – each summer. It is well-served by transit, with the Yonge subway line running along its eastern edge and several bus and streetcar lines serving the area. Also known as 'The Village,' this enclave for Toronto's gay community has bustling cafes, eateries and bars. It's known for its week-long, offbeat Halloween celebrations and buzzy club scene. Every June, the neighbourhood celebrates Toronto Pride Month with concerts, parties and parades that draw visitors from around the world. Tranquil Barbara Hall Park features the Toronto AIDS Memorial.",
    isConvenient: true
  },
  {
    name: "Bay Street Corridor",
    id: 76,
    zipcode: "M5G",
    walkScore: 99,
    facts: "The Bay Street Corridor neighbourhood takes up a north-south swath in downtown Toronto, stretching between Bloor and Front streets to the north and south, Queen’s Park Crescent/University Avenue/Simcoe Street to the west and Yonge Street to the east. The neighbourhood includes the Royal Ontario Museum, Queen’s Park, the Discovery District – home to hospitals and research facilities, the Financial District, the Eaton Centre and City Hall/ Nathan Phillips Square. Much of the stretch of Yonge Street consists of retail stores and eateries. Queen’s Park provides most of the green space in this dense, busy downtown neighbourhood, which contains relatively few residential areas, most of which are apartments and condos. It is well - served by transit, with 13 subway stops – the entire “U” at the bottom of the Yonge - University - Spadina line – around its edges, and streetcars along King, Queen, Dundas and College streets and bus service down Bay.",
    isConvenient: true
  },
  {
    name: "Niagara",
    id: 82,
    zipcode: "M5T",
    walkScore: 84,
    facts: "In recent years, it has seen an explosion of new condominium loft and row house development. The area is located close to the Fashion and Entertainment districts. The area is also part of the Trinity—Spadina riding which covers a much larger section just west of the downtown core.",
    isConvenient: true
  },

  {
    name: "South Parkdale",
    id: 87,
    zipcode: "M6R",
    walkScore: 79,
    facts: "High Park is mainly residential, containing many semi-detached homes that were built in the early 20th century. At its centre is the neighbourhood’s namesake, the 161 hectare park that is a mix of recreation and sports fields and natural green space. There are cultural and educational facilities, gardens, playgrounds and The High Park Zoo. North of High Park, the neighbourhood has several high-rise apartment buildings, built after the construction of the Bloor-Danforth subway.",
    isConvenient: false
  },
  {
    name: "High Park North",
    id: 88,
    zipcode: "M6P",
    walkScore: 84,
    facts: "High Park North, or often simply High Park, after the park, is bounded on the south by Bloor Street, on the west by Runnymede Road, on the north by Annette Street, Quebec Avenue and Humberside Avenue, and on the east by the CNR/CPR railway tracks. It is located in the Parkdale-High Park provincial and federal electoral districts. The area east of Keele Street is also known informally as the “West Bend” neighbourhood.",
    isConvenient: false
  },
  {
    name: "Roncesvalles",
    id: 86,
    zipcode: "M6R",
    walkScore: 91,
    facts: "Roncesvalles is known for its European ambience and small-town feel.This neighbourhood is popular with young families who appreciate the convenience of the location just west of downtown.The close proximity to High Park, Toronto waterfront bicycle and walking trails, easy access to public transit, and the Roncesvalles shops and restaurants are also popular drawing cards.",
    isConvenient: true
  },
  {
    name: "Dovercourt-Wallace Emerson-Junction",
    id: 93,
    zipcode: "M6H",
    walkScore: 88,
    facts: "Dovercourt-Wallace Emerson Junction got its start in the late 1800s as an industrial area close to the railways and factories. It was originally home to many immigrants and later became popular with Portuguese, Italians, Spanish, Asians and Ethiopians. The neighbourhood has a mixed income and multi-cultural combination found amongst its residents. There is an array of cafes, eateries and established restaurants, vintage shops, galleries and fruit markets.The local residents and businesses participate in an annual street festival called ‘Big on Bloor’ featuring art, music and international food.",
    isConvenient: false
  },
  {
    name: "Dufferin Grove",
    id: 83,
    zipcode: "M6H",
    walkScore: 90,
    facts: "Dufferin Grove is a popular family oriented neighbourhood located in downtown Toronto. This neighbourhood has excellent amenities including a popular community park, a shopping centre, excellent schools and and convenient access to public transit.",
    isConvenient: true
  },
  {
    name: "Little Portugal",
    id: 84,
    zipcode: "M6J",
    walkScore: 88,
    facts: "One of the most visible, vibrant ethnic communities in Toronto today, Little Portugal is a neighbourhood in transition. It has witnessed rapid gentrification in recent years, which underscores its dynamic personality and property opportunity.",
    isConvenient: false
  },
  {
    name: "Palmerston-Little Italy",
    id: 80,
    zipcode: "M6G",
    walkScore: 95,
    facts: "The College Street portion of the neighbourhood includes a large portion of Toronto’s Little Italy, where the city’s Italian community settled. It features a number of Italian bars and restaurants. Bloor Street, east of Grace Street, meanwhile, is home to Toronto’s Koreatown, while the remainder of the community boasts an eclectic mix. The neighbourhood is largely low- rise and residential in nature, and schools in the area include the Bickford Centre and Harbord Collegiate.",
    isConvenient: true
  },
  {
    name: "Trinity-Bellwoods",
    id: 81,
    zipcode: "M6J",
    walkScore: 94,
    facts: "The focal point of this inner-city neighbourhood is the very picturesque Trinity-Bellwoods Park, which spans the entire length of the neighbourhood. This park features a paved walking path that is highlighted by distinguished cast iron lamp poles and a lush greenery. In addition to Trinity-Bellwoods Park, this neighbourhood also features affordable Victorian houses, excellent shopping districts, and convenient access to major transportation routes for motorists and pedestrians.",
    isConvenient: true
  },

  // Malik

  {
    name: "Yorkdale-Glen Park",
    id:31,
    zipcode: "M6B",
    walkScore: 84,
    facts: "This neighbourhood is also home to Lawrence Heights, a community undergoing revitalization, as well as several popular amenities including the Yorkdale and Lawrence Square shopping centres Local parks include Caledonia Park, Wenderly Park, Glen Long Park, Joyce Park, Ranee Park and Yorkdale Park. Dante Alighieri Academy is also situated in Yorkdale-Glen Park as well as Beth Torah Congregation",
    isConvenient: false
  },
  
  {
    name: "Englemount-Lawrence",
    id:32,
    zipcode: "M6B",
    walkScore: 62,
    facts: "The Englemount-Lawrence neighbourhood, with a population of 22,100, according to the 2011 Statistics Canada data, is bounded by Hwy. 401 to the north, Allen Road to the west, Briar Hill Avenue to the south, and Bathurst Street to the east",
    isConvenient: false
  },



  {
    name: "Yonge-Eglinton",
    id:100,
    zipcode: "M4P",
    walkScore: 98,
    facts: "Yonge and Eglinton boasts family-centred neighbourhoods alongside a growing condo culture. Most people have to go kilometres to a movies theatre, but Yonge-and-Eg residents can walk to two multiplexes. Comedy lovers can hit Absolute Comedy at Yuk Yuk’s former location, and the retail and dining options have multiplied",
    isConvenient: true
  },

  {
    name: "Forest Hill North",
    id:102,
    zipcode: "M6C",
    walkScore: 89,
    facts: "Considered one of the city’s most prestigious areas, Forest Hill is a stunning community characterized by winding roads, sloping hills, and various little parks that give the neighbourhood its distinctive charm.",
    isConvenient: false
  },

  {
    name: "Oakwood-Vaughan", // oakwood village & oakwood- vaughan is same thing
    id:107,
    zipcode: "M6C",
    walkScore: 40,
    facts: "Oakwood-Vaughan encompasses a large area with schools catering to the Catholic, French Catholic and non-denominational communities. The Oakwood Village Library and Arts Centre offers a place for local artists to showcase community-based works. The Fairbank Memorial Park is Oakwood-Vaughan’s largest with basketball and bocce courts and an outdoor pool.",
    isConvenient: false
  },

  {
    name: "Rosedale-Moore Park",
    id:98,
    zipcode: "M4T",
    walkScore: 90,
    facts: "The toney neighbourhood of Rosedale-Moore Park is a quiet residential area located between the northern boundary of Moore Avenue, the southern boundary of Bloor Street, the western boundary of Yonge Street and the Moore Park Ravine and Bayview Avenue along its eastern edge. It has plenty of greenery, with parts of the Moore Park Ravine, Chorley Park, the Beltline Trail, David A. Balfour Park, Beaumont Park and other public green spaces.",
    isConvenient: true
  },

  {
    name: "Mount Pleasant West",
    id:104,
    zipcode: "M4S",
    walkScore: 98,
    facts: "The neighbourhood of Mount Pleasant West is bounded by Yonge Street to the west, Mount Pleasant Road to the East, Keewatin Avenue to the north and the Kay Gardner Beltline to the south. Largely residential in nature, it includes several highrise apartment and condo complexes, mostly located north of Eglinton Avenue, along with a large number of single-family residences to the south.",
    isConvenient: true
  },

  {
    name: "Forest Hill South",
    id:104,
    zipcode: "M5P",
    walkScore: 87,
    facts: "Forest Hill South is a toney neighbourhood denoted largely by large single-family homes. Bounded mainly by Eglinton Avenue to the north, Lonsdale Road to the south, Bathurst Street to the west and Elmsthorpe Avenue, Oriole Parkway and Avenue Road to the east, the area features a portion of the Kay Gardner Beltline Trail to its northeast and a portion of Cedarvale Park to its southwest.",
    isConvenient: false
  },
  
  {
    name: "Yonge-St.Clair",
    id:93,
    zipcode: "M4V",
    walkScore: 93,
    facts: "Yonge-St. Clair is a largely quiet, residential neighbourhood just south of Toronto’s official midtown. Bounded roughly by the CP rail tracks to the south, the Kay Gardner Beltline Trail to the north, Avenue Road and Oriole Parkway to the west and Yonge Street to the east, the area is dominated by a mix of single family and multi-unit dwellings. ",
    isConvenient: true
  },

  {
    name: "High Park-Swansea",
    id:87,
    zipcode: "M6P",
    walkScore: 88,
    facts: "High Park—Swansea was a provincial riding in the west-end of the city of Toronto, Ontario, Canada. It was represented in the Legislative Assembly of Ontario from 1975 to 1999. It was created during the 1975 riding redistribution, taking much of its territory from the defunct High Park riding",
    isConvenient: false
  },

  {
    name: "Playter Estates-Danforth",
    id:67,
    zipcode: "M4M",
    walkScore: 96,
    facts: "It is an area in the east end of Toronto, Ontario, Canada bounded by Jackman Avenue to the east, the Don River Valley to the west, Danforth Avenue in the south, and Fulton Avenue in the north. ",
    isConvenient: true
  },

  {
    name: "Broadview North",
    id:57,
    zipcode: "M4K",
    walkScore: 91,
    facts: "Broadview North is an urban East York neighbourhood, full of younger, generally well-educated city singles",
    isConvenient: true
  },


  {
    name: "Kingsway South",
    id:15,
    zipcode: "M8X",
    walkScore: 67,
    facts: "is an affluent residential neighbourhood in Toronto, Ontario, Canada. It is located in the former City of Etobicoke, an area that became the west end of Toronto upon amalgamation in 1998. It is bounded by Bloor Street to the south, Dundas Street to the north, the Mimico Creek to the west and the Humber River to the east.",
    isConvenient: false
  },

  
  {
    name: "Stonegate-Queensway",
    id:16,
    zipcode: "M8X",
    walkScore: 62,
    facts: "Stonegate-Queensway is an amalgam of a couple smaller neighbourhoods: Queensway (to the south) and Sunnylea/Stonegate, which sits atop the former. The neighbourhood is bounded by Bloor Street on the north, the Gardiner Expressway on the south, and is bookended by Islington and the Humber River. Although Stonegate-Queensway has outgrown its market garden community roots, it maintains its country charm thanks to its lush green spaces, many of which are untamed. This area is a mix of industrial, residential and retail strips, and so there’s really something for everyone from any walk of life. Shopaholics might prefer perusing the consignment goods at a Kingsway shop, while bargain hunters will opt for Costco.",
    isConvenient: false
  },
  
  {
    name: "Junction Area",
    id:90,
    zipcode: "M6P",
    walkScore: 83,
    facts: "It's called the Junction because it's, well, a junction, originally of two First Nations trails and then of the Canadian Pacific Railway's Ontario and Quebec lines with the Toronto, Grey and Bruce and Credit Valley lines. ",
    isConvenient: false
  },

  {
    name: "Wychwood",
    id:94,
    zipcode: "M6G",
    walkScore: 88,
    facts: "Toronto’s Wychwood neighbourhood is a largely quiet neighbourhood with a mix of low and mid-rise residential dwellings. It is bounded roughly by Oakwood Avenue and Dovercourt Road to the west, Bathurst Street to the east, just north of St. Clair Avenue west to the north and the CN rail tracks to the south.",
    isConvenient: false
  },
  
  {
    name: "Corsa Italia-Davenport",
    id:92,
    zipcode: "M6E",
    walkScore:97,
    facts: "Corso Italia is a neighbourhood situated on St. Clair Avenue West, between Westmount Avenue (just east of Dufferin Street) and Lansdowne Avenue. It is contained within the larger city-recognized neighbourhood of Corso Italia-Davenport. The neighbourhood includes numerous cafés, clothing shops, shoe stores, restaurants, food markets, as well as several gelaterias and bakeries.",
    isConvenient: true
  },
  
  {
    name: "Weston-Pellam Park",
    id:91,
    zipcode: "M6N",
    walkScore: 82,
    facts: "Home ownership in Weston - Pellam Park is high, with a split of 61% owners to 39% renters among those living in the area. Activities common to the area include reading, gardening, swimming.",
    isConvenient: false
  }

  {
    name: "Lawrence Park North",
    id:105,
    zipcode: "M4N",
    walkScore: 92,
    facts: "Lawrence Park North is a largely quiet, residential neighbourhood in central Toronto. Its boundaries do not follow traditional roadways, with the western boundary roughly midway between Avenue and Elm roads, its northern boundaries roughly along Roe and McNairn avenues and Glen Echo Road, its eastern boundary midway between Yonge Street and Bayview Avenue and its southern boundary along Lawrence Avenue.",
    isConvenient: true
  }  

]