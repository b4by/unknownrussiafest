export async function getMoviesByCategory(categoryId: string | number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories/${categoryId}?populate[movies][populate]=screenshots,poster,title,description,director,screenwriter,date,rating,duration,slug`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
