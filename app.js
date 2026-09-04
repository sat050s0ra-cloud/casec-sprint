const lessons = {
  listen: [
    {text:'次の英文を聞いて、予約時刻を選んでください。', say:'The appointment has been moved from fifteen to fifty past four.',translation:'予約は4時15分から4時50分へ変更になりました。', answers:['4:15','4:50','5:15','5:50'], correct:1, note:'from ... to ... は「AからBへ変更」。数字を二つ聞いたら、最後の数字が新しい予定です。',wrong:['4:15 は変更前の時刻です。moved from の直後を選んでいます。','', '5:15 は会話に出てきません。fifteen と four を組み合わせないようにしましょう。','5:50 は会話に出てきません。新しい時刻は fifty past four です。']},
    {text:'次の英文を聞いて、待ち合わせ場所を選んでください。', say:'Let’s meet by the information desk, just inside the east entrance.',translation:'東口を入ってすぐの案内所のそばで会いましょう。', answers:['東口の中、案内所のそば','西口の外、カフェの前','東口の外、バス停','案内所の2階'], correct:0, note:'just inside は「入ってすぐ」。場所の核になる名詞 information desk を先に拾いましょう。',wrong:['','west entrance や cafe は会話に出てきません。','bus stop は会話に出てきません。','2階という情報はありません。']},
    {text:'次の英文を聞いて、必要な物を選んでください。', say:'You do not need to bring your passport, but please have your reservation number ready.',translation:'パスポートを持参する必要はありませんが、予約番号をすぐ出せるようにしておいてください。', answers:['パスポートだけ','予約番号だけ','両方','どちらも不要'], correct:1, note:'but の後ろが重要情報。否定された passport で止まらず、後半まで聞きます。',wrong:['passport は do not need と言われています。','', 'passport は不要なので、両方ではありません。','reservation number は ready にしておく必要があります。']}
  ],
  words: [
    {word:'weak coffee',meaning:'薄いコーヒー',examples:[{en:'This coffee is too weak for me.',ja:'このコーヒーは私には薄すぎます。'},{en:'I like strong coffee, not weak coffee.',ja:'私は薄いコーヒーではなく、濃いコーヒーが好きです。'},{en:'Could you make the coffee a little stronger?',ja:'コーヒーをもう少し濃くしていただけますか。'}],tip:'weak = 弱い だけでなく、飲み物なら「薄い」。名詞とセットで覚える。'},
    {word:'make an effort',meaning:'努力する',examples:[{en:'Make an effort to notice weak sounds.',ja:'弱く発音される音に気づくよう努力しましょう。'},{en:'She made an effort to speak English every day.',ja:'彼女は毎日英語を話すよう努力しました。'},{en:'Thank you for making such an effort.',ja:'そのように努力してくれてありがとう。'}],tip:'do effort ではなく make an effort。動詞ごと覚える。'},
    {word:'be due to',meaning:'〜の予定である / 〜が原因である',examples:[{en:'The train is due to arrive at six.',ja:'電車は6時に到着する予定です。'},{en:'Our flight is due to leave at noon.',ja:'私たちの便は正午に出発する予定です。'},{en:'The delay was due to bad weather.',ja:'遅延は悪天候が原因でした。'}],tip:'予定の due to は「〜することになっている」。原因を表す場合にも使えます。'}
  ],
  phrases: [
    {word:'for fun',meaning:'楽しみで / 冗談で',examples:['I study English for fun.','We went to the museum just for fun.','He said it for fun, not to hurt anyone.'],tip:'「楽しみに」だけでなく、文脈によって「冗談で」も表します。'},
    {word:'sound like',meaning:'〜のように聞こえる',examples:['That sounds like a good plan.','It sounds like rain is coming.','This hotel sounds like a nice place to stay.'],tip:'直訳より、会話でそのまま使える形で覚える。'},
    {word:'pick up on',meaning:'（小さな変化・ニュアンス）に気づく',examples:['Try to pick up on the weak sounds.','She quickly picked up on my mistake.','I did not pick up on the change in the schedule.'],tip:'聞き取りの細部をつかむ時に役立つ表現です。'}
  ],
  passages: [
    {title:'Small steps after work',text:'After work, I often feel tired. Still, I try to study English for ten minutes. I read one short article or listen to a simple conversation. Some days are busy, so I only learn three new words. That is fine. Small steps are easier to continue, and they help me feel more confident every week.',tip:'ポイント: still と so を目印に、話の流れをつかみましょう。',translation:'仕事の後は、よく疲れを感じます。それでも、私は10分間英語を勉強するようにしています。短い記事を1つ読んだり、簡単な会話を聞いたりします。忙しい日は新しい単語を3つだけ覚えます。それで十分です。小さな一歩のほうが続けやすく、毎週少しずつ自信につながります。'},
    {title:'A message from a friend',text:'My friend sent me a message this morning. She said she would be late for lunch because her train had stopped. I changed our meeting place to a cafe near the station. While I was waiting, I ordered coffee and read the menu. She arrived twenty minutes later, and we had a relaxing lunch together.',tip:'ポイント: because の後に「遅れた理由」が来ます。時間表現も拾いましょう。',translation:'今朝、友人からメッセージが来ました。電車が止まったため昼食に遅れると言っていました。私は待ち合わせ場所を駅近くのカフェに変更しました。待っている間、コーヒーを頼んでメニューを読みました。20分後に彼女は到着し、一緒にゆっくり昼食をとりました。'},
    {title:'The weekend market',text:'On Saturday, I visited a small market near my home. Local farmers were selling fresh vegetables, bread, and flowers. I bought tomatoes, carrots, and a loaf of warm bread. The seller told me that the tomatoes were picked that morning. I made soup for dinner, and it tasted better than usual.',tip:'ポイント: 買った物を表す名詞を探しながら読みましょう。',translation:'土曜日に、家の近くの小さな市場へ行きました。地元の農家が新鮮な野菜、パン、花を売っていました。私はトマト、にんじん、温かいパンを1斤買いました。売り手は、トマトはその朝に収穫したものだと教えてくれました。夕食にスープを作ると、いつもよりおいしく感じました。'},
    {title:'Learning from a mistake',text:'Yesterday, I missed an online meeting because I wrote down the wrong time. I felt embarrassed, but my colleague was kind. She sent me a short summary after the meeting. Now I check the time zone before I add an event to my calendar. Making a mistake is not pleasant, but it can teach us something useful.',tip:'ポイント: but の前後で気持ちや内容がどう変わるかに注目します。',translation:'昨日、時刻を間違えて書き留めたため、オンライン会議に参加し損ねました。恥ずかしく思いましたが、同僚は親切でした。会議後に短い要約を送ってくれました。今では、カレンダーに予定を入れる前にタイムゾーンを確認しています。間違いは気持ちのよいものではありませんが、役立つことを教えてくれます。'},
    {title:'A useful morning habit',text:'I have started preparing for the next day before I go to bed. I choose my clothes, put my keys near the door, and make a short to-do list. This habit takes only five minutes, but my mornings are less stressful now. I can leave home on time and have a few quiet minutes before work begins.',tip:'ポイント: 動詞 choose, put, make が一日の準備を表しています。',translation:'寝る前に翌日の準備をするようになりました。服を選び、鍵をドアの近くに置き、短いToDoリストを作ります。この習慣は5分しかかかりませんが、今は朝のストレスが減りました。時間どおりに家を出られ、仕事が始まる前に少し静かな時間を持てます。'},
    {title:'Asking for help',text:'Last week, I could not understand a report at work. Instead of guessing, I asked my manager for help. She explained the most important part in simple words. Then I read the report again and took notes. Asking a clear question saved time, and I understood the information much better.',tip:'ポイント: Instead of の後に「しなかったこと」、その後に実際にしたことが来ます。',translation:'先週、仕事で報告書の内容が理解できませんでした。推測する代わりに、上司に助けを求めました。上司は最も重要な部分を簡単な言葉で説明してくれました。それから報告書をもう一度読み、メモを取りました。明確な質問をすることで時間が節約でき、内容をずっとよく理解できました。'},
    {title:'A plan for Sunday',text:'This Sunday, I am going to take a long walk in the park. The weather forecast says it will be sunny and cool. I will bring water, a light jacket, and my phone. I may stop at a bakery on the way home. A little time outside helps me clear my mind before a new week starts.',tip:'ポイント: going to と will は「これからの予定」。持ち物も確認しましょう。',translation:'今度の日曜日は、公園を長く散歩するつもりです。天気予報では晴れて涼しくなるそうです。水、薄手の上着、携帯電話を持っていきます。帰宅途中にパン屋へ寄るかもしれません。新しい週が始まる前に少し外で過ごすと、頭がすっきりします。'}
  ],
  travel: [
    {scene:'HOTEL CHECK-IN',prompt:'会話を聞いて、フロント係が確認しているものを選んでください。',say:'Good evening. Welcome to the Riverside Hotel. Do you have a reservation? Yes, it is under Yamada. May I see your passport and a credit card, please? Certainly. Here you are.',transcript:'<b>Front desk:</b> Good evening. Welcome to the Riverside Hotel. Do you have a reservation?<br><b>Guest:</b> Yes, it is under Yamada.<br><b>Front desk:</b> May I see your passport and a credit card, please?<br><b>Guest:</b> Certainly. Here you are.',answers:['パスポートとクレジットカード','ホテルの地図と鍵','航空券と現金','予約メールと荷物'],correct:0,note:'May I see ...? は「〜を見せていただけますか」。ホテルのチェックインでよく使います。',wrong:['','地図や鍵については会話に出てきません。','航空券や現金ではなく passport and a credit card です。','予約名は確認しますが、メールや荷物は頼まれていません。']},
    {scene:'AT THE AIRPORT',prompt:'会話を聞いて、搭乗口の変更先を選んでください。',say:'Attention, please. Flight 318 to Singapore will now depart from gate 24, not gate 18. Boarding will begin at 10:35. Please have your passport and boarding pass ready.',transcript:'<b>Announcement:</b> Attention, please. Flight 318 to Singapore will now depart from gate 24, not gate 18.<br><b>Announcement:</b> Boarding will begin at 10:35. Please have your passport and boarding pass ready.',answers:['18番ゲート','24番ゲート','10時18分','10時35分'],correct:1,note:'not gate 18 の後にある gate 24 が変更後です。数字が二つ出たら、訂正の後を聞きましょう。',wrong:['gate 18 は not の後にある「変更前」の搭乗口です。','','10:18 ではありません。18 は搭乗口の番号です。','10:35 は搭乗開始時刻で、搭乗口ではありません。']},
    {scene:'HOTEL REQUEST',prompt:'会話を聞いて、宿泊客が頼んでいるものを選んでください。',say:'Hello, this is room 507. Could I have two extra towels, please? Of course. We will bring them up in about ten minutes. Thank you very much.',transcript:'<b>Guest:</b> Hello, this is room 507. Could I have two extra towels, please?<br><b>Front desk:</b> Of course. We will bring them up in about ten minutes.<br><b>Guest:</b> Thank you very much.',answers:['追加の枕','タオル2枚','朝食2人分','ルームキー'],correct:1,note:'Could I have ...? はホテルで丁寧に頼む定番表現です。数量 two と名詞 towels をセットで聞きます。',wrong:['pillow は会話に出てきません。','','朝食についての依頼はありません。','room 507 は部屋番号で、キーを頼んでいるわけではありません。']},
    {scene:'CHANGING A BOOKING',prompt:'会話を聞いて、予約変更後のチェックアウト日を選んでください。',say:'I would like to extend my stay by one night. No problem. You will check out on Tuesday instead of Monday. Is that correct? Yes, that is perfect.',transcript:'<b>Guest:</b> I would like to extend my stay by one night.<br><b>Front desk:</b> No problem. You will check out on Tuesday instead of Monday. Is that correct?<br><b>Guest:</b> Yes, that is perfect.',answers:['月曜日','火曜日','水曜日','今夜'],correct:1,note:'instead of Monday は「月曜ではなく」。その前の Tuesday が新しい日程です。',wrong:['Monday は instead of の後にある変更前の日です。','','Wednesday は会話に出てきません。','one night 延長するので、今夜のチェックアウトではありません。']}
  ]
};
let mode='listen';
let index=0;
let progress=JSON.parse(localStorage.getItem('casec-sprint')||'{"done":0,"dates":[]}');
let voiceSettings=JSON.parse(localStorage.getItem('casec-voice-settings')||'{"voice":"auto","rate":"0.82"}');
let calendarMonth=new Date(new Date().getFullYear(),new Date().getMonth(),1);
const practice=document.querySelector('#practice');
const streak=document.querySelector('#streak-num');

function getBestVoice(){
  const voices=speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith('en'));
  if(voiceSettings.voice!=='auto') return voices.find(v=>v.name===voiceSettings.voice)||voices[0];
  const naturalVoice=[/Eddy|Flo|Reed|Siri/i,/Microsoft.*(Jenny|Aria|Guy|Ava)|Google.*(English|US)/i,/Ava|Daniel|Karen/i,/Samantha/i];
  return naturalVoice.map(pattern=>voices.find(v=>pattern.test(v.name))).find(Boolean)||voices[0];
}
function speak(text){
  speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text); utterance.lang='en-US'; utterance.rate=Number(voiceSettings.rate); utterance.pitch=1; utterance.volume=1;
  utterance.volume=1; utterance.pitch=1;
  const voice=getBestVoice(); if(voice) utterance.voice=voice;
  speechSynthesis.speak(utterance);
}
function renderVoiceControls(){
  const voiceSelect=practice.querySelector('#voice-select'); if(!voiceSelect) return;
  const voices=speechSynthesis.getVoices().filter(v=>v.lang.toLowerCase().startsWith('en'));
  const score=v=>/Eddy|Flo|Reed|Siri|Microsoft.*(Jenny|Aria|Guy|Ava)|Google.*English/i.test(v.name)?0:/Ava|Daniel|Karen/i.test(v.name)?1:/Samantha/i.test(v.name)?2:3;
  voices.sort((a,b)=>score(a)-score(b)||a.name.localeCompare(b.name));
  voiceSelect.innerHTML='<option value="auto">自然な英語音声を自動で選ぶ（推奨）</option>'+voices.map(v=>`<option value="${v.name}">${v.name} (${v.lang})</option>`).join('');
  voiceSelect.value=voiceSettings.voice;
  practice.querySelector('#rate-select').value=voiceSettings.rate;
  const save=()=>{voiceSettings={voice:voiceSelect.value,rate:practice.querySelector('#rate-select').value};localStorage.setItem('casec-voice-settings',JSON.stringify(voiceSettings));};
  voiceSelect.onchange=save; practice.querySelector('#rate-select').onchange=save;
}
function dayStreak(){
  const days=new Set(progress.dates||[]); let count=0; const d=new Date();
  while(days.has(d.toDateString())){count++; d.setDate(d.getDate()-1)}
  return count;
}
function saveDone(kind){
  const date=new Date().toDateString();
  progress.done++; progress.dates=[...new Set([...(progress.dates||[]),date])];
  progress.activity=[{at:new Date().toISOString(),kind:kind||'学習'},...(progress.activity||[])].slice(0,60);
  localStorage.setItem('casec-sprint',JSON.stringify(progress)); streak.textContent=dayStreak();
}
function renderCalendar(){
  const year=calendarMonth.getFullYear(),month=calendarMonth.getMonth();
  const first=new Date(year,month,1).getDay(),days=new Date(year,month+1,0).getDate();
  const studied=new Set(progress.dates||[]),today=new Date().toDateString();
  const cells=[...Array(first).fill('<span class="day empty"></span>'),...Array.from({length:days},(_,i)=>{const date=new Date(year,month,i+1).toDateString();return `<span class="day ${studied.has(date)?'study':''} ${date===today?'today':''}">${i+1}</span>`})].join('');
  const activity=(progress.activity||[]).slice(0,8).map(x=>{const d=new Date(x.at);return `<li><time>${d.toLocaleDateString('ja-JP',{month:'numeric',day:'numeric'})}</time><b>${x.kind}</b><small>${d.toLocaleTimeString('ja-JP',{hour:'2-digit',minute:'2-digit'})}</small></li>`}).join('')||'<li><span>まだ学習記録はありません。</span></li>';
  practice.innerHTML=`<p class="question-type">STUDY HISTORY</p><div class="calendar-head"><button class="month-button" id="prev-month" aria-label="前の月">‹</button><h3>${year}年 ${month+1}月</h3><button class="month-button" id="next-month" aria-label="次の月">›</button></div><div class="calendar-grid"><span class="weekday">日</span><span class="weekday">月</span><span class="weekday">火</span><span class="weekday">水</span><span class="weekday">木</span><span class="weekday">金</span><span class="weekday">土</span>${cells}</div><div class="history-summary"><span>今月の学習日</span><strong>${[...studied].filter(d=>{const x=new Date(d);return x.getFullYear()===year&&x.getMonth()===month}).length}</strong><span>日</span></div><ol class="history-list">${activity}</ol>`;
  practice.querySelector('#prev-month').onclick=()=>{calendarMonth=new Date(year,month-1,1);renderCalendar()};
  practice.querySelector('#next-month').onclick=()=>{calendarMonth=new Date(year,month+1,1);renderCalendar()};
}
function render(){
  document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.dataset.mode===mode));
  if(mode==='calendar'){renderCalendar();return}
  const todayIndex=Math.floor(Date.now()/86400000)%lessons.passages.length;
  const item=lessons[mode][mode==='passages'?todayIndex:index%lessons[mode].length];
  if(mode==='listen'){
    practice.innerHTML=`<p class="question-type">LISTEN FOR THE DETAIL / ${String(index%3+1).padStart(2,'0')}</p><p class="prompt">${item.text}</p><div class="audio-row"><button class="play" aria-label="英文を再生">▶</button><span class="hint">最初は文字を見ずに。必要なら何度でも。</span></div><div class="voice-controls"><label>声 <select id="voice-select" aria-label="英語の声"></select></label><label>速度 <select id="rate-select" aria-label="再生速度"><option value="0.72">ゆっくり</option><option value="0.82">聞きやすい</option><option value="0.94">標準</option></select></label></div><div class="choices">${item.answers.map((a,i)=>`<button class="choice" data-i="${i}">${a}</button>`).join('')}</div><div class="feedback" hidden></div>`;
    practice.querySelector('.play').onclick=()=>speak(item.say);
    renderVoiceControls();
    practice.querySelectorAll('.choice').forEach(btn=>btn.onclick=()=>{
      const chosen=+btn.dataset.i; const all=practice.querySelectorAll('.choice'); all.forEach(x=>x.disabled=true);
      btn.classList.add(chosen===item.correct?'correct':'wrong'); all[item.correct].classList.add('correct');
      const f=practice.querySelector('.feedback');f.hidden=false;f.innerHTML=`<b>${chosen===item.correct?'Nice. 正解です。':'ここを聞き違えました。'}</b><br>${chosen===item.correct?item.note:item.wrong[chosen]}<div class="transcript"><b>英文全文</b><br><span lang="en">${item.say}</span><br><br><b>日本語訳</b><br>${item.translation}</div>`; saveDone('聞く');
      const n=document.createElement('button');n.className='next';n.textContent='次の問題 →';n.onclick=next;practice.append(n);
    });
  }else if(mode==='travel'){
    practice.innerHTML=`<p class="question-type">TRAVEL CONVERSATION / ${item.scene}</p><p class="prompt">${item.prompt}</p><div class="audio-row"><button class="play" aria-label="会話を再生">▶</button><span class="hint">まずは文字を見ずに聞いて、必要なら繰り返しましょう。</span></div><div class="voice-controls"><label>声 <select id="voice-select" aria-label="英語の声"></select></label><label>速度 <select id="rate-select" aria-label="再生速度"><option value="0.72">ゆっくり</option><option value="0.82">聞きやすい</option><option value="0.94">標準</option></select></label></div><div class="choices">${item.answers.map((a,i)=>`<button class="choice" data-i="${i}">${a}</button>`).join('')}</div><div class="feedback" hidden></div>`;
    practice.querySelector('.play').onclick=()=>speak(item.say);
    renderVoiceControls();
    practice.querySelectorAll('.choice').forEach(btn=>btn.onclick=()=>{const chosen=+btn.dataset.i,all=practice.querySelectorAll('.choice');all.forEach(x=>x.disabled=true);btn.classList.add(chosen===item.correct?'correct':'wrong');all[item.correct].classList.add('correct');const f=practice.querySelector('.feedback');f.hidden=false;f.innerHTML=`<b>${chosen===item.correct?'Great! 正解です。':'ここを聞き違えました。'}</b><br>${chosen===item.correct?item.note:item.wrong[chosen]}<div class="transcript"><b>会話全文</b><br>${item.transcript}</div>`;saveDone('旅の会話');const n=document.createElement('button');n.className='next';n.textContent='次の会話 →';n.onclick=next;practice.append(n)});
  }else if(mode==='passages'){
    practice.innerHTML=`<p class="question-type">DAILY READING / ABOUT 30 SECONDS</p><p class="passage-day">TODAY'S PASSAGE</p><article class="passage-card"><h3>${item.title}</h3><p>${item.text}</p></article><div class="audio-row"><button class="play" aria-label="文章を読み上げる">▶</button><span class="hint">声と速度を選び、まずは目で追いながら聞きましょう。</span></div><div class="voice-controls"><label>声 <select id="voice-select" aria-label="英語の声"></select></label><label>速度 <select id="rate-select" aria-label="再生速度"><option value="0.72">ゆっくり</option><option value="0.82">聞きやすい</option><option value="0.94">標準</option></select></label></div><p class="feedback"><b>読むポイント</b><br>${item.tip}</p><div class="translation-box"><b>日本語訳</b><br>${item.translation}</div><button class="next" id="read-done">今日の文章を読んだ ✓</button>`;
    practice.querySelector('.play').onclick=()=>speak(item.text);
    renderVoiceControls();
    practice.querySelector('#read-done').onclick=e=>{saveDone('読む');e.currentTarget.textContent='今日の学習を記録しました ✓';e.currentTarget.disabled=true};
  }else{
    const examples=item.examples||[item.example];
    practice.innerHTML=`<p class="question-type">${mode==='words'?'VOCABULARY / COLLOCATION':'USEFUL EXPRESSION'} / ${String(index%3+1).padStart(2,'0')}</p><div class="word-card"><p class="word">${item.word}</p><p class="meaning">${item.meaning}</p><div class="examples">${examples.map((example,i)=>`<div class="example"><b>${i+1}.</b> ${typeof example==='string'?example:example.en}<button class="example-play" data-i="${i}" aria-label="例文${i+1}を読み上げる">▶</button>${typeof example==='string'?'':`<small class="example-translation">${example.ja}</small>`}</div>`).join('')}</div><p class="feedback"><b>覚え方</b><br>${item.tip}</p></div><div class="actions"><button class="action" id="again">まだ練習する</button><button class="action good" id="got-it">覚えた ✓</button></div>`;
    practice.querySelectorAll('.example-play').forEach(button=>button.onclick=()=>{const example=examples[Number(button.dataset.i)];speak(typeof example==='string'?example:example.en)});
    document.querySelector('#again').onclick=next; document.querySelector('#got-it').onclick=()=>{saveDone(mode==='words'?'語彙':'表現');next()};
  }
}
function next(){index++;render()}
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{mode=t.dataset.mode;index=0;render()});
document.querySelector('#reset').onclick=()=>{if(confirm('学習記録をリセットしますか？')){progress={done:0,dates:[],activity:[]};localStorage.removeItem('casec-sprint');streak.textContent=0;}};
const installDialog=document.querySelector('#install-dialog');
document.querySelector('#install-help').onclick=()=>installDialog.showModal();
installDialog.querySelector('.dialog-close').onclick=()=>installDialog.close();
if('serviceWorker' in navigator) navigator.serviceWorker.register('./service-worker.js');
speechSynthesis.onvoiceschanged=()=>{if(mode==='listen'||mode==='passages'||mode==='travel')renderVoiceControls()};
streak.textContent=dayStreak(); render();
