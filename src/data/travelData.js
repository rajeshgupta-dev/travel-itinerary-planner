export const travelData = {
  countries: [
    {
      id: 1,
      name: "India",
      flag: "https://flagcdn.com/w320/in.png",
      description: "Land of diverse cultures and ancient heritage",
      categories: [
        {
          name: "Temples",
          icon: "⛪",
          places: [
            {
              id: 101,
              name: "Golden Temple",
              location: "Amritsar",
              description:
                "The holiest Gurdwara of Sikhism, known for its stunning golden architecture and community kitchen.",
              image:
                "https://th.bing.com/th/id/R.09f56f00b67c6aff314518f39a8e20db?rik=1x2lcvr2WGZoZg&riu=http%3a%2f%2ffoundtheworld.com%2fwp-content%2fuploads%2f2015%2f12%2fGolden-Temple-3-1.jpg&ehk=ZZEvzPA62C5%2bmWEpqK1hGJiAE6pQDU9wRbe3QjY3GXw%3d&risl=&pid=ImgRaw&r=0",
              bestTimeToVisit: "October to March",
              lat: 31.6200,
              lng: 74.8765,
              transportation: {
                fromDelhi: [
                  {
                    mode: "flight",
                    duration: "1.5 hours",
                    cost: "₹4000-6000",
                    steps: [
                      "Take flight from Delhi to Amritsar",
                      "Taxi from airport to Golden Temple (30 mins)"
                    ]
                  }
                ]
              }
            },
            {
              id: 102,
              name: "Taj Mahal",
              location: "Agra",
              description:
                "Iconic white marble mausoleum and one of the New Seven Wonders of the World.",
              image:
                "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              bestTimeToVisit: "October to March",
              lat: 27.1751,
              lng: 78.0421
            }
          ]
        },
        {
          name: "Nature",
          icon: "🌲",
          places: [
            {
              id: 103,
              name: "Kerala Backwaters",
              location: "Kerala",
              description:
                "Network of tranquil canals and lagoons perfect for houseboat stays.",
              image:
                "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=270,height=180,dpr=2/tour_img/1fb3916640bdef6003ab3fb9e20c0bdb66fc63fd91838c3bab347d1509c0151f.jpeg",
              bestTimeToVisit: "September to March",
              lat: 9.5000,
              lng: 76.5000
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Japan",
      flag: "https://flagcdn.com/w320/jp.png",
      description: "Land of the rising sun with mix of traditional and modern",
      categories: [
        {
          name: "Temples",
          icon: "⛩️",
          places: [
            {
              id: 201,
              name: "Fushimi Inari Shrine",
              location: "Kyoto",
              description: "Famous for its thousands of vermilion torii gates.",
              image:
                "https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              bestTimeToVisit: "Year-round",
              lat: 34.9671,
              lng: 135.7727
            }
          ]
        },
        {
          name: "Cities",
          icon: "🏙️",
          places: [
            {
              id: 202,
              name: "Tokyo",
              location: "Tokyo",
              description:
                "Vibrant metropolis blending ultramodern and traditional.",
              image:
                "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              bestTimeToVisit: "March to May, September to November",
              lat: 35.6895,
              lng: 139.6917
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Italy",
      flag: "https://flagcdn.com/w320/it.png",
      description: "Renowned for art, food, and stunning landscapes",
      categories: [
        {
          name: "Historical",
          icon: "🏛️",
          places: [
            {
              id: 301,
              name: "Colosseum",
              location: "Rome",
              description:
                "Ancient amphitheater that could hold 50,000 spectators.",
              image:
                "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              bestTimeToVisit: "April to June, September to October",
              lat: 41.8902,
              lng: 12.4922
            }
          ]
        },
        {
          name: "Nature",
          icon: "🌊",
          places: [
            {
              id: 302,
              name: "Amalfi Coast",
              location: "Campania",
              description:
                "Stunning Mediterranean coastline with colorful cliffside villages.",
              image:
                "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              bestTimeToVisit: "May to September",
              lat: 40.6333,
              lng: 14.6029
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Australia",
      flag: "https://flagcdn.com/w320/au.png",
      description: "Land of stunning beaches and unique wildlife",
      categories: [
        {
          name: "Nature",
          icon: "🐨",
          places: [
            {
              id: 401,
              name: "Great Barrier Reef",
              location: "Queensland",
              description:
                "World's largest coral reef system with incredible marine life.",
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              bestTimeToVisit: "June to October",
              lat: -18.2871,
              lng: 147.6992
            }
          ]
        },
        {
          name: "Cities",
          icon: "🏙️",
          places: [
            {
              id: 402,
              name: "Sydney Opera House",
              location: "Sydney",
              description:
                "Iconic performing arts center with distinctive sail-like design.",
              image:
                "https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              bestTimeToVisit: "September to November, March to May",
              lat: -33.8568,
              lng: 151.2153
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Brazil",
      flag: "https://flagcdn.com/w320/br.png",
      description: "Vibrant culture and breathtaking natural wonders",
      categories: [
        {
          name: "Nature",
          icon: "🌴",
          places: [
            {
              id: 501,
              name: "Amazon Rainforest",
              location: "Amazonas",
              description:
                "Largest tropical rainforest with incredible biodiversity.",
              image:
                "https://images.unsplash.com/photo-1619546813926-a78fa7732f0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              bestTimeToVisit: "July to December (dry season)",
              lat: -3.4653,
              lng: -62.2159
            }
          ]
        },
        {
          name: "Landmarks",
          icon: "🗿",
          places: [
            {
              id: 502,
              name: "Christ the Redeemer",
              location: "Rio de Janeiro",
              description:
                "Iconic 30-meter statue overlooking Rio from Corcovado mountain.",
              image:
                "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              bestTimeToVisit: "April to June, September to October",
              lat: -22.9519,
              lng: -43.2105
            }
          ]
        }
      ]
    }
  ]
};
