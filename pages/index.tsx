/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const data = [
    {
      name: "Bob",
      age: 25,
      address: {
        street: "456 Maple St",
        city: "San Francisco",
        state: "CA",
        zipcode: "94102",
        coordinates: {
          latitude: 37.7749,
          longitude: -122.4194,
          accuracy: { horizontal: 5, vertical: 2 },
        },
        neighborhood: {
          name: "Tenderloin",
          population: 25000,
          boundaries: {
            north: 37.7906,
            south: 37.7842,
            east: -122.4047,
            west: -122.4199,
          },
        },
      },
    },
    {
      name: "Charlie",
      age: 40,
      address: {
        street: "789 Oak St",
        city: "Chicago",
        state: "IL",
        zipcode: "60611",
        coordinates: {
          latitude: 41.8958,
          longitude: -87.6189,
          accuracy: { horizontal: 8, vertical: 4 },
        },
        district: {
          name: "Loop",
          population: 32000,
          boundaries: {
            north: 41.8984,
            south: 41.8786,
            east: -87.5968,
            west: -87.6349,
          },
          landmarks: { theaters: 5, museums: 3, parks: 2 },
        },
      },
    },
    {
      name: "Dave",
      age: 35,
      address: {
        street: "1010 Elm St",
        city: "Miami",
        state: "FL",
        zipcode: "33130",
        coordinates: {
          latitude: 25.7617,
          longitude: -80.1918,
          accuracy: { horizontal: 7, vertical: 3 },
        },
        area: {
          name: "Brickell",
          population: 32000,
          boundaries: {
            north: 25.7765,
            south: 25.7459,
            east: -80.1775,
            west: -80.2093,
          },
          amenities: { restaurants: 30, bars: 20, gyms: 5 },
        },
      },
    },
  ];

  const wrapperFunc = async () => {
    try {
      const response = await fetch("/api/parsefail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error(`Error ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={wrapperFunc}>Click to Send</button>;
}
