const COHORT_NAME = '2301-ftb-et-web-pt'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export const registerUser = async (user) => {
        try {
          const response = await fetch(
            `${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user
            }),
          });
          const result = await response.json();
    // You can log ▲▲▲ the result
    // here ▼▼▼ to view the json object before returning it
          console.log(result)
          return result
        } catch (err) {
          console.error(err);
        }
      };

export const login = async (user) => {

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user
        }),
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

// POST REQUESTS 
  
export const fetchPosts = async () => {
        try {
          const response = await fetch(`${BASE_URL}/posts`)
      
          const result = await response.json();
        //   console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      };
      

export const makePost = async () => {

  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
      body: JSON.stringify({
        post: {
          title: "My favorite stuffed animal",
          description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
          price: "$480.00",
          willDeliver: true
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}
