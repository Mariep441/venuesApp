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

const sample = {
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

storiesOf("Home Page/VenueCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <VenueCard
      venue={sample}
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
    const venues = [sample, sample, sample, sample, sample];
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
  <VenueDetails venue={sample} />
));

storiesOf("Venue Details Page/VenueHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <VenueHeader venue={sample} />);



storiesOf("Venue Tip Page/VenueTip", module).add("default", () => (
  <VenueTip tip={sampleTip} />
));

