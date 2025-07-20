const verses = [
  "God is within her, she will not fall. – Psalm 46:5",
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Be still and know that I am God. – Psalm 46:10",
  "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
  "I can do all this through him who gives me strength. - Philippians 4:13",
  "The Lord is my shepherd, I lack nothing. - Psalm 23:1",
  "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
  "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9",
  "The joy of the Lord is your strength. - Nehemiah 8:10",
  "Cast all your anxiety on him because he cares for you. - 1 Peter 5:7",
   "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
    "Come to me, all you who are weary and burdened, and I will give you rest. - Matthew 11:28",
 "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
  "And we know that in all things God works for the good of those who love him. - Romans 8:28",
  "So do not fear, for I am with you; do not be dismayed, for I am your God. - Isaiah 41:10 ",
 "The name of the Lord is a fortified tower; the righteous run to it and are safe. - Proverbs 18:10 ",
 "May the God of hope fill you with all joy and peace as you trust in him. - Romans 15:13 ",
 "Your word is a lamp for my feet, a light on my path. - Psalm 119:105 ",
 "But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33 ",
  "But those who hope in the Lord will renew their strength. - Isaiah 40:31 ",
  "For we live by faith, not by sight. - 2 Corinthians 5:7",
 "I have been crucified with Christ and I no longer live, but Christ lives in me. - Galatians 2:20 ",
  "Take delight in the Lord, and he will give you the desires of your heart. - Psalm 37:4 "
  
  
  
];

// When "Today's Verse" button is clicked → open the verse box
document.getElementById("todays-verse-btn").addEventListener("click", () => {
  document.getElementById("verse-box").style.display = "flex";
  document.getElementById("bible-verse").innerText = "Discover todays message of hope and faith.";
});

// Show a random verse when the inner button is clicked
function showRandomVerse() {
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];
  document.getElementById("bible-verse").innerText = randomVerse;
  const audio = document.getElementById("verse-sound");
  audio.currentTime = 0;  // restart if already playing
  audio.play();
  verseEl.style.animation = 'none';
  void verseEl.offsetWidth;
  verseEl.style.animation = 'glowInVerse 1.2s ease-out forwards';
}

// Close popup
function closeVerse() {
  document.getElementById("verse-box").style.display = "none";
}
function copyVerse() {
  const verseEl = document.getElementById("bible-verse");
  const verseText = verseEl.innerText;

  navigator.clipboard.writeText(verseText).then(() => {
    alert("Verse copied to clipboard! 📋");
  }).catch(err => {
    alert("Oops, could not copy verse 😞");
    console.error(err);
  });
}
function shareVerse() {
  const verseText = document.getElementById("bible-verse").innerText;
  console.log("Verse to share:", verseText);

  if (navigator.share) {
    navigator.share({
      title: "Today's Bible Verse",
      text: verseText,  // This is what should be shared
      
    })
    .then(() => console.log('Shared successfully!'))
    .catch(console.error);
  } else {
    alert('Sharing not supported on this device. Try copying instead!');
  }
}


