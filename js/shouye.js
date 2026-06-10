/* 首页数据定义 */

  /* 精选歌单数据定义 */
  const playlistData = [
    { name: "通勤路上不孤单！", desc: "华语情歌来相伴", cover: "./images/playlist1.jpg" },
    { name: "青春记忆", desc: "那些年我们循环的歌", cover: "./images/playlist2.jpg" },
    { name: "欧美清晨", desc: "轻快旋律唤醒心境", cover: "./images/playlist3.jpg" }
  ];

  /* 推荐新歌数据定义 */
  const recommendSongs = [
    { id: "rec_001", title: "关键词", artist: "林俊杰", playCount: "1423w" },
    { id: "rec_002", title: "到此为止", artist: "徐佳莹", playCount: "1293w"},
    { id: "rec_003", title: "我怀念的", artist: "孙燕姿", playCount: "1114w"},
    { id: "rec_004", title: "独照", artist: "容祖儿", playCount: "1032w"},
    { id: "rec_005", title: "背对背拥抱", artist: "林俊杰", playCount: "945w"},
    { id: "rec_006", title: "小小", artist: "容祖儿", playCount: "863w"},
    { id: "rec_007", title: "失落沙洲", artist: "徐佳莹", playCount: "855w"},
    { id: "rec_008", title: "可惜没如果", artist: "林俊杰", playCount: "789w"},
    { id: "rec_009", title: "我的爱", artist: "孙燕姿", playCount: "722w"},
    { id: "rec_0010", title: "行走的鱼", artist: "徐佳莹", playCount: "675w"}
  ];

  /* 热门榜单数据定义 */
  const rankSongs = [
    { id: "rank_001", title: "一千年以后", artist: "林俊杰", playCount: "1955w"},
    { id: "rank_002", title: "身骑白马", artist: "徐佳莹", playCount: "1873w"},
    { id: "rank_003", title: "就让这大雨全都落下", artist: "容祖儿", playCount: "1744w"},
    { id: "rank_004", title: "稻香", artist: "周杰伦", playCount: "1731w"}
  ];

  /* 新歌首发数据定义 */
  const newSongsData = [
    { id: "new_001", title: "晴天", artist: "周杰伦", playCount: "578w"},
    { id: "new_002", title: "给我一个理由忘记", artist: "A-Lin", playCount: "544w"},
    { id: "new_003", title: "富士山下", artist: "陈奕迅", playCount: "521w"},
    { id: "new_004", title: "慢冷", artist: "梁静茹", playCount: "498w"},
    { id: "new_005", title: "偏爱", artist: "张芸京", playCount: "472w"},
    { id: "new_006", title: "天后", artist: "陈势安", playCount: "464w"},
    { id: "new_007", title: "大眠", artist: "王心凌", playCount: "453w"},
    { id: "new_008", title: "下一个天亮", artist: "郭静", playCount: "399w"},
    { id: "new_009", title: "苏州河", artist: "薛凯琪", playCount: "374w"},
    { id: "new_0010", title: "明明就", artist: "周杰伦", playCount: "357w"},
    { id: "new_0011", title: "十年", artist: "陈奕迅", playCount: "324w"},
    { id: "new_0012", title: "我知道", artist: "BY2", playCount: "318w"},
  ];

  /* MV数据定义 */
  const mvData = [
    { id: "mv_001", title: "每当我看到一只飞鸟停住", artist: "毛不易", plays: "4.2w", cover: "./images/mv1.jpg" },
    { id: "mv_002", title: "是的我们跳着舞", artist: "张靓颖 毛不易", plays: "3.8w", cover: "./images/mv2.jpg" },
    { id: "mv_003", title: "一觉醒来", artist: "郁可唯", plays: "2.1w", cover: "./images/mv3.jpg" },
    { id: "mv_004", title: "心世界", artist: "周深", plays: "1.7w", cover: "./images/mv4.jpg" }
  ];

  /* 歌手数据定义 */
  const artistsData = [
    { name: "林俊杰", pic: "./images/singer0.jpg "},
    { name: "容祖儿", pic: "./images/singer1.jpg" },
    { name: "孙燕姿", pic: "./images/singer2.jpg" },
    { name: "徐佳莹", pic: "./images/singer3.jpg" },
    { name: "周杰伦", pic: "./images/singer4.jpg" },
    { name: "陈奕迅", pic: "./images/singer5.jpg" }
  ];

  const allSongsCollection = [...rankSongs, ...recommendSongs, ...newSongsData];/* 使用扩展运算符 ... 将三个数组合并成一个新数组,合并所有歌曲数据 */



/* 用户登录验证函数 */

  /* 密码验证函数 */
  function isPasswordValid(password) {
    if (!password) return false;
    if (password.length < 6 || password.length > 20) return false;
    const hasLetter = /[a-zA-Z]/.test(password);/* 检查密码中是否包含字母，a-zA-Z：正则表达式，匹配任意字母（a-z或A-Z） */
    const hasNumber = /[0-9]/.test(password);
    return hasLetter && hasNumber;
  }

  /* 用户名验证函数 */
  function isUsernameValid(username) {
    if (!username || username.trim() === '') return false;/* trim() 去除字符串两端的空格 */
    const trimmed = username.trim();
    if (trimmed.length < 2 || trimmed.length > 16) return false;
    const regex = /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/;/* 检查用户名是否符合规则，正则表达式，匹配中文、字母、数字和下划线 */
    return regex.test(trimmed);
  }

  /* localStorage 用户存储 
   localStorage = "保险柜"
    ├── setItem("钥匙", "食物")  → 存东西
    ├── getItem("钥匙")          → 取东西
    └── removeItem("钥匙")       → 扔东西
    'green_users' = 钥匙

   JSON转换
   对象/数组  →  JSON.stringify()  →  字符串（可存储）
   字符串    →  JSON.parse()       →  对象/数组（可使用）
  */

  /* 清理无效用户 */
  function cleanAllInvalidUsers() {
    let users = JSON.parse(localStorage.getItem('green_users')) || [];/* 从 localStorage 读取用户列表，如果没有则初始化为空数组 */
    let needSave = false;/* 标记是否需要保存用户数据 */

    /* 过滤出有效用户（用户名和密码都符合规则） */
    const validUsers = users.filter(user => {
      const nameOk = isUsernameValid(user.username);
      const pwdOk = isPasswordValid(user.password);
      if (!nameOk || !pwdOk) {
        needSave = true;
        return false;
      }
      return true;
    });
    if (validUsers.length === 0) {
      validUsers.push({ username: "小绿同学", password: "xiaolv123", favorites: [] });
      validUsers.push({ username: "音乐爱好者", password: "music2024", favorites: [] });
      needSave = true;
    }
    if (needSave) {
      localStorage.setItem('green_users', JSON.stringify(validUsers));/* 保存更新后的用户列表到 localStorage */
    }
    return validUsers;
  }

  let users = cleanAllInvalidUsers();
  let currentUser = null;
  const savedUser = localStorage.getItem('green_current_user');
  if(savedUser){
    try {
      const parsed = JSON.parse(savedUser);
      const exist = users.find(u => u.username === parsed.username);/* 在有效用户列表中查找该用户是否还存在（未被清理掉） */
      if(exist) currentUser = exist;
      else localStorage.removeItem('green_current_user');
    } catch(e) {
      localStorage.removeItem('green_current_user');/* // JSON 解析失败（数据损坏），清除登录记录 */
    }
  }

  /* 保存用户数据 */
  function saveUserData(){
    if(currentUser){
      const idx = users.findIndex(u => u.username === currentUser.username);/* 在用户列表中查找当前用户的索引 */
      if(idx !== -1) users[idx] = currentUser;/* 用户已存在，更新该位置的数据 */
      else users.push(currentUser);
      localStorage.setItem('green_users', JSON.stringify(users));
      localStorage.setItem('green_current_user', JSON.stringify({ username: currentUser.username }));
    } else {
      localStorage.removeItem('green_current_user');
    }
  }

  /* 收藏状态判断函数 */
  function isFavorite(songId){
    return currentUser ? currentUser.favorites.includes(songId) : false;/* 如果用户已登录，检查该歌曲ID是否在用户的收藏列表中；如果未登录，返回 false */
  }



/* 收藏状态切换函数歌曲函数 */
  function toggleFavorite(songId){
    if(!currentUser){
      alert("请先登录，即可收藏歌曲到「我的音乐」");
      showAuthModal('login');
      return false;
    }
    const idx = currentUser.favorites.indexOf(songId);/* 在用户收藏列表中查找该歌曲ID是否存在，如果不存在则返回 -1 */
    if(idx === -1){
      currentUser.favorites.push(songId);
      alert("❤️ 已收藏至「我的音乐」");
    } else {
      currentUser.favorites.splice(idx,1);/* 歌曲已存在，从收藏列表中移除该歌曲ID */
      alert("♡ 已取消收藏");
    }
    saveUserData();
    renderCurrentPage();/* 重新渲染当前页面 */
    return true;
  }


  /* 播放歌曲函数 */
  function playSong(song){
    window.location.href = './audio.html';
  }


/* 渲染推荐新歌列表 */
  function renderSongList(songs, containerId, showHeart = true){
    const container = document.getElementById(containerId);/* 根据ID找到页面上的容器 */
    if(!container) return;
    if(songs.length === 0){
      container.innerHTML = '<div class="empty-tip">暂无歌曲~</div>';
      return;
    }
    container.innerHTML = songs.map(song => `
      <div class="song-item" data-song-id="${song.id}">
        <span class="song-index">🎵</span>
        <div class="song-info"><span class="title">${song.title}</span><div class="artist">${song.artist} · ${song.playCount}</div></div>
        ${showHeart ? `<div class="fav-heart ${isFavorite(song.id) ? 'liked' : ''}" data-id="${song.id}">${isFavorite(song.id) ? '❤️' : '🤍'}</div>` : ''}
        <div class="song-action"><span>▶</span></div>
      </div>
    `).join('');/* map()方法遍历每个歌曲对象，将每个歌曲转换为 HTML 字符串，返回数组，join('') 方法将数组元素连接成一个字符串 */

    /* 绑定收藏按钮事件 */
    if(showHeart){
      document.querySelectorAll(`#${containerId} .fav-heart`).forEach(heart => {/* 遍历收藏按钮元素，为每个按钮添加点击事件 */
        heart.addEventListener('click', (e) => {
          e.stopPropagation();/* 阻止事件冒泡到父元素 */
          toggleFavorite(heart.dataset.id);
        });
      });
    }

    /* 绑定播放按钮事件 */
    document.querySelectorAll(`#${containerId} .song-item`).forEach(item => {
      item.addEventListener('click', (e) => {
        if(e.target.classList.contains('fav-heart')) return;/* 如果点击的是收藏按钮，不执行播放逻辑*/
        const songId = item.dataset.songId;
        const song = songs.find(s => s.id === songId);
        if(song) playSong(song);
      });
    });
  }


  /* 渲染榜单列表 */
  function renderRankList(songs, containerId){
    const container = document.getElementById(containerId);/* 根据ID找到页面上的容器 */
    if(!container) return;
    container.innerHTML = songs.map((song, idx) => `
      <div class="rank-item" data-song-id="${song.id}">
        <span class="rank-number">${idx+1}</span>
        <div class="rank-info"><span class="r-title">${song.title}</span><div class="r-desc">${song.artist} · ${song.playCount}</div></div>
        <div class="fav-heart ${isFavorite(song.id) ? 'liked' : ''}" data-id="${song.id}" style="margin-left:auto;">${isFavorite(song.id) ? '❤️' : '🤍'}</div>
      </div>
    `).join('');/* map()方法遍历每个歌曲对象，将每个歌曲转换为 HTML 字符串，返回数组，join('') 方法将数组元素连接成一个字符串 */

    /* 绑定收藏按钮事件 */
    document.querySelectorAll(`#${containerId} .fav-heart`).forEach(heart => {/* 遍历收藏按钮元素，为每个按钮添加点击事件 */
      heart.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(heart.dataset.id);
      });
    });

    /* 绑定播放按钮事件 */
    document.querySelectorAll(`#${containerId} .rank-item`).forEach(item => {
      item.addEventListener('click', (e) => {
        if(e.target.classList.contains('fav-heart')) return;/* 如果点击的是收藏按钮，不执行播放逻辑*/
        const songId = item.dataset.songId;
        const song = songs.find(s => s.id === songId);
        if(song) playSong(song);
      });
    });
  }


  /* 渲染mv列表 */
  function renderMvGrid(mvList, containerId){
    const container = document.getElementById(containerId);/* 根据ID找到页面上的容器 */
    if(!container) return;
    container.innerHTML = `<div class="mv-grid">${mvList.map(mv => `
      <div class="mv-card" data-mv-title="${mv.title}" data-mv-artist="${mv.artist}">
        <img src="${mv.cover}">
        <div class="mv-info"><h4>${mv.title}</h4><p>${mv.artist} · ${mv.plays}</p></div>
      </div>
    `).join('')}</div>`;/* mv-grid外层网格容器，用于 CSS Grid 布局，join('') 方法将数组元素连接成一个字符串 */

    /* 绑定mv卡片点击事件 */
    document.querySelectorAll(`#${containerId} .mv-card`).forEach(card => {/* 遍历mv卡片元素，为每个卡片添加点击事件 */
      card.addEventListener('click', () => {
        alert(`🎬 即将播放MV: ${card.dataset.mvTitle} - ${card.dataset.mvArtist}\n（MV功能即将上线）`);
      });
    });
  }


  /* 渲染歌手列表 */
  function renderArtists(artists, containerId, filterSongsList = null){
    const container = document.getElementById(containerId);/* 根据ID找到页面上的容器 */
    if(!container) return;
    container.innerHTML = `<div class="artist-grid">${artists.map(art => `
      <div class="artist-item" data-artist="${art.name}">
        <div class="artist-avatar"><img src="${art.pic}"></div>
        <div class="artist-name">${art.name}</div>
      </div>
    `).join('')}</div>`;/* artist-grid外层网格容器，用于 CSS Grid 布局，join('') 方法将数组元素连接成一个字符串 */

    /* 绑定歌手卡片点击事件 */
    document.querySelectorAll(`#${containerId} .artist-item`).forEach(item => {/* 遍历歌手卡片元素，为每个卡片添加点击事件 */
      item.addEventListener('click', () => {
        const artistName = item.dataset.artist;
        document.getElementById('searchInput').value = artistName;/* 将歌手名称设置到搜索框中 */
        if(filterSongsList){
          const filtered = filterSongsList.filter(s => s.artist === artistName);
          if(containerId === 'homeArtists'){
            renderSongList(filtered.slice(0,4), 'homeSongs', true);/* 如果在首页，只显示前4首歌 */
          } else if(containerId === 'singerGrid'){
            renderSongList(filtered, 'singerSongList');/* 如果在歌手列表页，显示所有歌 */
          }
        }
      });
    });
  }


  /* 页面渲染函数 */
  function navigateTo(page){
    currentPage = page;
    renderCurrentPage();
    // 更新导航高亮
    document.querySelectorAll('.nav-links a').forEach(a => {
      if(a.dataset.page === page) {
        a.classList.add('active');/* 为当前页面对应的链接添加 active 类名 */
        a.style.color = '#8fc5ae';
      } else {
        a.classList.remove('active');/* 移除其他页面对应的链接的 active 类名 */
        a.style.color = '';
      }
    });
  }


  /* 渲染首页函数 */
  function renderHome(){
    const html = `
      <div class="main-grid">
        <div class="left-column">
          <section>
            <div class="section-header">
              <h2>💿 精选歌单</h2>
              <a class="more-link" data-target="playlist">更多 ›</a>
            </div>
            <div class="playlist-cards" id="homePlaylists"></div>
          </section>
          <section>
            <div class="section-header">
              <h2>✨ 推荐新歌</h2>
              <a class="more-link" data-target="newsong">更多 ›</a>
            </div>
            <div class="song-list" id="homeSongs"></div>
          </section>
          <section>
            <div class="section-header">
              <h2>👥 热门歌手</h2>
              <a class="more-link" data-target="singer">更多 ›</a>
            </div>
            <div id="homeArtists"></div>
          </section>
        </div>
        <div class="right-column">
          <section>
            <div class="section-header">
              <h2>🏆 热门榜单</h2>
              <a class="more-link" data-target="rank">更多 ›</a>
            </div>
            <div class="ranking-list" id="homeRank"></div>
          </section>
          <section>
            <div class="section-header">
              <h2>🎬 推荐MV</h2>
              <a class="more-link" data-target="mv">更多 ›</a>
            </div>
            <div id="homeMv"></div>
          </section>
        </div>
      </div>
    `;

    /* 渲染首页内容，包括歌单、新歌、热门歌手、热门榜单、推荐MV等部分 */
    document.getElementById('pageContent').innerHTML = html;

    /* 渲染精选歌单 */
    document.getElementById('homePlaylists').innerHTML = playlistData.map(p => `
        <div class="card" data-playlist="${p.name}">
        <div class="card-img"><img src="${p.cover}"></div>
        <div class="card-info">
          <h4>${p.name}</h4>
          <p>${p.desc}</p>
        </div>
    </div>
    `).join('');
    /* 绑定歌单卡片点击事件 */
    document.querySelectorAll('#homePlaylists .card').forEach(card => {
      card.addEventListener('click', () => alert(`📀 歌单《${card.dataset.playlist}》即将上线~`));
    });

    /* 渲染推荐新歌 */
    renderSongList(recommendSongs, 'homeSongs', true);

    /* 渲染热门歌手 */
    renderArtists(artistsData, 'homeArtists', recommendSongs);

    /* 渲染首页热门歌手列表，只显示前4首歌 */
    renderArtists(artistsData.slice(0,4), 'homeArtists', recommendSongs);

    /* 渲染热门榜单 */
    renderRankList(rankSongs, 'homeRank');

    /* 渲染推荐MV */
    renderMvGrid(mvData.slice(0,2), 'homeMv');
    
    /* 绑定更多链接跳转 */
    document.querySelectorAll('.more-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();/* 阻止a标签的默认跳转行为 */
        const target = link.dataset.target;
        if(target === 'newsong') navigateTo('newsong');
        else if(target === 'rank') navigateTo('rank');
        else if(target === 'mv') navigateTo('mv');
        else if(target === 'singer') navigateTo('singer');
        else if(target === 'playlist') alert('更多歌单即将上线 ✨');
      });
    });
  }

  /* 渲染新歌首发页面 */
  function renderNewSong(){
    document.getElementById('pageContent').innerHTML = `<div class="section-header"><h2>🎵 新歌首发</h2></div><div class="song-list" id="newSongsList"></div>`;
    renderSongList(newSongsData, 'newSongsList', true);
  }

  /* 渲染榜单页面函数 */
  function renderRank(){
    document.getElementById('pageContent').innerHTML = `<div class="section-header"><h2>🏆 官方热歌榜</h2></div><div class="ranking-list" id="fullRankList"></div>`;
    renderRankList(rankSongs, 'fullRankList');
  }

  /* 渲染推荐MV页面函数 */
  function renderMvPage(){
    document.getElementById('pageContent').innerHTML = `<div class="section-header"><h2>🎬 精选MV</h2></div><div id="mvPageGrid"></div>`;
    renderMvGrid(mvData, 'mvPageGrid');
  }

  /* 渲染热门歌手页面函数 */
  function renderSinger(){
    document.getElementById('pageContent').innerHTML = `
      <div class="section-header"><h2>👥 热门歌手</h2></div>
      <div id="singerGrid"></div>
      <div class="section-header" style="margin-top: 30px;"><h2>🎵 歌手歌曲</h2></div>
      <div class="song-list" id="singerSongList"></div>
    `;

    /* 渲染热门歌手网格 */
    renderArtists(artistsData, 'singerGrid', allSongsCollection);
    /* 初始化歌曲列表为空 */
    renderSongList([], 'singerSongList', true);
    /* 绑定歌手卡片点击事件 */
    document.querySelectorAll('#singerGrid .artist-item').forEach(item => {
      item.addEventListener('click', () => {
        const artistName = item.dataset.artist;
        const filtered = allSongsCollection.filter(s => s.artist === artistName);
        renderSongList(filtered, 'singerSongList', true);/* 根据歌手名称过滤歌曲列表，并渲染到歌手歌曲列表中 */
      });
    });
  }

  /* 渲染我的收藏页面函数 */
  function renderMyMusic(){
    const container = document.getElementById('pageContent');
    if(!currentUser){
      container.innerHTML = `<div class="my-music-section"><div class="empty-tip">🍃 请先登录，查看你的收藏歌单~<br><button class="login-btn" id="myMusicLoginBtn" style="margin-top:12px;">立即登录</button></div></div>`;
      document.getElementById('myMusicLoginBtn')?.addEventListener('click', () => showAuthModal('login'));/* ?.addEventListener：可选链操作符，防止元素不存在时报错 */
      return;
    }
    const songMap = new Map();/* 用于存储歌曲ID到歌曲对象的映射关系，方便快速查找收藏歌曲的信息 */
    allSongsCollection.forEach(s => songMap.set(s.id, s));/* 遍历所有歌曲，将歌曲ID作为歌曲对象的键，歌曲对象作为值，存储到Map中 */
    const favSongs = currentUser.favorites.map(id => songMap.get(id)).filter(s => s);/* 根据收藏歌曲ID获取歌曲对象，并过滤掉可能为null的歌曲对象，存储到favSongs数组中 */
    if(favSongs.length === 0){
      container.innerHTML = `<div class="my-music-section"><div class="empty-tip">🍃 还没有收藏歌曲，去精选页面点击 🤍 收藏你喜欢的音乐吧~</div></div>`;
      return;
    }
    /* 渲染收藏列表 */
    container.innerHTML = `<div class="section-header"><h2>💖 我的收藏歌单 (${favSongs.length})</h2></div><div class="song-list" id="myFavList"></div>`;
    renderSongList(favSongs, 'myFavList', true);
  }


  /* 导航和页面切换 */
  let currentPage = 'home';
  function renderCurrentPage(){
    if(currentPage === 'home') renderHome();
    else if(currentPage === 'newsong') renderNewSong();
    else if(currentPage === 'rank') renderRank();
    else if(currentPage === 'mv') renderMvPage();
    else if(currentPage === 'singer') renderSinger();
    else if(currentPage === 'mymusic') renderMyMusic();
    updateUserUI();
  }

  function updateUserUI(){
    const userInfoDiv = document.getElementById('userInfo');
    if(currentUser){
      userInfoDiv.innerHTML = `<span class="user-name">${currentUser.username}</span><div class="avatar-icon">🌱</div><button class="logout-btn" id="logoutBtn">退出</button>`;
      /* 绑定退出登录按钮点击事件 */
      document.getElementById('logoutBtn')?.addEventListener('click', () => {
        currentUser = null;
        localStorage.removeItem('green_current_user');
        updateUserUI();
        renderCurrentPage();
        alert('已退出登录');
      });
    } else {
      userInfoDiv.innerHTML = `<button class="login-btn" id="loginBtn">登录</button><button class="reg-btn" id="regBtn">注册</button>`;
      /* 绑定登录按钮点击事件 */
      document.getElementById('loginBtn')?.addEventListener('click', () => showAuthModal('login'));
      /* 绑定注册按钮点击事件 */
      document.getElementById('regBtn')?.addEventListener('click', () => showAuthModal('signup'));
    }
  }

  /* 清空所有错误提示 */
  function clearErrors(){
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';
  }

  /* 显示特定错误提示 */
  function showError(elementId, message){
    const el = document.getElementById(elementId);
    el.innerText = message;
    el.style.display = 'block';
  }

  // 模态框逻辑
  let currentModalMode = 'login';
  const modal = document.getElementById('authModal');
  function showAuthModal(mode){
    currentModalMode = mode;
    const title = document.getElementById('modalTitle');
    const submitBtn = document.getElementById('submitAuthBtn');
    const switchText = document.getElementById('switchMode');
    if(mode === 'login'){
      title.innerText = '登录轻音绿';
      submitBtn.innerText = '登录';
      switchText.innerText = '还没有账号？ 立即注册';
    } else {
      title.innerText = '注册新账号';
      submitBtn.innerText = '注册';
      switchText.innerText = '已有账号？ 去登录';
    }
    /* 清空输入框 */
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    clearErrors();
    modal.style.display = 'flex';/* 显示模态框 */
  }
  

  /* 关闭模态框 */
  function closeModal(){ 
    modal.style.display = 'none'; 
    clearErrors();
  }
  
  document.getElementById('closeModalBtn').addEventListener('click', closeModal);

  /* 切换登录注册模式 */
  document.getElementById('switchMode').addEventListener('click', () => {
    if(currentModalMode === 'login') showAuthModal('signup');
    else showAuthModal('login');
  });
  
  document.getElementById('submitAuthBtn').addEventListener('click', () => {
    const rawUsername = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    clearErrors();
    
    if(currentModalMode === 'login'){
      if(!rawUsername || !password){
        if(!rawUsername) showError('usernameError', '请输入用户名');
        if(!password) showError('passwordError', '请输入密码');
        return;
      }
      const user = users.find(u => u.username === rawUsername && u.password === password);
      if(user){
        currentUser = { ...user, favorites: [...user.favorites] };
        saveUserData();
        closeModal();
        renderCurrentPage();
        updateUserUI();
        alert(`欢迎回来，${currentUser.username}！🎵`);
      } else {
        showError('usernameError', '用户名或密码错误');
      }
    } else {
      if(!rawUsername){
        showError('usernameError', '请输入用户名');
        return;
      }
      if(rawUsername.length < 2){
        showError('usernameError', '用户名至少2个字符');
        return;
      }
      if(rawUsername.length > 16){
        showError('usernameError', '用户名不能超过16个字符');
        return;
      }
      const usernameRegex = /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/;
      if(!usernameRegex.test(rawUsername)){
        showError('usernameError', '用户名只能包含中文、字母、数字、下划线');
        return;
      }
      if(users.find(u => u.username === rawUsername)){
        showError('usernameError', '用户名已存在，请更换');
        return;
      }
      if(!password){
        showError('passwordError', '请输入密码');
        return;
      }
      if(password.length < 6){
        showError('passwordError', '密码至少6位');
        return;
      }
      if(password.length > 20){
        showError('passwordError', '密码不能超过20位');
        return;
      }
      const hasLetter = /[a-zA-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      if(!hasLetter || !hasNumber){
        showError('passwordError', '密码必须同时包含字母和数字');
        return;
      }
      const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]+$/;
      if(!passwordRegex.test(password)){
        showError('passwordError', '密码只能包含字母、数字、!@#$%^&*');
        return;
      }
      
      const newUser = { username: rawUsername, password: password, favorites: [] };
      users.push(newUser);
      localStorage.setItem('green_users', JSON.stringify(users));
      currentUser = newUser;
      saveUserData();
      closeModal();
      renderCurrentPage();
      updateUserUI();
      alert(`注册成功！欢迎 ${rawUsername} 🎉`);
    }
  });
  
  /* 点击模态框外部关闭 */
  window.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });

  /* 输入时实时清除错误提示 */
  document.getElementById('loginUsername').addEventListener('input', () => {
    document.getElementById('usernameError').style.display = 'none';
  });
  document.getElementById('loginPassword').addEventListener('input', () => {
    document.getElementById('passwordError').style.display = 'none';
  });

  // 导航
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();/* 阻止a标签的默认跳转行为 */
      const page = link.dataset.page;
      navigateTo(page);
    });
  });

  // 轮播图
  const slidesContainer = document.getElementById('carouselSlides');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;/* 当前轮播图索引 */
  const totalSlides = slidesContainer.children.length;/* 总轮播图数量 */
  let autoInterval;/* 自动轮播定时器 */

  /* 切换轮播图函数 */
  function goToSlide(index){
    if(index < 0) index = totalSlides-1;
    if(index >= totalSlides) index = 0;
    currentIndex = index;
    slidesContainer.style.transform = `translateX(-${currentIndex*100}%)`;/* 水平向左移动 */
    dots.forEach((dot,i) => dot.classList.toggle('active', i===currentIndex));/* 遍历所有指示点，只将当前索引对应的指示点添加 active 类，其他指示点移除该类 */
  }
  function nextSlide(){ goToSlide(currentIndex+1); }
  function prevSlide(){ goToSlide(currentIndex-1); }

  /* 重置自动播放（清除原定时器，开启新定时器） */
  function resetAuto(){
    clearInterval(autoInterval);
    autoInterval = setInterval(nextSlide, 4000);
  }
  /* 点击切换轮播图按钮时重置自动播放 */
  document.getElementById('prevBtn').addEventListener('click', ()=>{ prevSlide(); resetAuto(); });
  document.getElementById('nextBtn').addEventListener('click', ()=>{ nextSlide(); resetAuto(); });
  /* 点击指示点时重置自动播放 */
  dots.forEach((dot,idx) => dot.addEventListener('click', ()=>{ goToSlide(idx); resetAuto(); }));
  /* 鼠标悬停在轮播图容器上时停止自动播放，鼠标离开时重新开始自动播放 */
  slidesContainer.addEventListener('mouseenter', ()=>clearInterval(autoInterval));
  autoInterval = setInterval(nextSlide, 4000);
  const wrapper = document.querySelector('.carousel-wrapper');
  wrapper.addEventListener('mouseenter',()=>clearInterval(autoInterval));
  wrapper.addEventListener('mouseleave',()=>{ autoInterval = setInterval(nextSlide,4000); });
  goToSlide(0);

  // 搜索功能
  document.getElementById('searchInput').addEventListener('input', (e) => {
    const keyword = e.target.value.trim().toLowerCase();
    if(currentPage === 'home'){
      if(!keyword){
        renderSongList(recommendSongs, 'homeSongs', true);
      } else {
        const filtered = recommendSongs.filter(s => s.title.toLowerCase().includes(keyword) || s.artist.toLowerCase().includes(keyword));
        renderSongList(filtered, 'homeSongs', true);
      }
    } else if(currentPage === 'newsong'){
      if(!keyword){
        renderSongList(newSongsData, 'newSongsList', true);
      } else {
        const filtered = newSongsData.filter(s => s.title.toLowerCase().includes(keyword) || s.artist.toLowerCase().includes(keyword));
        renderSongList(filtered, 'newSongsList', true);
      }
    } else if(currentPage === 'rank'){
      if(!keyword){
        renderRankList(rankSongs, 'fullRankList');
      } else {
        const filtered = rankSongs.filter(s => s.title.toLowerCase().includes(keyword) || s.artist.toLowerCase().includes(keyword));
        renderRankList(filtered, 'fullRankList');
      }
    }
  });

  renderCurrentPage();