
window.addEventListener('DOMContentLoaded', async () => {
   
    const url = 'http://localhost:8000/api/locations/';
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Response not ok');
        } else {
            const data = await response.json();
            const locationTag = document.getElementById('location');
            console.log(data)
            for (let loct of data.locations) {
                const secondOption = document.createElement('option');
                secondOption.value = loct.id;
                secondOption.innerHTML = loct.name;
                locationTag.appendChild(secondOption)
            }
            const formTag = document.getElementById('create-conference-form')
            formTag.addEventListener('submit', async event => {
                event.preventDefault();
                const formData = new FormData(formTag);
                const json = JSON.stringify(Object.fromEntries(formData));
          
                const locationUrl = 'http://localhost:8000/api/conferences/';
                const fetchConfig = {
                  method: "post",
                  body: json,
                  headers: {
                    'Content-Type': 'application/json',
                  },
                };
                console.log(json)
                const response = await fetch(locationUrl, fetchConfig);
                console.log("THINGS12:", response)
                if (response.ok) {
                  formTag.reset();
                  const newLocation = await response.json(); }
})}                  
    } catch (e) {
        console.error('error', e);
    }
});


// const detailResponse = await fetch(detailUrl);
                // if (detailResponse.ok) {
                //     const details = await detailResponse.json();
                //     const title = details.conference.name;
                //     const startDate = new Date(details.conference.starts).toDateString();
                //     const endDate = new Date(details.conference.ends).toDateString();
                //     const location = details.conference.location.name;
                //     const description = details.conference.description;
                    
                // }