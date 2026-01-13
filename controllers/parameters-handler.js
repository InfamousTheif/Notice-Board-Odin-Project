// Getting the parameters from the msgDetails page

function getParameter(queryString) {
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
}

export { getParameter }