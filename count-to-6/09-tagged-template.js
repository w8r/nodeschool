console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
    
function html (str, ...rest) {
	let strings = str.slice();
	let j = 1;
  let safewords = rest.map((str) => str
  	.replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;'))
  .forEach((w, i) => {
  	strings.splice(i + j++, 0, w);
  });
  return strings.join('');
}

// <b>Edd Dumbill says</b>: \"HTML isn&amp;apos;t a very good language for making Web pages. However, it has been a very good language for making the Web.\"
// <b>Edd Dumbill says</b>: \"HTML isn&apos;t a very good language for making Web pages. However, it has been a very good language for making the Web.\"
