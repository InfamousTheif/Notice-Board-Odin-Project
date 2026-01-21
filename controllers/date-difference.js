function getTimeDiff(sentDate) {
const utcTime = new Date().toISOString();
const sentAt = new Date(sentDate);
const now = new Date(utcTime);

let diffMs = now - sentAt; // difference in ms

// Prevents negative values
diffMs = Math.max(diffMs, 0);

// Converting from ms to other units

const second = 1000;
const minute = second * 60;
const hour   = minute * 60;
const day    = hour * 24;

const days = Math.floor(diffMs / day);
diffMs %= day;

const hours = Math.floor(diffMs / hour);
diffMs %= hour;

const minutes = Math.floor(diffMs / minute);
diffMs %= minute;

const seconds = Math.floor(diffMs / second);

// Display
 return `${days}d ${hours}h ${minutes}m ${seconds}s`
}

export { getTimeDiff }