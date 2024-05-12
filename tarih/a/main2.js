function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourDeg = (hour % 12) * 30 + minute / 2;
    const minuteDeg = minute * 6;
    const secondDeg = second * 6;
  
    document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;
  }
  
  setInterval(updateClock, 1000); // Her saniyede saat güncellenir
  