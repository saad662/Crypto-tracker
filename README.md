<!DOCTYPE html>
<html>
<head>
</head>
<body>

<h1>Crypto Tracker React App</h1>



<p>This is a simple React web application that allows you to track cryptocurrency prices and market information using the CoinGecko API. You can view the live demo <a href="https://saad662.github.io/crypto-tracker">here</a>.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#getting-started">Getting Started</a></li>
  <li><a href="#dependencies">Dependencies</a></li>
  <li><a href="#scripts">Scripts</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="getting-started">Getting Started</h2>

<p>To get a local copy up and running, follow these steps:</p>

<ol>
  <li>Clone the repository to your local machine:</li>
</ol>

<pre><code>git clone https://github.com/your-username/crypto-tracker.git</code></pre>

<ol start="2">
  <li>Navigate to the project directory:</li>
</ol>

<pre><code>cd crypto-tracker</code></pre>

<ol start="3">
  <li>Install the necessary dependencies:</li>
</ol>

<pre><code>npm install</code></pre>

<ol start="4">
  <li>Start the development server:</li>
</ol>

<pre><code>npm start</code></pre>

<ol start="5">
  <li>Open your web browser and visit <a href="http://localhost:3000">http://localhost:3000</a> to see the app in action.</li>
</ol>

<h2 id="dependencies">Dependencies</h2>

<p>This project uses the following dependencies:</p>

<ul>
  <li><code>axios</code>: A promise-based HTTP client for making API requests.</li>
  <li><code>gh-pages</code>: Used for deploying the app to GitHub Pages.</li>
  <li><code>react</code> and <code>react-dom</code>: The core libraries for building the user interface.</li>
  <li><code>react-scripts</code>: Scripts and configuration used by Create React App.</li>
  <li><code>web-vitals</code>: Helps measure performance of the app.</li>
</ul>

<p>For testing:</p>

<ul>
  <li><code>@testing-library/jest-dom</code>, <code>@testing-library/react</code>, <code>@testing-library/user-event</code>: Testing utilities.</li>
</ul>

<h2 id="scripts">Scripts</h2>

<p>In the project directory, you can run the following scripts:</p>

<ul>
  <li><code>npm start</code>: Runs the app in development mode.</li>
  <li><code>npm run build</code>: Builds the app for production.</li>
  <li><code>npm test</code>: Launches the test runner.</li>
  <li><code>npm run eject</code>: Removes the single build dependency from your project.</li>
</ul>

<p>For deployment to GitHub Pages:</p>

<ul>
  <li><code>npm run predeploy</code>: Builds the app before deployment.</li>
  <li><code>npm run deploy</code>: Deploys the app using <code>gh-pages</code>.</li>
</ul>


<p>Replace <code>${currency}</code> with the desired currency code.</p>

<h2 id="license">License</h2>

<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>
</html>
