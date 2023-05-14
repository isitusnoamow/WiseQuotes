import './App.css'
import { useEffect, useState } from 'react'
import { OpenAIApi, Configuration } from "openai"

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const [apiResponse2, setApiResponse2] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
  })
  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    createQuote()
  },[])
  
  const createQuote = async () => {
    let prompt = "Please give me a short (less than 30 words) quote that contains two parts inspired by the likes of Sun-Tzu, Buddha, Gandhi and Einstein but not from any of them. Seperate the two parts with a | symbol and only respond with the quote and have no other punctuation. DO not include quotation marks:"
    try {
      console.log(import.meta.VITE_OPENAI_API_KEY)
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.95,
        max_tokens: 4000,
      });
      //console.log("response", result.data.choices[0].text);
      setApiResponse(result.data.choices[0].text.split("|")[0]);
      setApiResponse2(result.data.choices[0].text.split("|")[1]);

    } catch (e) {
      //console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
  }

  return (
    <>
      <div id="container" className='text-shadow-solid text-2xl w-fit p-4 font-bold'>
        <h1 className='m-0 text-left'>{apiResponse}</h1>
        <h1 className='m-0 text-right'>{apiResponse2}</h1>
      </div>
    </>
  )
}

export default App
