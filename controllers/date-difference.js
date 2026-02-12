import { header } from "express-validator";

function getTimeDiff(sentDate) {
const sentAt = new Date(sentDate);
const now = new Date();

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

// function getAmPM(date) {
//   const hours = date.getHours();
//   const amPm = hours < 12 ? 'AM' : 'PM';
//   return amPm;
// }

function getPreferredLang(req) {
  const fallBack = 'en-US';
  const langHeader = req.headers['accept-language'];
  if(!langHeader) return fallBack;

  return langHeader.split(',')[0].split(';')[0].trim() || fallBack;
}

function hourMinuteFormat(time, preferredLang) {
 const date = new Date(time)
 const hours = date.getHours();
 const minutes = date.getMinutes();

//  const formattedHours = hours.toString().padStart(2, '0');
//  const formattedMinutes = minutes.toString().padStart(2, '0');

//  const timeString = date.toLocaleTimeString('en-US', {
//    hour: 'numeric',
//    minute: '2-digit',
//    hour12: true
//  });

 const options = {
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
  hour: 'numeric',
  minute: 'numeric'
 }

 const formatter = new Intl.DateTimeFormat(preferredLang, options);
 const formattedDate = formatter.format(date);

 return `${formattedDate}`
}

export { getTimeDiff, hourMinuteFormat, getPreferredLang }