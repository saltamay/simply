const subwayData = [
    {"name":"Downsview","latLong":{"latitude":"-79.462342744","longitude":"43.750053813"}},
    {"name":"Wilson","latLong":{"latitude":"-79.449928713","longitude":"43.734580620"}},
    {"name":"Yorkdale","latLong":{"latitude":"-79.447509462","longitude":"43.724813020"}},
    {"name":"Lawrence West","latLong":{"latitude":"-79.444029153","longitude":"43.716381433"}},
    {"name":"Glencairn","latLong":{"latitude":"-79.441528421","longitude":"43.709819963"}},
    {"name":"Eglinton West","latLong":{"latitude":"-79.435989533","longitude":"43.698996649"}},
    {"name":"St Clair West","latLong":{"latitude":"-79.414535879","longitude":"43.684352034"}},
    {"name":"Dupont","latLong":{"latitude":"-79.407256672","longitude":"43.674909875"}},
    {"name":"Spadina","latLong":{"latitude":"-79.403751969","longitude":"43.667714585"}},
    {"name":"St George","latLong":{"latitude":"-79.398672286","longitude":"43.668318768"}},
    {"name":"Museum","latLong":{"latitude":"-79.393502230","longitude":"43.667177071"}},
    {"name":"Queen's Park","latLong":{"latitude":"-79.390349040","longitude":"43.659704948"}},
    {"name":"St Patrick","latLong":{"latitude":"-79.388295977","longitude":"43.654611638"}},
    {"name":"Osgoode","latLong":{"latitude":"-79.386617316","longitude":"43.650874106"}},
    {"name":"St Andrew","latLong":{"latitude":"-79.385130483","longitude":"43.647645649"}},
    {"name":"Union","latLong":{"latitude":"-79.380462258","longitude":"43.645722666"}},
    {"name":"King","latLong":{"latitude":"-79.378045133","longitude":"43.649120879"}},
    {"name":"Queen","latLong":{"latitude":"-79.379326503","longitude":"43.652346514"}},
    {"name":"Dundas","latLong":{"latitude":"-79.380729654","longitude":"43.656136534"}},
    {"name":"College","latLong":{"latitude":"-79.382782166","longitude":"43.661229971"}},
    {"name":"Wellesley","latLong":{"latitude":"-79.383770788","longitude":"43.665182941"}},
    {"name":"Bloor","latLong":{"latitude":"-79.385950091","longitude":"43.670671998"}},
    {"name":"Rosedale","latLong":{"latitude":"-79.388725888","longitude":"43.676900952"}},
    {"name":"Summerhill","latLong":{"latitude":"-79.391178237","longitude":"43.682449998"}},
    {"name":"St Clair","latLong":{"latitude":"-79.393284347","longitude":"43.688162978"}},
    {"name":"Davisville","latLong":{"latitude":"-79.397331412","longitude":"43.698123394"}},
    {"name":"Eglinton","latLong":{"latitude":"-79.399158462","longitude":"43.706645843"}},
    {"name":"Lawrence","latLong":{"latitude":"-79.401877582","longitude":"43.725421915"}},
    {"name":"York Mills","latLong":{"latitude":"-79.405330677","longitude":"43.744995922"}},
    {"name":"Sheppard","latLong":{"latitude":"-79.410987148","longitude":"43.761674341"}}
    ,{"name":"North York Centre","latLong":{"latitude":"-79.412911598","longitude":"43.769241254"}},
    {"name":"Finch","latLong":{"latitude":"-79.415672606","longitude":"43.781490124"}}
    ,
    {
      name: 'Kennedy',
      latLong: { latitude: 43.73219165, longitude: -79.26569632 }
    },
    {
      name: 'Lawrence East',
      latLong: { latitude: 43.7502148, longitude: -79.27090721 }
    },
    {
      name: 'Ellesmere',
      latLong: { latitude: 43.76722615, longitude: -79.27731467 }
    },
    {
      name: 'Midland',
      latLong: { latitude: 43.77016839, longitude: -79.27248232 }
    },
    {
      name: 'Scarborough Centre',
      latLong: { latitude: 43.77384411, longitude: -79.25786316 }
    },
    {
      name: 'McCowan',
      latLong: { latitude: 43.77551255, longitude: -79.25154339 }
    }
    ,
    {
      name: 'Sheppard-Yonge',
      latLong: { latitude: 43.76161811, longitude: -79.41098864 }
    },
    {
      name: 'Bayview',
      latLong: { latitude: 43.76725222, longitude: -79.38739865 }
    },
    {
      name: 'Bessarion',
      latLong: { latitude: 43.76912679, longitude: -79.37672419 }
    },
    {
      name: 'Leslie',
      latLong: { latitude: 43.77113245, longitude: -79.36741635 }
    },
    {
      name: 'Don Mills',
      latLong: { latitude: 43.77556464, longitude: -79.34693642 }
    } ,
        {
          name: 'Kipling',
          latLong: {
            latitude: 43.63802031,
            longitude: -79.53638812
          }
        },
        {
          name: 'Islington',
          latLong: {
            latitude: 43.64595008,
            longitude: -79.52394798
          }
        },
        {
          name: 'Royal York',
          latLong: {
            latitude: 43.64880444,
            longitude: -79.51154051
          }
        },
        {
          name: 'Old Mill',
          latLong: {
            latitude: 43.65057649,
            longitude: -79.49522499
          }
        },
        {
          name: 'Jane',
          latLong: {
            latitude: 43.65029127,
            longitude: -79.48477178
          }
        },
        {
          name: 'Runnymede',
          latLong: {
            latitude: 43.65216695,
            longitude: -79.47649916
          }
        },
        {
          name: 'High Park',
          latLong: {
            latitude: 43.65459423,
            longitude: -79.46552962
          }
        },
        {
          name: 'Keele',
          latLong: {
            latitude: 43.65570079,
            longitude: -79.46031548
          }
        },
        {
          name: 'Dundas West',
          latLong: {
            latitude: 43.65714206,
            longitude: -79.45267843
          }
        },
        {
          name: 'Lansdowne',
          latLong: {
            latitude: 43.65914292,
            longitude: -79.44296991
          }
        },
        {
          name: 'Dufferin',
          latLong: { latitude: 43.6606651, longitude: -79.4359558 }
        },
        {
          name: 'Ossington',
          latLong: { latitude: 43.66266333, longitude: -79.42615682 }
        },
        {
          name: 'Christie',
          latLong: { latitude: 43.66425178, longitude: -79.41869303 }
        },
        {
          name: 'Bathurst',
          latLong: { latitude: 43.66599176, longitude: -79.41158255 }
        },
        {
          name: 'Spadina',
          latLong: { latitude: 43.66764776, longitude: -79.4037584 }
        },
        {
          name: 'St George',
          latLong: { latitude: 43.66831164, longitude: -79.39864323 }
        },
        {
          name: 'Bay',
          latLong: { latitude: 43.67040029, longitude: -79.39027029 }
        },
        {
          name: 'Yonge',
          latLong: { latitude: 43.67070606, longitude: -79.38587981 }
        },
        {
          name: 'Sherbourne',
          latLong: { latitude: 43.67234508, longitude: -79.37698161 }
        },
        {
          name: 'Castle Frank',
          latLong: { latitude: 43.67414063, longitude: -79.36879416 }
        },
        {
          name: 'Broadview',
          latLong: { latitude: 43.67686172, longitude: -79.35852385 }
        },
        {
          name: 'Chester',
          latLong: { latitude: 43.67837735, longitude: -79.35141628 }
        },
        {
          name: 'Pape',
          latLong: { latitude: 43.67968493, longitude: -79.34520853 }
        },
        {
          name: 'Donlands',
          latLong: { latitude: 43.68105008, longitude: -79.33792557 }
        },
        {
          name: 'Greenwood',
          latLong: { latitude: 43.68270361, longitude: -79.33027644 }
        },
        {
          name: 'Coxwell',
          latLong: { latitude: 43.68414917, longitude: -79.32352724 }
        },
        {
          name: 'Woodbine',
          latLong: { latitude: 43.6863529, longitude: -79.31335711 }
        },
        {
          name: 'Main Street',
          latLong: { latitude: 43.68891661, longitude: -79.30272876 }
        },
        {
          name: 'Victoria Park',
          latLong: { latitude: 43.69432082, longitude: -79.29031894 }
        },
        {
          name: 'Warden',
          latLong: { latitude: 43.71224201, longitude: -79.27898037 }
        },
        {
          name: 'Kennedy',
          latLong: { latitude: 43.73211815, longitude: -79.26569845 }
        }
      ]
      
      