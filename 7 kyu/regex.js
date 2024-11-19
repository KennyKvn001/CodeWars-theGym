function validatePIN(pin) {
  // Check if the length is either 4 or 6
  if (pin.length === 4 || pin.length === 6) {
    // Check if all characters are digits
    for (let i = 0; i < pin.length; i++) {
      if (pin[i] < "0" || pin[i] > "9") {
        // according to ascii
        return false; // Found a non-digit character
      }
    }
    return true; // All checks passed
  }
  return false; // Invalid length
}
