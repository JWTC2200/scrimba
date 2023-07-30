document.querySelector('form').addEventListener('submit', e => {
   e.preventDefault();
   const data = new FormData(e.target);
   const dataObject = (Object.fromEntries(data.entries()));
   console.log(dataObject.one)
 });