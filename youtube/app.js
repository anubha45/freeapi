const fetchVideos = async () => {
    try{
        const response = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos')
        const data = await response.json()
        console.log(data);
        const container = document.getElementById('videos-container');
        data.data.data.forEach(video => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${video.items.snippet.thumbnails.medium.url}" alt="${video.items.snippet.title}">
                <div class="card-info">
                    <h3>${video.items.snippet.title}</h3>
                    <div class="card-meta">
                        <span class="channel">${video.items.snippet.channelTitle}</span>
                        <span class="views">${Number(video.items.statistics.viewCount).toLocaleString()} views</span>
                    </div>
                </div>
            `;
                 
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching videos:', error); 
    }
}
fetchVideos()

