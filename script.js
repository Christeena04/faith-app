const verses = [
  "God is within her, she will not fall. – Psalm 46:5",
  "Trust in the Lord with all your heart. – Proverbs 3:5",
  "Be still and know that I am God. – Psalm 46:10"
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


