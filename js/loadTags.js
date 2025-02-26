function loadMetaTags() {
    var metas = `
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=0.5 minimum-scale=1, maximum-scale=3">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="author" content="3omni">
	<meta name="web_author" content="3omni">
	<meta name="description" content="Rita Geleta's website">
	<meta name="keywords" content="Margarita Rita Geleta 3omni">
	<meta name="revisit-after" content="7 days">
	<meta name="reply-to" content="geleta@berkeley.edu">
	<meta name="HandheldFriendly" content="true">
	<meta name="MobileOptimized" content="320">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="city" content="San Francisco">
	<meta name="country" content="US">
	<meta name="distribution" content="global">
	<meta http-equiv="content-language" content="en">

	<meta property="og:title" content="3omni">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="3omni">
	<meta property="og:description" content="Rita Geleta's website">
	<meta property="og:url" content="https://margaritageleta.github.io">
	<meta property="og:image" content="./img/ini.png">
	<meta property="og:image:secure_url" content="./img/ini.png">
	<meta property="og:image:alt" content="Landing page screenshot">

	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@ritageleta">
	<meta name="twitter:creator" content="@ritageleta">
	<meta name="twitter:title" content="3omni">
	<meta name="twitter:description" content="Rita Geleta's website">
	<meta property="twitter:image" content="./img/ini.png">
	<meta property="twitter:image:secure_url" content="./img/ini.png">

	<meta name="apple-mobile-web-app-title" content="3omni">
	<meta name="application-name" content="3omni">
	<meta name="theme-color" content="white"> 
    `;
    document.getElementById('head').insertAdjacentHTML('afterend', metas);
}

function loadLibraries() {
    var libs = `
    <link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet"> 
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/css/flag-icon.min.css" rel="stylesheet"/>
	<script type="text/javascript" src="https://www.maths.nottingham.ac.uk/plp/pmadw/LaTeXMathML.js"></script>
    `;
    document.getElementById('head').insertAdjacentHTML('afterend', libs);
}

function loadScripts() {
    var scripts = `
    `;
    document.getElementById('head').insertAdjacentHTML('afterend', scripts);
}