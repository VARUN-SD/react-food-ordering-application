
export default async () => {
  try {
    const response = await fetch(
      "https://namastedev.com/api/v1/listRestaurants"
    );

    if (!response.ok) {
      return Response.json(
        { error: "Restaurant API request failed" },
        { status: 502 }
      );
    }

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    console.error("Upstream API error:", error);

    return Response.json(
      { error: "Unable to fetch restaurant data" },
      { status: 500 }
    );
  }
};
