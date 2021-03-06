/* Animations
-------------------------------------------------- */
lightbox.option({
  resizeDuration: 50,
  fadeDuration: 5,
  imageFadeDuration: 50,
  resizeDuration: 50,
  wrapAround: true,
});

/* Shop Text
-------------------------------------------------- */
function changeText(product, number) {
  // Text for grills
  let grillTitle1 = '16" Pit';
  let grillTitle2 = '20" Pit';
  let grillTitle3 = '24" Pit';

  let grillText1 =
    '36" long pipe, ¼" thick, 2 swivel tires, cup holder, napkin holder, 3 utensil hooks, 2 4" smoke stacks.';
  let grillText2 =
    '44" long, ¼" thick, 2 swivel tires, cup holder, napkin holder, 3 utensil hooks, 2 4" smoke stacks, double cooking rack';
  let grillText3 =
    '48" long, ¼" thick, 2 swivel tires, cup holder, napkin holder, 3 utensil hooks, 2 4" smoke stacks, double cooking rack';

  let grillPrice1 = "$900";
  let grillPrice2 = "$1100";
  let grillPrice3 = "$1300";

  // Text for smokers
  let smokerTitle1 = '16" Smoker';
  let smokerTitle2 = '20" Smoker';
  let smokerTitle3 = '24" Smoker';

  let smokerText1 =
    'Main chamber: 36" long, firebox: 16" long, 2 swivel tires, cup holder, napkin holder, 3 utensil hooks, 2 4" smoke stacks.';
  let smokerText2 =
    'Main chamber: 44" long, firebox: 20" long, 2 swivel tires, cup holder, napkin holder, 3 utensil hooks, 2 4" smoke stacks, double cooking rack';
  let smokerText3 =
    'Main chamber: 48" long, firebox: 24" long, 2 swivel tires, cup holder, napkin holder, 3 utensil hooks, 2 4" smoke stacks.';

  let smokerPrice1 = "$1100";
  let smokerPrice2 = "$1400";
  let smokerPrice3 = "$1700";

  // Text for firepits
  let firePitTitle1 = '20" Fire Pit';
  let firePitTitle2 = '24" Fire Pit';
  let firePitTitle3 = '30" Fire Pit';

  let firePitText1 = "Custom grill is $430.";
  let firePitText2 = "Custom grill is $500.";
  let firePitText3 = "Custom grill is $625.";

  let firePitPrice1 = "$350";
  let firePitPrice2 = "$450";
  let firePitPrice3 = "$550";

  // Text for Plain Lids
  let plainLidTitle1 = '16" Plain Lid';
  let plainLidTitle2 = '20" Plain Lid';
  let plainLidTitle3 = '24" Plain Lid';

  let plainLidText1 = '16" and 3/16" thick.';
  let plainLidText2 = '20" and 3/16" thick.';
  let plainLidText3 = '24" and 3/16" thick.';

  let plainLidPrice1 = "$30";
  let plainLidPrice2 = "$40";
  let plainLidPrice3 = "$50";

  // Text for Lids with damper
  let LidWDTitle1 = '16" Lid With Damper';
  let LidWDTitle2 = '20" Lid With Damper';
  let LidWDTitle3 = '24" Lid With Damper';

  let LidWDText1 = '16" and 3/16" thick.';
  let LidWDText2 = '20" and 3/16" thick.';
  let LidWDText3 = '24" and 3/16" thick.';

  let LidWDPrice1 = "$35";
  let LidWDPrice2 = "$45";
  let LidWDPrice3 = "$55";

  // Text for Lids with damper
  let damperTitle1 = '16" Damper';
  let damperTitle2 = '20" Damper';
  let damperTitle3 = '24" Damper';

  let damperText1 = '16" and 1/8" thick.';
  let damperText2 = '20" and 1/8" thick.';
  let damperText3 = '24" and 1/8" thick.';

  let damperPrice1 = "$10";
  let damperPrice2 = "$12.50";
  let damperPrice3 = "$15";

  if (product == 1) {
    if (number == 1) {
      document.getElementById("grillTitle").innerHTML = grillTitle1;
      document.getElementById("grillText").innerHTML = grillText1;
      document.getElementById("grillPrice").innerHTML = grillPrice1;
    }
    if (number == 2) {
      document.getElementById("grillTitle").innerHTML = grillTitle2;
      document.getElementById("grillText").innerHTML = grillText2;
      document.getElementById("grillPrice").innerHTML = grillPrice2;
    }
    if (number == 3) {
      document.getElementById("grillTitle").innerHTML = grillTitle3;
      document.getElementById("grillText").innerHTML = grillText3;
      document.getElementById("grillPrice").innerHTML = grillPrice3;
    }
  }
  if (product == 2) {
    if (number == 1) {
      document.getElementById("smokerTitle").innerHTML = smokerTitle1;
      document.getElementById("smokerText").innerHTML = smokerText1;
      document.getElementById("smokerPrice").innerHTML = smokerPrice1;
    }
    if (number == 2) {
      document.getElementById("smokerTitle").innerHTML = smokerTitle2;
      document.getElementById("smokerText").innerHTML = smokerText2;
      document.getElementById("smokerPrice").innerHTML = smokerPrice2;
    }
    if (number == 3) {
      document.getElementById("smokerTitle").innerHTML = smokerTitle3;
      document.getElementById("smokerText").innerHTML = smokerText3;
      document.getElementById("smokerPrice").innerHTML = smokerPrice3;
    }
  }
  if (product == 3) {
    if (number == 1) {
      document.getElementById("firepitTitle").innerHTML = firePitTitle1;
      document.getElementById("firepitText").innerHTML = firePitText1;
      document.getElementById("firepitPrice").innerHTML = firePitPrice1;
    }
    if (number == 2) {
      document.getElementById("firepitTitle").innerHTML = firePitTitle2;
      document.getElementById("firepitText").innerHTML = firePitText2;
      document.getElementById("firepitPrice").innerHTML = firePitPrice2;
    }
    if (number == 3) {
      document.getElementById("firepitTitle").innerHTML = firePitTitle3;
      document.getElementById("firepitText").innerHTML = firePitText3;
      document.getElementById("firepitPrice").innerHTML = firePitPrice3;
    }
  }
  if (product == 4) {
    if (number == 1) {
      document.getElementById("plainLidTitle").innerHTML = plainLidTitle1;
      document.getElementById("plainLidText").innerHTML = plainLidText1;
      document.getElementById("plainLidPrice").innerHTML = plainLidPrice1;
    }
    if (number == 2) {
      document.getElementById("plainLidTitle").innerHTML = plainLidTitle2;
      document.getElementById("plainLidText").innerHTML = plainLidText2;
      document.getElementById("plainLidPrice").innerHTML = plainLidPrice2;
    }
    if (number == 3) {
      document.getElementById("plainLidTitle").innerHTML = plainLidTitle3;
      document.getElementById("plainLidText").innerHTML = plainLidText3;
      document.getElementById("plainLidPrice").innerHTML = plainLidPrice3;
    }
  }
  if (product == 5) {
    if (number == 1) {
      document.getElementById("lidWDTitle").innerHTML = LidWDTitle1;
      document.getElementById("lidWDText").innerHTML = LidWDText1;
      document.getElementById("lidWDPrice").innerHTML = LidWDPrice1;
    }
    if (number == 2) {
      document.getElementById("lidWDTitle").innerHTML = LidWDTitle2;
      document.getElementById("lidWDText").innerHTML = LidWDText2;
      document.getElementById("lidWDPrice").innerHTML = LidWDPrice2;
    }
    if (number == 3) {
      document.getElementById("lidWDTitle").innerHTML = LidWDTitle3;
      document.getElementById("lidWDText").innerHTML = LidWDText3;
      document.getElementById("lidWDPrice").innerHTML = LidWDPrice3;
    }
  }
  if (product == 6) {
    if (number == 1) {
      document.getElementById("damperTitle").innerHTML = damperTitle1;
      document.getElementById("damperText").innerHTML = damperText1;
      document.getElementById("damperPrice").innerHTML = damperPrice1;
    }
    if (number == 2) {
      document.getElementById("damperTitle").innerHTML = damperTitle2;
      document.getElementById("damperText").innerHTML = damperText2;
      document.getElementById("damperPrice").innerHTML = damperPrice2;
    }
    if (number == 3) {
      document.getElementById("damperTitle").innerHTML = damperTitle3;
      document.getElementById("damperText").innerHTML = damperText3;
      document.getElementById("damperPrice").innerHTML = damperPrice3;
    }
  }
}
