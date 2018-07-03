webpackJsonp([0x6570abab06b5],{481:function(e,n){e.exports={data:{markdownRemark:{html:'<p>HackerOne supports the following markdown syntax on reports, profiles, and security pages.</p>\n<h3>HEADERS</h3>\n<pre><code>A First Level Header\n=====================\n\nA Second Level Header\n---------------------\n\n### Header 3\n</code></pre>\n<h1>A First Level Header</h1>\n<h2>A Second Level Header</h2>\n<h3>Header 3</h3>\n<h3>BLOCKQUOTE</h3>\n<pre><code>>text in blockquote\n>more text in blockquote\n</code></pre>\n<blockquote>\n<p>text in blockquote</p>\n</blockquote>\n<blockquote>\n<p>more text in blockquote</p>\n</blockquote>\n<h3>TEXT EMPHASIS</h3>\n<pre><code>*This text is italicized*\n_This text is underlined_\n**This text is bold**\n__This text is bold__\n--This text is deleted--\n</code></pre>\n<p><em>This text is italicized</em></p>\n<p><u>This text is underlined</u></p>\n<p><strong>This text is bold</strong></p>\n<p><strong>This text is bold</strong></p>\n<p><del>This text is deleted</del></p>\n<h3>LISTS</h3>\n<h4>Unordered Lists</h4>\n<pre><code>* Candy.\n* Gum.\n* Juice.\n</code></pre>\n<p>this:</p>\n<pre><code>+ Candy.\n+ Gum.\n+ Juice.\n</code></pre>\n<p>and this:</p>\n<pre><code>- Candy\n- Gum.\n- Juice.\n</code></pre>\n<p>all produce the same output:</p>\n<ul>\n<li>Candy.</li>\n<li>Gum.</li>\n<li>Juice.</li>\n</ul>\n<h4>Numbered Lists</h4>\n<pre><code>1. Red\n2. Green\n3. Blue\n</code></pre>\n<ol>\n<li>Red</li>\n<li>Green</li>\n<li>Blue</li>\n</ol>\n<p>If you put blank lines between items, you’ll get <code>&#x3C;p></code> tags for the list item text. You can create multi-paragraph list items by indenting the paragraphs by 4 spaces or 1 tab:</p>\n<pre><code>* A list item.\n\n  With multiple paragraphs.\n\n* Another item in the list.\n</code></pre>\n<ul>\n<li>\n<p>A list item.</p>\n<p>With multiple paragraphs.</p>\n</li>\n<li>\n<p>Another item in the list.</p>\n</li>\n</ul>\n<h3>LINKS</h3>\n<p>Markdown supports two styles for creating links: <em>inline</em> and <em>reference</em>. With both styles, you use square brackets to delimit the text you want to turn into a link.</p>\n<p>Inline-style links use parentheses immediately after the link text. For example:</p>\n<pre><code>This is an [example link](http://example.com/).\n</code></pre>\n<p>This is an <a href="http://example.com/">example link</a>.</p>\n<p>Optionally, you may include a title attribute in the parentheses. Hover on the link to see the title:</p>\n<pre><code>This is an [example link](http://example.com/ "With a Title").\n</code></pre>\n<p>This is an <a href="http://example.com/" title="With a Title">example link</a>.</p>\n<p>Reference-style links allow you to refer to your links by names, which you define elsewhere in your document:</p>\n<pre><code>I get 10 times more traffic from [Google][1] than from\n[Yahoo][2] or [MSN][3].\n\n[1]: http://google.com/        "Google"\n[2]: http://search.yahoo.com/  "Yahoo Search"\n[3]: http://search.msn.com/    "MSN Search"\n</code></pre>\n<p>I get 10 times more traffic from Google than from Yahoo or MSN.</p>\n<p>The title attribute is optional. Link names may contain letters, numbers and spaces, but are not case sensitive:</p>\n<pre><code>I start my morning with a cup of coffee and\n[The New York Times][NY Times].\n\n[ny times]: http://www.nytimes.com/\n</code></pre>\n<p>I start my morning with a cup of coffee and The New York Times.</p>\n<h3>CODE</h3>\n<p>In a regular paragraph, you can create code span by wrapping text in back tick quotes. Any ampersands (&#x26;) and angle brackets (&#x3C; or >) will automatically be translated into HTML entities. This makes it easy to use Markdown to write about HTML example code.</p>\n<pre><code>The text has sample `code`\n</code></pre>\n<p>The text has sample code</p>\n<p>To specify an entire block of pre-formatted code, wrap the text within 3 back tick quotes (`<code></code>). Just like with code spans, &#x26;, &#x3C;, and > characters will be escaped automatically.</p>\n<pre><code>This is a multiline code block.\n</code></pre>\n<p>To use syntax highlighting, specify the content type after the three opening back tick quotes.</p>\n<pre><code>```javascript\ndocument.location = \'https://hackerone.com\';\n</code></pre>\n<p>Go to the following web page to see which content types are available for syntax highlighting: <a href="https://github.com/jneen/rouge/tree/master/lib/rouge/demos">https://github.com/jneen/rouge/tree/master/lib/rouge/demos</a>.</p>\n<h3>USER MENTIONS</h3>\n<p>You can mention a user by prefixing username with \'@\' symbol</p>\n<pre><code>@demo-member reported the issue\n</code></pre>\n<p>@demo-member reported the issue</p>\n<h3>REPORT REFERENCES</h3>\n<p>You can reference a report by prefixing report id with \'#\' symbol</p>\n<pre><code>#105887 is a publicly disclosed bug\n</code></pre>\n<p><a href="https://hackerone.com/reports/105887">#105887</a> is a publicly disclosed bug</p>\n<h3>ATTACHMENT REFERENCES</h3>\n<p>You can reference an attachment while writing reports, comments in reports and report summary. You can do this by writing \'F\' followed by attachment id (F). The attachment id is displayed before the attachment name once the upload is successful.</p>\n<p>Example: Consider a user is creating a report and uploads an attachment. Once the attachment is uploaded successfully, you will see see the reference id with the attachment name.\n<img src="https://github.com/Hacker0x01/docs.hackerone.com/blob/master/docs/hackers/images/markdown-1.png?raw=true" alt="markdown-1"></p>\n<p>Now you can reference the attachment in the report by writing \'F1\' and the attachment is referenced in the report as shown below.\n<img src="https://github.com/Hacker0x01/docs.hackerone.com/blob/master/docs/hackers/images/markdown-2.png?raw=true" alt="markdown-2"></p>\n<p>When the link is clicked, the attachment is displayed in the modal.\n<img src="https://github.com/Hacker0x01/docs.hackerone.com/blob/master/docs/hackers/images/markdown-3.png?raw=true" alt="markdown-3"></p>\n<h3>INLINE IMAGES AND VIDEOS</h3>\n<p>You can inline images and videos in the report description, comments and report summary by writing the attachment reference id within curly braces (as in {F:id}). Example: For the above attachment, the markdown</p>\n<pre><code> Here is an inlined image of an apple {F1}\n</code></pre>\n<p>will render the following:\n<img src="https://github.com/Hacker0x01/docs.hackerone.com/blob/master/docs/hackers/images/markdown-4.png?raw=true" alt="markdown-4"></p>',frontmatter:{title:"Using Markdown",id:"hackers/using-markdown",path:"/hackers/using-markdown.html"}}},pathContext:{}}}});
//# sourceMappingURL=path---hackers-using-markdown-html-8846145e686849b6908b.js.map