window.addEventListener('DOMContentLoaded', async () => {
    const selectTag = document.getElementById('conference');
    const loadingIcon = document.getElementById('loading-conference-spinner')
    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
  
      for (let conference of data.conferences) {
        const option = document.createElement('option');
        option.value = conference.href;
        option.innerHTML = conference.name;
        selectTag.appendChild(option);
      }
    }
    loadingIcon.classList.add('d-none');
    selectTag.classList.remove('d-none')
  });
