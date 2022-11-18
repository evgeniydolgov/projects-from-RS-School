function CreatedAudioPlayer(duratuon, audio, lang) {

    const playerContainer = document.createElement('div');
    playerContainer.classList.add('player-container')
    duratuon.append(playerContainer);

    const audioVoice = document.createElement('audio');
    audioVoice.classList.add('audio-voice');
    let songru = audio.replace('/en/', '/ru/');
    if (lang === 'en') {
        audioVoice.src = `${audio}`;
    } else if (lang === 'ru') {
        audioVoice.src = `${songru}`;
    }

    if (localStorage.getItem('volume')) {
        audioVoice.volume = +localStorage.getItem('volume') / 100;
    }
    playerContainer.append(audioVoice);
    const playBtn = document.createElement('div');
    playBtn.classList.add('play')
    playerContainer.append(playBtn);

    const pauseBtn = document.createElement('div');
    pauseBtn.classList.add('pause')
    playerContainer.append(pauseBtn);

    const rangeContainer = document.createElement('div');
    rangeContainer.classList.add('input-container');
    playerContainer.append(rangeContainer);

    const progressRange = document.createElement('input');
    progressRange.type = 'range';
    progressRange.classList.add('progress-range');
    progressRange.max = '100';
    progressRange.value = '0';
    rangeContainer.append(progressRange);

    const timeCounter = document.createElement('div');
    timeCounter.classList.add('timer-container');
    rangeContainer.append(timeCounter);

    const timeStart = document.createElement('span');
    timeStart.classList.add('timer');
    timeStart.textContent = '0:00';
    timeCounter.append(timeStart);

    const timeOff = document.createElement('span');
    timeOff.classList.add('timer');
    timeOff.textContent = '0:00';
    timeCounter.append(timeOff);

    const volumeContainer = document.createElement('div');
    volumeContainer.classList.add('volume-container');
    duratuon.append(volumeContainer);

    const volumeIcon = document.createElement('div');
    volumeIcon.classList.add('volume-icon');
    volumeContainer.append(volumeIcon);

    const volumeBtn = document.createElement('input');
    volumeBtn.type = 'range';
    if (localStorage.getItem('volume')) {
        volumeBtn.value = localStorage.getItem('volume')
    }
    volumeBtn.classList.add('volume');
    volumeContainer.append(volumeBtn);

    playBtn.addEventListener('click', () => {
        audioVoice.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    })
    pauseBtn.addEventListener('click', () => {
        audioVoice.pause();
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';

    })
    volumeBtn.oninput = audioVolume;

    audioVoice.ontimeupdate = progressUpdate;
    progressRange.onclick = audioJump

    function audioVolume() {
        localStorage.setItem('volume', this.value)
        audioVoice.volume = localStorage.getItem('volume') / 100;
    }

    function progressUpdate() {
        progressRange.value = 100 * audioVoice.currentTime / audioVoice.duration;
        timeStart.innerHTML = `0:0${Math.floor(audioVoice.currentTime)}`
        timeOff.innerHTML = `0:0${Math.floor(audioVoice.duration)}`
        if (audioVoice.duration == audioVoice.currentTime) {
            playBtn.style.display = 'block';
            pauseBtn.style.display = 'none';
        }
    }

    function audioJump() {
        let w = this.offsetWidth;
        let o = event.offsetX;
        console.log(w);
        console.log(o);
        this.value = 100 * o / w;
        audioVoice.pause();
        audioVoice.currentTime = audioVoice.duration * (o / w);
        audioVoice.play();
    }
}
export default CreatedAudioPlayer;