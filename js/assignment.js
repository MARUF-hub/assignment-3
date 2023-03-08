// https://github.com/MARUF-hub/assignment-3

// 1. kilometer To Meter

function kilometerToMeter(kilometer) {
  if (isNaN(kilometer) || kilometer < 0) {
    return "please Enter Valid Number!";
  }
  return kilometer * 1000;
}

// 2. budget Calculator

function budgetCalculator(watch = 0, phone = 0, laptop = 0) {
  if (isNaN(watch + phone + laptop)) {
    return "Not a Valid Number!";
  }
  if (watch < 0 || phone < 0 || laptop < 0) {
    return "Not a Valid Number";
  } else {
    const watchPrice = parseFloat(watch * 50);
    const phonePrice = parseFloat(phone * 100);
    const laptopPrice = parseFloat(laptop * 500);
    const total = watchPrice + phonePrice + laptopPrice;
    return total;
  }
}

// 3. hotel Cost

function hotelCost(day = 0) {
  if (isNaN(day) || day < 0) {
    return "Please Enter valid Day!";
  } else {
    const days = parseFloat(day);
    const tenDaysCost = 10 * 100;
    const secondTenDaysCost = 10 * 80;

    if (days <= 10) {
      return days * 100;
    } else if (days <= 20) {
      const remainingDaysCost = (days - 10) * 80;
      const totalCost = tenDaysCost + remainingDaysCost;
      return totalCost;
    } else {
      const remainingDaysCost = (days - 20) * 50;
      const totalCost = tenDaysCost + secondTenDaysCost + remainingDaysCost;
      return totalCost;
    }
  }
}

// 4.  biggest name

const friendNames = ["Maruf", "Jhankar", "Utsho", "Rayhan", "Kawser", "Arman"];

function megaFriend(friends = []) {
  if (Array.isArray(friends)) {
    let megaName = friends[0];
    for (let friend of friends) {
      if (megaName.length < friend.length) {
        megaName = friend;
      }
    }
    return megaName;
  }
  return "please Enter an Array";
}
