const ANILIST_API_URL = 'https://graphql.anilist.co';

export async function searchAnime(searchTerm: string) {
    const query = `
    query ($search: String) {
      Page(page: 1, perPage: 10) {
        media(search: $search, type: ANIME) {
          id
          title {
            romaji
            english
          }
          coverImage {
            large
          }
          description
          episodes
          averageScore
        }
      }
    }
  `;

    const response = await fetch(ANILIST_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { search: searchTerm },
        }),
    });

    const data = await response.json();
    return data.data.Page.media;
}