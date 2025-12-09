"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function FilterPage() {
  const params = useSearchParams();
  const destination = params.get("destination");
  const date = params.get("date");
  const passenger = params.get("passenger");

  // Example dataset with all three fields
  const trips = [
    { destination: "Bagan, Myanmar", date: "2025-12-09", passenger: "2" },
    { destination: "Mandalay, Myanmar", date: "2025-12-10", passenger: "1" },
    { destination: "Yangon, Myanmar", date: "2025-12-09", passenger: "3" },
    { destination: "Inle Lake, Myanmar", date: "2025-12-11", passenger: "2" },
    { destination: "Ngwesaung, Myanmar", date: "2025-12-09", passenger: "1" },
  ];

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (destination && date && passenger) {
      const filtered = trips.filter(
        (trip) =>
          trip.destination.toLowerCase().includes(destination.toLowerCase()) &&
          trip.date === date &&
          trip.passenger === passenger
      );
      setResults(filtered);
    }
  }, [destination, date, passenger]);

  return (
    <main className="mt-30 py-5 bg-gray-100">
      <h1 className="text-gray-400 font-bold text-3xl text-center mb-10">
        Searched... {destination}, {date}, {passenger}
      </h1>

      {results.length > 0 ? (
        
        <ul className="list-disc pl-6">
          {results.map((r, i) => (
            <li key={i}>
              {r.destination} — {r.date} — {r.passenger} Passenger
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-500 text-center">
          No results found for "{destination}, {date}, {passenger}"
        </p>
      )}
    </main>
  );
}
