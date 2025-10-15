// 音乐控制功能
document.addEventListener('DOMContentLoaded', function() {
    const bgm = document.getElementById('bgm');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const volumeUp = document.getElementById('volumeUp');
    const volumeDown = document.getElementById('volumeDown');
    
    // 设置初始音量
    bgm.volume = 0.5;
    
    // 播放音乐
    playBtn.addEventListener('click', function() {
        bgm.play().catch(e => {
            console.log('自动播放被阻止，请手动点击播放');
        });
    });
    
    // 暂停音乐
    pauseBtn.addEventListener('click', function() {
        bgm.pause();
    });
    
    // 音量增加
    volumeUp.addEventListener('click', function() {
        if (bgm.volume < 1) {
            bgm.volume = Math.min(1, bgm.volume + 0.1);
        }
    });
    
    // 音量减少
    volumeDown.addEventListener('click', function() {
        if (bgm.volume > 0) {
            bgm.volume = Math.max(0, bgm.volume - 0.1);
        }
    });
    
    // 自动播放处理
    document.body.addEventListener('click', function() {
        if (bgm.paused) {
            bgm.play().catch(e => {
                console.log('需要用户交互后才能播放');
            });
        }
    }, { once: true });
});