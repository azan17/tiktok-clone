import React from 'react';
import Video from './Video';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>This is a TikTok Clone</h1>
      <div className="app_videos">
      <Video url="https://instagram.fkhi17-1.fna.fbcdn.net/v/t50.2886-16/120527647_2800279483590187_8154895894103330760_n.mp4?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=bfMprExoBzwAX-Sv388&oe=5F857EB6&oh=cc7b29bcdfd1494d627dda026f839e78"
      channel="azzanarain"
      description="this is the video description"
      song="the song of the video is display"
      likes={320}
      shares={25}
      messages={400}/>
      <Video url="https://instagram.fkhi17-1.fna.fbcdn.net/v/t50.2886-16/120296609_3612115372153961_2554083216496033620_n.mp4?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=jq6RmV9yE54AX-80KvL&oe=5F85255D&oh=f2f7b9cbd410f7b3838b02fff932d79a"
      channel="azzanarain"
      description="this is the video description"
      song="the song of the video is display"
      likes={520}
      shares={125}
      messages={480}/>
      <Video url="https://instagram.fkhi17-1.fna.fbcdn.net/v/t50.2886-16/120075720_652719022314471_3340884166742625707_n.mp4?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=J7G_4Wq_H3kAX9jh1GV&oe=5F857A3B&oh=6fc26e6b5530f9fce6b7f580058f5f3d"
      channel="azzanarain"
      description="this is the video description"
      song="the song of the video is display"
      likes={350}
      shares={215}
      messages={560}/>
      <Video url="https://instagram.fkhi17-1.fna.fbcdn.net/v/t50.2886-16/119931358_2555849114639984_926604199710111499_n.mp4?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=fGMUnIH4kQYAX_7ztTS&oe=5F857D0D&oh=b7e57411f4743b802c4e613512bd9777"
      channel="azzanarain"
      description="this is the video description"
      song="the song of the video is display"
      likes={450}
      shares={219}
      messages={415}/>
      <Video url="https://instagram.fkhi17-1.fna.fbcdn.net/v/t50.2886-16/119208030_336884411081075_349752167635843176_n.mp4?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=ovHPObYcFBwAX-_PQO2&oe=5F84FA80&oh=c4f5a48e7e3110e31bb723aad9a12e42"
      channel="azzanarain"
      description="this is the video description"
      song="the song of the video is display"
      likes={456}
      shares={213}
      messages={789}/>
      </div>
    </div>
  );
}

export default App;
