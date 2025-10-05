import React from 'react';
import './App.css';
import { Icon } from '@iconify/react';

/**
 * Header component
 *  - logo
 *  - nav items (Home, About Us, Contact Us, Cart)
 * Body component
 *  - Search bar
 *  - Restaurant container
 *    - Restaurant card (image, name, cuisine, rating, delivery time)
 * Footer component
 *  - copyright notice
 *  - links (Home, About Us, Contact Us, Cart)
 *  - address
 *  - contact information
 */


// Json for restaurants
const restaurantData = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "1003414",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG",
      "locality": "Chhindwara",
      "areaName": "Chhindwara City",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.3,
      "parentId": "721",
      "avgRatingString": "4.3",
      "totalRatingsString": "187",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 14.1,
        "serviceability": "SERVICEABLE",
        "slaString": "50-60 mins",
        "lastMileTravelString": "14.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-10-06 00:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹98"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-b1fdaf1a-5486-4e81-b4bf-0f64c1dcb899"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/pizza-hut-chhindwara-city-rest1003414",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "150602",
      "name": "Raimens Cafe 79",
      "cloudinaryImageId": "eohdm5sdnq6e2u46xeux",
      "locality": "Teacher's Colony",
      "areaName": "VIP Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Pizzas",
        "Snacks",
        "Beverages"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "164782",
      "avgRatingString": "4.4",
      "totalRatingsString": "4.7K+",
      "sla": {
        "deliveryTime": 54,
        "lastMileTravel": 14.4,
        "serviceability": "SERVICEABLE",
        "slaString": "50-60 mins",
        "lastMileTravelString": "14.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-10-05 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-b1fdaf1a-5486-4e81-b4bf-0f64c1dcb899"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/raimens-cafe-79-teachers-colony-vip-road-rest150602",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "382152",
      "name": "Shriji Namkeen",
      "cloudinaryImageId": "wa8ek94fp9d97ru1tcyn",
      "locality": "Palika Market",
      "areaName": "Chhindwara City",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Snacks",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 3.4,
      "parentId": "187168",
      "avgRatingString": "3.4",
      "totalRatingsString": "62",
      "sla": {
        "deliveryTime": 54,
        "lastMileTravel": 13.7,
        "serviceability": "SERVICEABLE",
        "slaString": "50-60 mins",
        "lastMileTravelString": "13.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-10-05 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹50"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-b1fdaf1a-5486-4e81-b4bf-0f64c1dcb899"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/shriji-namkeen-palika-market-chhindwara-city-rest382152",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "151649",
      "name": "Hotel Sai Nath & Sai Restaurant",
      "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
      "locality": "railway station",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "101802",
      "avgRatingString": "4.2",
      "totalRatingsString": "1.0K+",
      "sla": {
        "deliveryTime": 42,
        "lastMileTravel": 11.3,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "11.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-10-05 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹175 OFF",
        "subHeader": "ABOVE ₹699",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-b1fdaf1a-5486-4e81-b4bf-0f64c1dcb899"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "774546",
      "name": "Shree Naivedyam",
      "cloudinaryImageId": "2274f59cb8efcfab1f446b195bcbda3b",
      "locality": "Khajri Road",
      "areaName": "Chhindwara City",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "Pizzas",
        "Beverages"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "428968",
      "avgRatingString": "4.2",
      "totalRatingsString": "129",
      "sla": {
        "deliveryTime": 62,
        "lastMileTravel": 13.6,
        "serviceability": "SERVICEABLE",
        "slaString": "60-70 mins",
        "lastMileTravelString": "13.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-10-05 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹40 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-b1fdaf1a-5486-4e81-b4bf-0f64c1dcb899"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "234875",
      "name": "Adil Hotel",
      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
      "locality": "Rautha Wada",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Biryani",
        "Tandoor"
      ],
      "avgRating": 4.4,
      "parentId": "27123",
      "avgRatingString": "4.4",
      "totalRatingsString": "1.4K+",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 12.6,
        "serviceability": "SERVICEABLE",
        "slaString": "50-60 mins",
        "lastMileTravelString": "12.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-10-06 00:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-b1fdaf1a-5486-4e81-b4bf-0f64c1dcb899"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "912754",
      "name": "Urban Cafe",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
      "locality": "SOUTH CIVIL LINE",
      "areaName": "Chhindwara City",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Snacks",
        "Pizzas",
        "Pastas",
        "Fast Food",
        "Burgers",
        "Cafe"
      ],
      "avgRating": 3.9,
      "veg": true,
      "parentId": "1330",
      "avgRatingString": "3.9",
      "totalRatingsString": "18",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 13.9,
        "serviceability": "SERVICEABLE",
        "slaString": "55-65 mins",
        "lastMileTravelString": "13.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-10-05 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-b1fdaf1a-5486-4e81-b4bf-0f64c1dcb899"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/urban-cafe-south-civil-line-chhindwara-city-rest912754",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "1034629",
      "name": "food of indians",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/30278215-be3c-43b4-b524-c951a8c89e5b_1034629.jpg",
      "locality": "Narshingpur road ",
      "areaName": "Shanichara Bazaar ",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese",
        "Beverages"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "81752",
      "avgRatingString": "4.3",
      "totalRatingsString": "14",
      "sla": {
        "deliveryTime": 66,
        "lastMileTravel": 11.6,
        "serviceability": "SERVICEABLE",
        "slaString": "65-75 mins",
        "lastMileTravelString": "11.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-10-05 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-b1fdaf1a-5486-4e81-b4bf-0f64c1dcb899"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/food-of-indians-narshingpur-road-shanichara-bazaar-rest1034629",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
];

function App() {

  // function to show stars based on rating
  function getStars(rating) {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<Icon key={i} icon="mdi:star" width={20} height={20} color='#E49A20' className="mt-0" />);
    }
    if (rating % 1 !== 0) {
      stars.push(<Icon key="half" icon="mdi:star-half" width={20} height={20} color='#E49A20' className="mt-0" />);
    }
    return stars;
  }

  const Header = () => {
    return (
      <div className="header d-flex justify-content-between align-items-center p-3 bg-light">
        <div className="logo-container">
          <img
            src="/food-delivery-logo.png"
            alt="Logo"
            className="logo w-50 h-50"
          />
        </div>
        <div className="nav-links d-flex gap-3">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#contact" className="nav-link">Contact Us</a>
          <a href="#cart" className="nav-link">Cart</a>
        </div>
      </div>
    );
  }

  // Traditional way of writing functional component with props
  // const RestaurantCard = (props) => {
  //   console.log(props);
  //   return (
  //     <div className="restaurant-card">
  //       <img
  //         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh"
  //         alt="Restaurant"
  //         className="card-image"
  //       />
  //       <div className="card-body p-3 bg-light">
  //         <h5 className="card-title">{props.resName}</h5>
  //         <p className="card-text">{props.cuisine}</p>
  //         <p className="card-text">{getStars(props.rating)}</p>
  //         <p className="card-text">{props.deliveryTime}</p>
  //       </div>
  //     </div>
  //   )
  // }

  // Destructuring props in the function parameter
  // const RestaurantCard = (props) => {
  //   const { resName, cuisine, rating, deliveryTime } = props; // Destructuring props
  //   console.log(props);
  //   return (
  //     <div className="restaurant-card">
  //       <img
  //         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh"
  //         alt="Restaurant"
  //         className="card-image"
  //       />
  //       <div className="card-body p-3 bg-light">
  //         <h5 className="card-title">{resName}</h5>
  //         <p className="card-text">{cuisine}</p>
  //         <p className="card-text">{getStars(rating)}</p>
  //         <p className="card-text">{deliveryTime}</p>
  //       </div>
  //     </div>
  //   )
  // }

  // Destructuring props in the function parameter itself
  const RestaurantCard = (info) => {
     const { name, cuisines, avgRating, sla: { slaString: deliveryTime }, costForTwo , cloudinaryImageId } = info; // Destructuring props
    
    return (
      <div className="restaurant-card">
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
          alt="Restaurant"
          className="card-image"
        />
        <div className="card-body p-3">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{cuisines.join(", ")}</p>
          <p className="card-text">{getStars(avgRating)}</p>
          <p className="card-text">{deliveryTime}, {costForTwo}</p>
        </div>
      </div>
    )
  }

  const Body = () => {
    return (
      <div className="body">
        <div className="search-bar p-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for restaurants or cuisines"
          />
        </div>
        <div className="restaurant-container d-flex flex-wrap gap-3 p-3">
          {restaurantData.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
