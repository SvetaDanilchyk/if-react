import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//components
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Homes } from "../../components/Homes";
import { Loader } from "../../components/Loader";

//services
import { hotelsUrl } from "../../services/const";

export const AvailableHotels = () => {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${hotelsUrl}/${hotelId}`)
      .then((response) => response.json())
      .then((data) => {
        setHotel(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [hotelId]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Header style={{ backgroundColor: "var(--general-color)" }} />
      {hotel && <Homes title="Available hotels" dataHomes={[hotel]} />}
      <Footer />
    </>
  );
};
