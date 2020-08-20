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


console.log(tips);

  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Text</th>
        </tr>
      </thead>
      <tbody>
        {tips.map(t => {
            return (
              <tr key={t.id}>
                <td>{t.items[0].user.firstName}</td>
                <td>{t.items[0].text}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};