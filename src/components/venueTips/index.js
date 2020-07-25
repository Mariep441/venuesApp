import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVenueTips } from "../../api/foursquare-api";
import { excerpt } from "../../util";

export default ({ venue }) => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    getVenueTips(venue.id).then(tips => {
      setTips(tips);
    });
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {tips.map(t => {
            return (
              <tr key={t.id}>
                <td>{t.user.firstName}</td>
                <td>{excerpt(t.text)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/tips/${t.id}`,
                      state: {
                        tip: t,
                        venue: venue
                      }
                    }}
                  >
                    Full Tip
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};