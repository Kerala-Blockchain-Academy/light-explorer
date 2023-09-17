# BL🔍CK VIEWER

Block Viewer is a streamlined blockchain explorer designed specifically for EVM (Ethereum Virtual Machine) based blockchain networks. Its primary advantage is its lightweight nature, ensuring that it doesn't consume excessive resources like many other explorers. This makes it particularly suitable for those who need a less resource-intensive solution. Moreover, as long as users have access to the RPC APIs, they can utilize Block Viewer seamlessly. A significant motivation behind the development of Block Viewer was the realization that many existing explorers are not only resource-heavy but also lack compatibility with private network setups. Block Viewer fills this gap, offering a versatile tool for both public and private blockchain explorations.

## 🎯 Purpose
The explorer is primarily designed for real-time viewing of private blockchain networks, addressing the requirements when EVM-based networks are utilized for private applications. It's a lightweight, resource-efficient application intended to operate concurrently with the network. Moreover, its minimal reliance on external libraries such as web3 or ether.js ensures hassle-free maintenance.

## 🛠 Built With

<div align="left">
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/Kerala-Blockchain-Academy/MediaVault/f822abfb1ca9f89c703822049ea417256798e1d5/assets/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/Kerala-Blockchain-Academy/MediaVault/f822abfb1ca9f89c703822049ea417256798e1d5/assets/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://react.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/Kerala-Blockchain-Academy/MediaVault/f822abfb1ca9f89c703822049ea417256798e1d5/assets/react-colored.svg" width="36" height="36" alt="ReactJs" /></a>
<a href="https://ethereum.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/Kerala-Blockchain-Academy/MediaVault/f822abfb1ca9f89c703822049ea417256798e1d5/assets/ethereum-colored.svg" width="36" height="36" alt="Ethereum" /></a>
</div>

## 📢 Prerequisites
 - NodeJS 16.x

## ⚙️ Run Locally

Clone the Project and change into the directory

```bash
git clone https://github.com/Kerala-Blockchain-Academy/light-explorer
cd light-explorer
```

Install dependencies

```bash
npm install
```

To connect to any EVM-compatible blockchain network, update the **REACT_APP_API_URL** value in the **.env** file.
https://github.com/Kerala-Blockchain-Academy/light-explorer/blob/b7c09be0631f931fbf6541080d2ac2a5e2756489/.env#L1

Run the application

```bash
npm start
```

## 🐳 Docker

Now to run using docker execute the following command

```bash
docker compose up -d
```

## 🎞️ Demo
[Demo](https://youtu.be/fXzQrl0F95Y?si=2bnAb7-vvfxxFwvM)

## 📦 Planned Updates

* MetaMask Compatability
* UI Updates
* Mobile View
* Production Release
* Desktop App

## 🎗️ Contributing
The open source community thrives on the contributions of its members, making it a remarkable space for learning, inspiration, and innovation. Every contribution you offer is **deeply valued**.  

Should you have ideas to enhance this, kindly fork the repository and initiate a pull request. Alternatively, you can open an issue and tag it with **enhancement**. Remember to star the project! Many thanks!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/<feature_name>`)
3. Commit your Changes (`git commit -m '<feature_name>_added'`)
4. Push to the Branch (`git push origin feature/<feature_name>`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT license - see the [LICENSE.md](https://github.com/Kerala-Blockchain-Academy/light-explorer/blob/main/LICENSE) file for details.
