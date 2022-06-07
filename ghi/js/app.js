function createCard(name, description, pictureUrl, starts, ends, location) {
    return `
      <div class="card g-col-2 gap-3 shadow p-3 mb-5 bg-body rounded col-sm">
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle text-muted">${location}</h6>
          <p class="card-text">${description}</p>
        </div>
            <div class="card-footer text-muted">
            ${starts} - ${ends}
            </div>
      </div>
    `;
}


window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Response not ok');
        } else {
            const data = await response.json();


            for (let conference of data.conferences) {
                const detailUrl = `http://localhost:8000${conference.href}`;
                const detailResponse = await fetch(detailUrl);
                if (detailResponse.ok) {
                    const details = await detailResponse.json();
                    const title = details.conference.name;
                    const startDate = new Date(details.conference.starts).toDateString();
                    const endDate = new Date(details.conference.ends).toDateString();
                    const location = details.conference.location.name;
                    console.log("Your damn self:", location)
                    const description = details.conference.description;
                    const pictureUrl = details.conference.location.picture_url;
                    const html = createCard(title, description, pictureUrl, startDate, endDate, location);
                    const column = document.querySelector('.row');
                    column.innerHTML += html;
                }
            }
        }
    } catch (e) {
        console.error('error', e);
    }
});


// const html = createCard(title, description, pictureUrl);
                    // const column = document.querySelector('.col');
                    // column.innerHTML += html;
    //                 const data = await response.json();

    //   for (let conference of data.conferences) {
    //     const detailUrl = `http://localhost:8000${conference.href}`;
    //     const detailResponse = await fetch(detailUrl);
    //     if (detailResponse.ok) {
    //       const details = await detailResponse.json();
    //       const title = details.conference.title;
    //       const description = details.conference.description;
    //       const pictureUrl = details.conference.location.picture_url;
    //       const html = createCard(title, description, pictureUrl);
    //       console.log(html);


    // const details = await detailResponse.json();
    // const description = details.conference.description;
    // const title = details.conference.title;
    // const pictureUrl = details.conference.location.picture_url
    // // const detailsTag = document.querySelector('.card-text');
    // // detailsTag.innerHTML = description;
    // const imageTag = document.querySelector('.card-img-top');
    // imageTag.src = details.conference.location.picture_url;
    // const html = createCard(title, description, pictureUrl);
    // const column = document.querySelector('.col');
    // column.innerHTML = html;
    // console.log("DATA:", details);