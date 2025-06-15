function checkSpam(str) {
  const lowerString = str.toLowerCase();

  if (
    lowerString.includes("viagra") ||
    lowerString.includes("XXX".toLowerCase())
  ) {
    return true;
  }

  return false;
}

console.log(checkSpam("buy ViAgRA now")); // true
console.log(checkSpam("free xxxxx")); // true
console.log(checkSpam("innocent rabbit")); // false
