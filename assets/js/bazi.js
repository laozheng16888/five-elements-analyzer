document.getElementById("baziForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const birthtime = document.getElementById("birthtime").value;

  const birth = new Date(`${birthdate}T${birthtime}`);
  if (isNaN(birth)) {
    alert("Please enter a valid birth date and time.");
    return;
  }

  const year = birth.getFullYear();
  const month = birth.getMonth() + 1;
  const day = birth.getDate();
  const hour = birth.getHours();

  const bazi = getBaZi(year, month, day, hour);
  const fiveCounts = countFiveElements(bazi);
  const dominant = getDominantElement(fiveCounts);

  document.getElementById("baziResult").innerText = `Year Pillar: ${bazi.year}
Month Pillar: ${bazi.month}
Day Pillar: ${bazi.day}
Hour Pillar: ${bazi.hour}`;

  document.getElementById("insightText").innerText =
    `Your dominant element is: ${dominant}.\n` +
    getAdviceByElement(dominant);

  drawChart(fiveCounts);
  document.getElementById("resultSection").style.display = "block";
});

// 简化干支算法（60年一轮）
function getGanZhiIndex(year) {
  const baseYear = 1984; // 甲子年
  const offset = (year - baseYear + 60) % 60;
  return offset;
}

function getBaZi(year, month, day, hour) {
  const ganzhiIndex = getGanZhiIndex(year);
  const tg = tiangan[ganzhiIndex % 10].name;
  const dz = dizhi[ganzhiIndex % 12].name;

  // 简化月/日/时柱（真实应根据节气排盘）
  const monthTG = tiangan[(ganzhiIndex + month) % 10].name;
  const monthDZ = dizhi[(month - 1) % 12].name;
  const dayTG = tiangan[(ganzhiIndex + day) % 10].name;
  const dayDZ = dizhi[(day - 1) % 12].name;
  const hourIndex = Math.floor(hour / 2) % 12;
  const hourTG = tiangan[(ganzhiIndex + hourIndex) % 10].name;
  const hourDZ = dizhi[hourIndex].name;

  return {
    year: `${tg}${dz}`,
    month: `${monthTG}${monthDZ}`,
    day: `${dayTG}${dayDZ}`,
    hour: `${hourTG}${hourDZ}`
  };
}

function countFiveElements(bazi) {
  const elements = {
    Wood: 0,
    Fire: 0,
    Earth: 0,
    Metal: 0,
    Water: 0
  };

  const all = `${bazi.year}${bazi.month}${bazi.day}${bazi.hour}`.split("");
  all.forEach(char => {
    const tg = tiangan.find(t => t.name === char);
    if (tg) elements[tg.element]++;
    const dz = dizhi.find(d => d.name === char);
    if (dz) {
      elements[dz.element]++;
      dz.hides.forEach(h => {
        const hTG = tiangan.find(t => t.name === h);
        if (hTG) elements[hTG.element] += 0.3;
      });
    }
  });

  return elements;
}

function getDominantElement(counts) {
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

function getAdviceByElement(element) {
  switch (element) {
    case "Wood":
      return "You're creative, growth-oriented, and often put others first. Balance is needed to avoid burnout.";
    case "Fire":
      return "You are passionate, charismatic, and driven. Channel your energy wisely and avoid impulsiveness.";
    case "Earth":
      return "You're stable, dependable, and nurturing. Guard against over-worrying or stubbornness.";
    case "Metal":
      return "You value order, precision, and truth. Loosen rigidity and embrace flexibility.";
    case "Water":
      return "You're intuitive, wise, and adaptive. Beware of overthinking or emotional withdrawal.";
    default:
      return "No dominant element found.";
  }
}
