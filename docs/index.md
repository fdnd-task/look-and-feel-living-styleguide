
  <body>
    <header>
      <h1>[Projectnaam] styleguide v0.1</h1>
    </header>

    <nav>
      <ul>
        <li><a href="/" class="active">Globals</a></li>
        <li><a href="/">...</a></li>
      </ul>
    </nav>

    <main>
      <h2>Globals</h2>

      <section>
        <h3>Header</h3>
        <img src="screenshot_van_je_header.png" alt="screenshot van je header" />

        <h4>Wel doen</h4>
        <p>Vertel hoe dingen toegepast moeten worden.</p>

        <h4>Niet doen</h4>
        <p>Vertel hoe dingen vooral niet toegepast moeten worden.</p>

        <!-- Om HTML in HTML te laten zien gebruik je &lt; voor de < en &gt; voor de > -->
        <pre><code>&lt;header&gt;
  &lt;h1&gt;Zo maak je een header&lt;/h1&gt;
&lt;/header&gt;

header {
  background-color: white;
  margin-bottom: 1rem;
  color: silver;
}

header > h1 {
  font-size: 1rem;
  text-align: right;
}
  </code></pre>
      </section>

      <section>
        <h3>Footer</h3>
        ...
      </section>
    </main>
  </body>
</html>
