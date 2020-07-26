
 export const getVenues = () => {
    return fetch(
      'https://api.foursquare.com/v2/venues/search?near=Luxembourg,LU&client_id=VXBG35UAZ2DLVD5VTXEWVDLMKKEVIHRUN5G3PV4LLVEILNGC&client_secret=LYY1KBWYLBMF5HC3CRH0WDXFXUJSN1RYM4AZ5WP0NDGXM1BR&v=20190101'
      )
      .then(results => results.json())
      .then(data => data.response.venues)

  };

  export const getVenue = id => {
    return fetch(
      `https://api.foursquare.com/v2/venues/${id}?&client_id=VXBG35UAZ2DLVD5VTXEWVDLMKKEVIHRUN5G3PV4LLVEILNGC&client_secret=LYY1KBWYLBMF5HC3CRH0WDXFXUJSN1RYM4AZ5WP0NDGXM1BR&v=20190101`)
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getCategories = () => {
    return fetch(
      'https://api.foursquare.com/v2/venues/categories?&client_id=VXBG35UAZ2DLVD5VTXEWVDLMKKEVIHRUN5G3PV4LLVEILNGC&client_secret=LYY1KBWYLBMF5HC3CRH0WDXFXUJSN1RYM4AZ5WP0NDGXM1BR&v=20190101'
      )

      .then(res => res.json())
      .then(data => data.response.categories)
    
  };


  export const getVenueTips = id => {
    return fetch(
      `https://api.foursquare.com/v2/venues/${id}?/tips&client_id=${process.env.client_id}&client_secret=${process.env.client_secret}&v=20190101`, {method: 'GET'})
      .then(res => res.json())
      .then(json => json.results);
  };