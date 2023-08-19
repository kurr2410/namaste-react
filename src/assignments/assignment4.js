
/* 
- Header
    -logo
    -nav
    -cart
-Body
    -search bar
    -restruarant container
        -restruarant cards
-Footer
    -copyright\
    -address
 */

import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
    return <div id="applayout">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
}
// Inline css example
const inlineCSSRestCard = {
    backgroundColor: "rgb(207 205 205)",
    width: "300px",
    margin: "10px"
}
const Header = () => {
    return <div id="header">

        <img className="logo" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"></img>
        <nav>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Change Location</li>
                <li>Cart</li>
            </ul>
        </nav>
    </div>
}
const Body = () => {
    return <div id="body">
        <div className="searchBar">
            <input type="text" placeholder="Search for restaurant, cuisine or a dish.." name="search" />
            <button type="submit">Search</button>
        </div>
        <div className="restaurant-container">
            {restData.map(item=>{
                return <RestaurantCard key={item.info.resId} restaurant={item}></RestaurantCard>
            })}
        </div>
    </div>

}
const RestaurantCard = ({restaurant})=>{
    return <div className="rest-card" style={inlineCSSRestCard}>
        <img className="card-img" src={restaurant.info.image.url}></img>
        <h3>{restaurant.info.name}</h3>
        <h4>{restaurant.info.cuisine.map(item=>item.name).join(", ")}</h4>
        <div className="card-footer">
        <h5>{restaurant.info.rating.aggregate_rating}</h5>
        <h5>{restaurant.order.deliveryTime}</h5>
        <h5>{restaurant.info.cft.text}</h5>
        </div>
    </div>
}
const Footer = () => {
    return <div id="footer">
        Footer
    </div>
}
const restData = [
    {
        "type": "restaurant",
        "info": {
            "resId": 57750,
            "name": "Art of Delight",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/57750\/c3a0261d990fad130cad2041b7b73ec5_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/57750\/c3a0261d990fad130cad2041b7b73ec5_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.4",
                "rating_text": "4.4",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "3,271",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "2,080",
                        "reviewTextSmall": "2,080 Reviews",
                        "subtext": "2,080 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "1,191",
                        "reviewTextSmall": "1,191 Reviews",
                        "subtext": "1,191 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Residency Road, Bangalore",
                "address": "44\/1, Residency Road, Bangalore",
                "localityUrl": "bangalore\/residency-road-restaurants"
            },
            "timing": {
                "text": "Closes in 17 minutes",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                    "name": "Ice Cream"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2N1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/waffle\/",
                    "name": "Waffle"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "28 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/bangalore\/art-of-delight-residency-road\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/bangalore\/art-of-delight-residency-road\/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"874403a8-107b-45c7-adca-7e6309982531\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"57750\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20583070,
            "name": "Baskin Robbins - Ice Cream Desserts",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/4\/51454\/ec37a79363ae4ea88c3be9ccd7989873_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/4\/51454\/ec37a79363ae4ea88c3be9ccd7989873_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "188",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.4",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "0 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.4",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "188",
                        "reviewTextSmall": "188 Reviews",
                        "subtext": "188 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9400 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Hosur Road, Bangalore",
                "address": "22, 2nd Cross, SG Palya, DRC Post, Hosur Road, Bangalore",
                "localityUrl": "bangalore\/hosur-road-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                    "name": "Ice Cream"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "39 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/bangalore\/baskin-robbins-ice-cream-desserts-hosur-road-bangalore\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/bangalore\/baskin-robbins-ice-cream-desserts-hosur-road-bangalore\/order",
            "clickActionDeeplink": ""
        },
        "distance": "4.7 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"874403a8-107b-45c7-adca-7e6309982531\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20583070\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19187309,
            "name": "Empire Juices and Desserts",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/18796821\/fc44820b387b761f160ac817734f0e37_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/18796821\/fc44820b387b761f160ac817734f0e37_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "196",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "196",
                        "reviewTextSmall": "196 Reviews",
                        "subtext": "196 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Shivajinagar, Bangalore",
                "address": "78, Center Street Of Infantry Road, Shivajinagar, Bangalore",
                "localityUrl": "bangalore\/shivajinagar-restaurants"
            },
            "timing": {
                "text": "Closes in 1 hour 47 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/juices\/",
                    "name": "Juices"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                    "name": "Ice Cream"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "22 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/bangalore\/empire-juices-and-desserts-shivajinagar-bangalore\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/bangalore\/empire-juices-and-desserts-shivajinagar-bangalore\/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"874403a8-107b-45c7-adca-7e6309982531\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19187309\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18108004,
            "name": "Polar Bear",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/50812\/21c544e626cbf40a91c8b236014b2682_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/50812\/21c544e626cbf40a91c8b236014b2682_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "2,576",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.8",
                        "reviewCount": "252",
                        "reviewTextSmall": "252 Reviews",
                        "subtext": "252 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.8",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "2,324",
                        "reviewTextSmall": "2,324 Reviews",
                        "subtext": "2,324 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9400 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Jayanagar, Bangalore",
                "address": "37th Cross, 18th Main, 4 T Block, Jayanagar, Bangalore",
                "localityUrl": "bangalore\/jayanagar-restaurants"
            },
            "timing": {
                "text": "Opens at 11:30am",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                    "name": "Ice Cream"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "38 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/bangalore\/polar-bear-1-jayanagar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/bangalore\/polar-bear-1-jayanagar\/order",
            "clickActionDeeplink": ""
        },
        "distance": "5.6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"874403a8-107b-45c7-adca-7e6309982531\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18108004\",\"element_type\":\"listing\",\"rank\":4}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19550391,
            "name": "Third Wave Coffee",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/18380831\/56f59da661495376566fe01bec942ca5_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/18380831\/56f59da661495376566fe01bec942ca5_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "855",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.3",
                        "reviewCount": "532",
                        "reviewTextSmall": "532 Reviews",
                        "subtext": "532 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.7",
                        "reviewCount": "323",
                        "reviewTextSmall": "323 Reviews",
                        "subtext": "323 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.7",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9700 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Church Street, Bangalore",
                "address": "Shop 52\/2, Sujaya Pride Building, Ashok Nagar, Church Street, Bangalore",
                "localityUrl": "bangalore\/church-street-restaurants"
            },
            "timing": {
                "text": "Closes in 17 minutes",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/cafes\/",
                    "name": "Cafe"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/coffee\/",
                    "name": "Coffee"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/tea\/",
                    "name": "Tea"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/sandwich\/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                    "name": "Pizza"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "22 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/bangalore\/third-wave-coffee-church-street-bangalore\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/bangalore\/third-wave-coffee-church-street-bangalore\/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"874403a8-107b-45c7-adca-7e6309982531\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19550391\",\"element_type\":\"listing\",\"rank\":5}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19326726,
            "name": "Firangi Bake",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/18577160\/4598bf555104600555614b20a04f900f_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/18577160\/4598bf555104600555614b20a04f900f_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "214",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "214",
                        "reviewTextSmall": "214 Reviews",
                        "subtext": "214 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9450 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Vasanth Nagar, Bangalore",
                "address": "Bldg-1\/1, Blue Moon Chambers, GF, Shop-1, 10th Main, 10th Cross, Shivajinagar, Vasanth Nagar, Bangalore",
                "localityUrl": "bangalore\/vasanth-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/mexican\/",
                    "name": "Mexican"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "38 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/bangalore\/firangi-bake-vasanth-nagar-bangalore\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/bangalore\/firangi-bake-vasanth-nagar-bangalore\/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"874403a8-107b-45c7-adca-7e6309982531\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19326726\",\"element_type\":\"listing\",\"rank\":6}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Flat 20% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 50722,
            "name": "Natural Ice Cream",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/50722\/adb20cc3d424971e06802e03adcf5a44_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/50722\/adb20cc3d424971e06802e03adcf5a44_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "3,675",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.4",
                        "reviewCount": "541",
                        "reviewTextSmall": "541 Reviews",
                        "subtext": "541 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.4",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "3,134",
                        "reviewTextSmall": "3,134 Reviews",
                        "subtext": "3,134 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Jayanagar, Bangalore",
                "address": "9 & 10, Ground Floor, Das Commercial Complex,   7th Block, Jayanagar, Bangalore",
                "localityUrl": "bangalore\/jayanagar-restaurants"
            },
            "timing": {
                "text": "Opens at 11am",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                    "name": "Ice Cream"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "41 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/bangalore\/natural-ice-cream-jayanagar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/bangalore\/natural-ice-cream-jayanagar\/order",
            "clickActionDeeplink": ""
        },
        "distance": "5.6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"874403a8-107b-45c7-adca-7e6309982531\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"50722\",\"element_type\":\"listing\",\"rank\":7}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                    "aspect_ratio": 2.0625
                },
                "text": "Restaurant partner follows WHO protocol"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18772972,
            "name": "Kanti Bakes & Flakes",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/18772972\/0646ea8f0539f2d0f03195dd7a66d884_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/18772972\/0646ea8f0539f2d0f03195dd7a66d884_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "521",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "521",
                        "reviewTextSmall": "521 Reviews",
                        "subtext": "521 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "RT Nagar, Bangalore",
                "address": "1, Sultanpalya Main Road, RT Nagar, Bangalore",
                "localityUrl": "bangalore\/rt-nagar-restaurants"
            },
            "timing": {
                "text": "Permanently Closed",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bakery\/",
                    "name": "Bakery"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/mithai\/",
                    "name": "Mithai"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/bangalore\/kanti-bakes-flakes-rt-nagar-bangalore\/order",
            "clickActionDeeplink": ""
        },
        "distance": "6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"8c09c2b4-2480-4d33-be8f-d0fc87a6a7d2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18772972\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": true,
        "bottomContainers": [
            {
                "image": {
                    "url": "https:\/\/b.zmtcdn.com\/data\/o2_assets\/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                    "aspect_ratio": 2.0625
                },
                "text": "Restaurant partner follows WHO protocol"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18951997,
            "name": "Hangyo",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/18951997\/7530da7a3e3ace09e94a21a47829f0ec_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/18951997\/7530da7a3e3ace09e94a21a47829f0ec_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "242",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "3",
                        "reviewTextSmall": "3 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "239",
                        "reviewTextSmall": "239 Reviews",
                        "subtext": "239 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "\u20b9200 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Malleshwaram, Bangalore",
                "address": "169, 1st Main Road, Malleshwaram, Bangalore",
                "localityUrl": "bangalore\/malleshwaram-restaurants"
            },
            "timing": {
                "text": "Opens at 10:30am",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                    "name": "Ice Cream"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "",
            "isServiceable": false,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Currently not accepting orders",
                "clickUrl": "\/bangalore\/hangyo-malleshwaram-bangalore\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/bangalore\/hangyo-malleshwaram-bangalore\/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.1 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"8c09c2b4-2480-4d33-be8f-d0fc87a6a7d2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18951997\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": true,
        "bottomContainers": []
    }
]
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)