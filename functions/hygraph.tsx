const queries = {
  news: `{
    newsposts(orderBy: date_DESC, first: 100) {
      title
      date
      id
      link
      tag
      thumbnail {
        url
      }
    }
  }`,
};

async function getDataByCategory(contentType: keyof typeof queries) {
  const response = await fetch(
    "https://api-us-west-2.hygraph.com/v2/clg29cc4d083901szcyotg9ij/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: queries[contentType],
      }),
    }
  );
  const { data } = await response.json();
  return data.newsposts;
}

export default { getDataByCategory };
