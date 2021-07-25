document.getElementById('submit').addEventListener('click', () =>{
    console.log(getPostUrl(accessToken));
})
var getPostUrl = function (token) {
    return `
    function getNextSiblings(elem, filter) {
        var sibs = [];
        while (elem = elem.nextSibling) {
            if (elem.nodeType === 3) continue; // text node
            if (!filter || filter(elem)) sibs.push(elem);
        }
        return sibs;
    }
    function getCurrentDate(withTime = true){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
    
        var yyyy = today.getFullYear();
        if (dd < 10) {
        dd = '0' + dd;
        } 
        if (mm < 10) {
        mm = '0' + mm;
        } 
        if (withTime)
            return yyyy + '-' + mm + '-' + dd + ' ' + today.toLocaleTimeString().substring(0,8);
        return yyyy + '-' + mm + '-' + dd
    }
    
    a = document.querySelector('.uk-dropcap')
    rs = getNextSiblings(a,  (elem) => {
        res = ["uk-heading-bullet", 'games-after-content'].filter(e => e == elem.className)
        return res == ''
    });
    content = rs.reduce((prev, curr) => {
        return prev += "\\n" + curr.outerHTML;
    }, a.outerHTML)
    
    coverImage = document.querySelector('.aligncenter').getAttribute('src')
    title = document.querySelector('.uk-article-title').innerText.replace('Free Download','')
    tags = document.querySelectorAll('[rel="category tag"]')
    content = content.replace('<a href="https://igg-games.com/how-to-install-a-pc-game-and-update.html" target="_blank" rel="noopener">Instructions on how to install</a>','')
    content = (\`<div><figure><a style="margin-left: 1em; margin-right: 1em;" href="\${coverImage}"><img src="\${coverImage}" border="0"></a></figure>\${content}</div>\`);
    content = content.replaceAll("\\n",'')
    content = content.replaceAll("“",'\\"')
    content = content.replaceAll("”",'\\"')
    content = content.replaceAll("’",'\\'')
    content = content.replaceAll("!",'')
    content = content.replaceAll("\\"",'\\\\"')
    content = content.replaceAll("®",'')
    content = content.replaceAll("×",'x')
    
    
    tag = [];
    tags.forEach(el => {
        tag.push(el.innerText)
    });
    tag = tag.join(',')
    
    console.log(\`
    title: \${title}
    tags: \${tag}
    ---
    curl \\\\
     -H 'authorization: Bearer ${token}' \\\\
     --data-urlencode 'title=\${title}' \\\\
     --data-urlencode "content=\${content}" \\\\
     --data-urlencode 'tags=\${tag}' \\\\
     --data-urlencode 'categories=\${tag}' \\\\
     --data-urlencode 'status=draft' \\\\
     'https://public-api.wordpress.com/rest/v1.1/sites/162924930/posts/new/'
   \`);
`    
}
