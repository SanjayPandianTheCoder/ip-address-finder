import React, { useState, useEffect } from "react";
import '../App.css'

function IpFinder() {
  const [responseJson, setResponseJson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getResponseJson = async () => {
      try {
        const url = `https://ipapi.co/json/`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        setResponseJson(jsonResponse);
      } catch (error) {
        setError(error);
      }
    };

    getResponseJson();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!responseJson) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="app-container">
        <div className="details" >
          <table className="table table-bordered tdesign">
            <tbody>
              <tr>
                <td>IP</td>
                <td>{responseJson.ip}</td>
              </tr>
              <tr>
                <td>Version</td>
                <td>{responseJson.version}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{responseJson.city}</td>
              </tr>
              <tr>
                <td>Region</td>
                <td>{responseJson.region}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{responseJson.country_name}</td>
              </tr>
              <tr>
                <td>Latitude</td>
                <td>{responseJson.latitude}</td>
              </tr>
              <tr>
                <td>Longitude</td>
                <td>{responseJson.longitude}</td>
              </tr>
              <tr>
                <td>org</td>
                <td>{responseJson.org}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default IpFinder;
