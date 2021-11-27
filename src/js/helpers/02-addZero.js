
export default function addLeadingZero(int) {
    const value = int.toString();
    if (value.length < 3) {
      return value.padStart(2, 0);
    }
    return value;
  }