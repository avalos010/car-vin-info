export default async function getVinInfo(vin) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/http://api.carmd.com/v3.0/decode?vin=${vin}`,  {
    // mode: 'no-cors',
    headers: {
        "content-type":"application/json",
        "authorization":process.env.REACT_APP_AUTH,
        "partner-token":process.env.REACT_APP_PARTNER
      }
    })
    const json = await res.json()
    return json
}