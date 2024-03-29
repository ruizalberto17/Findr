const apiKey = process.env.REACT_APP_YELP_API_KEY;
const cors = "";
const baseUrl = "https://api.yelp.com/v3";
const searchEndpoint = "/businesses/search";

const getSuggestions = async (keyword, location, sort) => {
    var newLocation = location.replace(" ", '+');
    const endpoint = `https://corsproxy.io/?${baseUrl}${searchEndpoint}?term=${keyword}&location=${newLocation}&sort_by=${sort}`;

    try {
        const response = await fetch(endpoint,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        );
        if (response.ok) {
            const jsonResponse = await response.json();
            const results = jsonResponse.businesses.map((business) => ({
                id: business.id,
                img_url: business.image_url,
                name: business.name,
                address: `${business.location.display_address[0]}, ${business.location.display_address[1]}`,
                category: business.categories[0].title,
                rating: business.rating,
                reviews: business.review_count,
                url: business.url
            }));
            return results;
        }
    }
    catch (error) {
        console.log(error);
    };
};
export default getSuggestions;