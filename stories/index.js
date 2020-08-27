import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import VenueCard from "../src/components/venueCard";
import FilterControls from "../src/components/filterControls";
import VenuesHeader from "../src/components/headerVenueList";
import VenueList from "../src/components/venueList";
import VenueDetails from "../src/components/venueDetails";
import VenueHeader from "../src/components/headerVenue";
import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import CategoriesContextProvider from "../src/contexts/categoriesContext";
import { action } from "@storybook/addon-actions";
import VenueTips from "../src/components/venueTips";
import VenueTip from "../src/components/venueTip";

const sampleVenue = {
    id: "4ba0f4d9f964a520fe8937e3",
    name: "Philharmonie Luxembourg",
    location: {
      address: "1, place de l’Europe",
      lat: 49.61896265363153,
      lng: 6.141746622671367,
      labeledLatLngs: [
        {
          label: "display",
          lat: 49.61896265363153,
          lng: 6.141746622671367
        }
      ],
      postalCode: "L-1499",
      cc: "LU",
      city: "Kirchberg",
      state: "District de Luxembourg",
      country: "Luxembourg",
      formattedAddress: [
        "1, place de l’Europe",
        "L-1499 Kirchberg",
        "Luxembourg"
        ]
    },
    categories: [
      {
        id: "5032792091d4c4b30a586d5c",
        name: "Concert Hall",
        pluralName: "Concert Halls",
        shortName: "Concert Hall",
        icon: {
          prefix: "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_",
          suffix: ".png"
        },
        primary: true
      }
      ],
    photos: {
        count: 0,
        groups: [ ]
    },
    referralId: "e-0-4ba0f4d9f964a520fe8937e3-2",
  };

const sampleTip = {

    id: "5150464ee4b02f70eb28eee4",
    createdAt: 1364215374,
    text: "Did you know? To create that feeling of being in the countryside, and not in the middle of a city, the four Transverse Roads were sunken down eight feet below the park’s surface.",
    type: "user",
    canonicalUrl: "https://foursquare.com/item/5150464ee4b02f70eb28eee4",
    photo: {
      id: "5150464f52625adbe29d04c2",
      createdAt: 1364215375,
      source: {
        name: "Foursquare Web",
        url: "https://foursquare.com"
        },
      prefix: "https://fastly.4sqi.net/img/general/",
      suffix: "/13764780_Ao02DfJpgG1ar2PfgP51hOKWsn38iai8bsSpzKd0GcM.jpg",
      width: 800,
      height: 542,
      visibility: "public"
    },
    photourl: "https://fastly.4sqi.net/img/general/original/13764780_Ao02DfJpgG1ar2PfgP51hOKWsn38iai8bsSpzKd0GcM.jpg",
    likes: {
      count: 246,
      groups: [
      {
        type: "others",
        count: 246,
        items: [ ]
      }
      ],
      summary: "246 likes"
    },
    logView: true,
    agreeCount: 246,
    disagreeCount: 0,
    todo: {
    count: 30
    },
    user: {
    id: "13764780",
    firstName: "City of New York",
    photo: {
    prefix: "https://fastly.4sqi.net/img/user/",
    suffix: "/2X1FKJPUY3DGRRK3.png"
    },
    type: "page"
    }
    };


    const sampleVenueDetails = {

    id: "50913b74e4b0d49482a598b7",
    name: "Déirepark",
    contact: {},
    location: {
      lat: 49.48318204868746,
      lng: 5.984930992126465,
      labeledLatLngs: [
        {
          label: "display",
          lat: 49.48318204868746,
          lng: 5.984930992126465
        }
      ],
      cc: "LU",
      city: "Esch-sur-Alzette",
      state: "District de Luxembourg",
      country: "Luxembourg",
      formattedAddress: [
        Esch-sur-Alzette,
        Luxembourg
        ]
      },
      canonicalUrl: "https://foursquare.com/v/d%C3%A9irepark/50913b74e4b0d49482a598b7",
      categories: [
        {
          id: "4bf58dd8d48988d17b941735",
          name: "Zoo",
          pluralName: "Zoos",
          shortName: "Zoo",
          icon: {
            prefix: "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/zoo_",
            suffix: ".png"
          },
        primary: true
        }
      ],
      verified: false,
      stats: {
      tipCount: 0
      },
      likes: {
        count: 10,
        groups: [
          {
            type: "others",
            count: 10,
            items: []
          }
        ],
        summary: "10 Likes"
      },
      dislike: false,
      ok: false,
      rating: 7.8,
      ratingColor: "C5DE35",
      ratingSignals: 10,
      allowMenuUrlEdit: true,
      beenHere: {
        count: 0,
        unconfirmedCount: 0,
        marked: false,
        lastCheckinExpiredAt: 0
        },
      specials: {
      count: 0,
      items: []
      },
      photos: {
        count: 12,
        groups: [
          {
            type: "venue",
            name: "Venue photos",
            count: 12,
            items: [
                {
                  id: "5c963eb2f193c0002c83a7c2",
                  createdAt: 1553350322,
                  source: {
                    name: "Swarm for iOS",
                    url: "https://www.swarmapp.com"
                },
                prefix: "https://fastly.4sqi.net/img/general/",
                suffix: "/29264553_j5xE85FTFTYfHzRvFc5rgGFxwYFsS-56dxbunsZjDsg.jpg",
                width: 1920,
                height: 1440,
                user: {
                  id: "29264553",
                  firstName: "Turker",
                  lastName: "C",
                  photo: {
                    prefix: "https://fastly.4sqi.net/img/user/",
                    suffix: "/XTRQOKX3BGP2NIJT.jpg"
                  }
                },
                visibility: "public"
              }
            ]
          }
        ]
      },
      reasons: {
        count: 0,
        items: []
      },
      hereNow: {
        count: 0,
        summary: "Nobody here",
        groups: []
      },
      createdAt: 1351695220,
      tips: {
        count: 0,
        groups: []
      },
      shortUrl: "http://4sq.com/TU1tRW",
      timeZone: "Europe/Luxembourg",
      listed: {
        count: 1,
        groups: [
          {
            type: "others",
            name: "Lists from other people",
            count: 1,
            items: [
          {
            id: "5c4a0978840fc2002c3ba233",
            name: "Luxembourg",
            description: "",
            type: "others",
            user: {
                id: "86031461",
                firstName: "Markella",
                lastName: "K",
                photo: {
                  prefix: "https://fastly.4sqi.net/img/user/",
                  suffix: "/86031461_MUwxYg-p_Cem99iFMba6UOHQgntH9njLElofkooAQ44VmYoW5WZjLvZp1lmCMG5_OzS9tVPIR.jpg"
                }
           },
      editable: false,
      public: true,
      collaborative: false,
      url: "/user/86031461/list/luxembourg",
      canonicalUrl: "https://foursquare.com/user/86031461/list/luxembourg",
      createdAt: 1548355960,
      updatedAt: 1550313056,
      photo: {
        id: "59ec7abd16ef676354139bac",
        createdAt: 1508670141,
        prefix: "https://fastly.4sqi.net/img/general/",
        suffix: "/58577961_aS689WxDSKB6EleHVEuxbOXKSCTnoa-OjILSkL-TZ70.jpg",
        width: 1440,
        height: 1920,
        user: {
          id: "58577961",
          firstName: "Stanley",
          lastName: "D",
          photo: {
            prefix: "https://fastly.4sqi.net/img/user/",
            suffix: "/58577961_AYJ-CCRP_9pGMupBcGjA7aGjjBI2-xK8uHsQCAxKCXNZ_8W0xUjoCHTfIHXwU7PP447jXoevd.jpg"
          }
        },
      visibility: "public"
      },
      followers: {
      count: 0
      },
      listItems: {
      count: 5,
      items: [
      {
      id: "v50913b74e4b0d49482a598b7",
      createdAt: 1548676097
      }
      ]
      }
      }
      ]
      }
      ]
      },
      seasonalHours: [],
      pageUpdates: {
      count: 0,
      items: []
      },
      inbox: {
      count: 0,
      items: []
      },
      attributes: {
      groups: []
      },
      bestPhoto: {
      id: "5c963eb2f193c0002c83a7c2",
      createdAt: 1553350322,
      source: {
      name: "Swarm for iOS",
      url: "https://www.swarmapp.com"
      },
      prefix: "https://fastly.4sqi.net/img/general/",
      suffix: "/29264553_j5xE85FTFTYfHzRvFc5rgGFxwYFsS-56dxbunsZjDsg.jpg",
      width: 1920,
      height: 1440,
      visibility: "public"
      },
      colors: {
      highlightColor: {
      photoId: "5c963eb2f193c0002c83a7c2",
      value: -6780840
      },
      highlightTextColor: {
      photoId: "5c963eb2f193c0002c83a7c2",
      value: -16777216
      },
      algoVersion: 3
      }
  }





storiesOf("Home Page/VenueCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <VenueCard
      venue={sampleVenue}
      action={venue => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <VenueCard
        venue={sampleNoPoster}
        action={venue => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <CategoriesContextProvider>{story()}</CategoriesContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numVenues={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <VenuesHeader title="All Venues" numVenues={10} />
));

storiesOf("Home Page/VenueList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const venues = [sampleVenue, sampleVenue, sampleVenue, sampleVenue, sampleVenue];
    return (
      <VenueList
        venues={venues}
        action={venue => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Venue Details Page/VenueDetails", module).add("default", () => (
  <VenueDetails venue={sampleVenue} />
));

storiesOf("Venue Details Page/VenueHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <VenueHeader venue={sampleVenue} />);



storiesOf("Venue Tip Page/VenueTip", module).add("default", () => (
  <VenueTip tip={sampleTip} />
));

